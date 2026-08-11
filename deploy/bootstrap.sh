#!/usr/bin/env bash
#
# One-time server setup for the caseyhsu.com Lightsail instance (Ubuntu).
#
#   scp deploy/bootstrap.sh ubuntu@<STATIC_IP>:~
#   ssh ubuntu@<STATIC_IP> 'sudo bash ~/bootstrap.sh'
#
# Idempotent: safe to re-run after changing DOMAIN/EMAIL or to pick up
# nginx config changes.
#
set -euo pipefail

DOMAIN="${DOMAIN:-caseyhsu.com}"
EMAIL="${EMAIL:-casey-hsu@outlook.com}"
DEPLOY_USER="${DEPLOY_USER:-ubuntu}"
SWAP_MB="${SWAP_MB:-1024}"

# Public half of ~/.ssh/portfolio_deploy on the workstation. Public keys are
# not secret; this is the same key GitHub Actions authenticates with.
DEPLOY_PUBKEY="${DEPLOY_PUBKEY:-ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFINkAXZ4+If4z9D81kgF1NbUmVx8X4jJMY8mVurpCn0 github-actions-portfolio-deploy}"

WEBROOT="/var/www/${DOMAIN}"
SNIPPET="/etc/nginx/snippets/${DOMAIN}-common.conf"
SITE="/etc/nginx/sites-available/${DOMAIN}"

log()  { printf '\n\033[1;36m==>\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m[warn]\033[0m %s\n' "$*" >&2; }
die()  { printf '\033[1;31m[fail]\033[0m %s\n' "$*" >&2; exit 1; }

[[ $EUID -eq 0 ]] || die "run with sudo: sudo bash $0"
id "$DEPLOY_USER" &>/dev/null || die "deploy user '$DEPLOY_USER' does not exist"

# ---------------------------------------------------------------- packages ---
log "Updating system packages"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get upgrade -y -qq

log "Installing nginx, certbot, and tooling"
apt-get install -y -qq \
  nginx \
  certbot python3-certbot-nginx \
  rsync \
  dnsutils \
  ufw \
  unattended-upgrades

# ------------------------------------------------------------------- swap ---
# 512 MB is tight for apt upgrades and certbot's python. A small swap file
# costs nothing on a 20 GB SSD and prevents OOM kills during maintenance.
if [[ ! -f /swapfile ]] && (( SWAP_MB > 0 )); then
  log "Creating ${SWAP_MB}MB swap file"
  fallocate -l "${SWAP_MB}M" /swapfile || dd if=/dev/zero of=/swapfile bs=1M count="$SWAP_MB"
  chmod 600 /swapfile
  mkswap -q /swapfile
  swapon /swapfile
  grep -q '^/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
  sysctl -qw vm.swappiness=10
  grep -q '^vm.swappiness' /etc/sysctl.conf || echo 'vm.swappiness=10' >> /etc/sysctl.conf
else
  log "Swap already configured, skipping"
fi

# ------------------------------------------------------------- ssh access ---
# Lightsail installs its own default keypair; the CI deploy key has to be
# added explicitly or GitHub Actions cannot reach the box.
if [[ -n "$DEPLOY_PUBKEY" ]]; then
  log "Authorizing deploy key for ${DEPLOY_USER}"
  SSH_DIR="$(getent passwd "$DEPLOY_USER" | cut -d: -f6)/.ssh"
  mkdir -p "$SSH_DIR"
  touch "$SSH_DIR/authorized_keys"
  if grep -qF "$(awk '{print $2}' <<<"$DEPLOY_PUBKEY")" "$SSH_DIR/authorized_keys"; then
    echo "  key already present"
  else
    echo "$DEPLOY_PUBKEY" >> "$SSH_DIR/authorized_keys"
    echo "  key added"
  fi
  chmod 700 "$SSH_DIR"
  chmod 600 "$SSH_DIR/authorized_keys"
  chown -R "${DEPLOY_USER}:${DEPLOY_USER}" "$SSH_DIR"
fi

# Ubuntu's Lightsail image already ships PasswordAuthentication no; assert it
# rather than rewrite sshd_config, so a bad edit can never lock you out.
if sshd -T 2>/dev/null | grep -q '^passwordauthentication yes'; then
  warn "sshd still accepts password auth -- consider disabling it once key login is confirmed"
fi

# --------------------------------------------------------------- webroot ----
log "Preparing ${WEBROOT}"
mkdir -p "${WEBROOT}/releases"
if [[ ! -e "${WEBROOT}/current" ]]; then
  # Placeholder so nginx has something to serve before the first deploy.
  mkdir -p "${WEBROOT}/releases/000000-placeholder"
  cat > "${WEBROOT}/releases/000000-placeholder/index.html" <<'HTML'
<!doctype html><meta charset="utf-8"><title>Awaiting deploy</title>
<body style="font:16px system-ui;padding:3rem;max-width:40rem;margin:auto">
<h1>Server is up.</h1><p>No release deployed yet. Run <code>deploy/deploy.sh</code> from the repo.</p>
HTML
  ln -sfn "${WEBROOT}/releases/000000-placeholder" "${WEBROOT}/current"
fi
chown -R "${DEPLOY_USER}:www-data" "$WEBROOT"
chmod 755 /var/www "$WEBROOT"

# ----------------------------------------------------------------- nginx ----
# Shared directives live in a snippet so that `certbot --nginx` can duplicate
# the server block for :443 without us losing caching/security config.
log "Writing nginx config"
mkdir -p /etc/nginx/snippets
cat > "$SNIPPET" <<NGINX
# Managed by deploy/bootstrap.sh -- edits will be overwritten.

root ${WEBROOT}/current;
index index.html;

# Astro emits a static tree: exact file, then directory index, then .html.
location / {
    try_files \$uri \$uri/index.html \$uri.html =404;
}

error_page 404 /404.html;
location = /404.html { internal; }

# Content-hashed assets never change under a given name. ^~ so this wins over
# the extension regex below, which would otherwise capture fonts and images.
location ^~ /_astro/ {
    access_log off;
    add_header Cache-Control "public, max-age=31536000, immutable" always;
    try_files \$uri =404;
}

location ~* \.(?:jpg|jpeg|png|gif|webp|avif|svg|ico|woff2?)\$ {
    access_log off;
    add_header Cache-Control "public, max-age=2592000" always;
    try_files \$uri =404;
}

# HTML must revalidate so a deploy is visible immediately.
location ~* \.html\$ {
    add_header Cache-Control "public, max-age=0, must-revalidate" always;
}

add_header X-Content-Type-Options    "nosniff" always;
add_header X-Frame-Options           "SAMEORIGIN" always;
add_header Referrer-Policy           "strict-origin-when-cross-origin" always;
add_header Permissions-Policy        "geolocation=(), microphone=(), camera=()" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

gzip              on;
gzip_vary         on;
gzip_comp_level   6;
gzip_min_length   256;
gzip_proxied      any;
gzip_types text/plain text/css text/xml application/javascript
           application/json application/xml image/svg+xml
           application/rss+xml application/manifest+json;

location = /robots.txt  { access_log off; }
location = /sitemap.xml { access_log off; }
location ~ /\.(?!well-known) { deny all; }
NGINX

cat > "$SITE" <<NGINX
# Managed by deploy/bootstrap.sh. certbot appends the TLS server block below.
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    include ${SNIPPET};
}
NGINX

ln -sfn "$SITE" "/etc/nginx/sites-enabled/${DOMAIN}"
rm -f /etc/nginx/sites-enabled/default

# server_names_hash_bucket_size guards against long hostnames later.
grep -q 'server_names_hash_bucket_size' /etc/nginx/nginx.conf || \
  sed -i '/http {/a \    server_names_hash_bucket_size 64;\n    server_tokens off;' /etc/nginx/nginx.conf

nginx -t || die "nginx config test failed"
systemctl enable --now nginx
systemctl reload nginx

# --------------------------------------------------------------- firewall ---
log "Configuring ufw"
ufw allow OpenSSH >/dev/null
ufw allow 'Nginx Full' >/dev/null
ufw --force enable >/dev/null
ufw status verbose

# ------------------------------------------------------------ certificates ---
SERVER_IP="$(curl -fsS --max-time 10 https://checkip.amazonaws.com || echo '')"
SERVER_IP6="$(ip -6 addr show scope global | awk '/inet6/{print $2}' | cut -d/ -f1 | head -n1)"
log "Checking DNS against this host (${SERVER_IP:-unknown} / ${SERVER_IP6:-no ipv6})"

CERT_DOMAINS=()
for d in "$DOMAIN" "www.${DOMAIN}"; do
  a="$(dig +short A "$d" | tail -n1)"
  aaaa="$(dig +short AAAA "$d" | tail -n1)"

  # This instance is dual-stack: Let's Encrypt prefers AAAA when one exists,
  # so a stale AAAA record fails validation even with a correct A record.
  if [[ -n "$aaaa" && -n "$SERVER_IP6" && "$aaaa" != "$SERVER_IP6" ]]; then
    warn "skip    $d has AAAA $aaaa but this host is $SERVER_IP6 -- fix or remove the AAAA record"
    continue
  fi

  if [[ -n "$a" && "$a" == "$SERVER_IP" ]]; then
    echo "  ok      $d -> $a${aaaa:+ / $aaaa}"
    CERT_DOMAINS+=(-d "$d")
  else
    warn "skip    $d -> ${a:-NXDOMAIN} (expected ${SERVER_IP:-?})"
  fi
done

if (( ${#CERT_DOMAINS[@]} == 0 )); then
  warn "No domain resolves to this instance yet -- skipping certbot."
  warn "Point DNS at ${SERVER_IP:-the static IP}, then re-run this script."
else
  log "Requesting Let's Encrypt certificate"
  certbot --nginx "${CERT_DOMAINS[@]}" \
    --non-interactive --agree-tos -m "$EMAIL" \
    --redirect --keep-until-expiring
  systemctl enable --now certbot.timer
  systemctl list-timers certbot.timer --no-pager || true
  nginx -t && systemctl reload nginx
fi

# ------------------------------------------------------- unattended-upgrade --
log "Enabling automatic security updates"
dpkg-reconfigure -f noninteractive unattended-upgrades

log "Bootstrap complete"
cat <<EOF

  Webroot   ${WEBROOT}/current  ->  releases/<timestamp>
  Site      http://${DOMAIN}

  GitHub repo secrets required by .github/workflows/deploy.yml:
    DEPLOY_HOST     ${SERVER_IP:-<static ip>}
    DEPLOY_USER     ${DEPLOY_USER}
    DEPLOY_PATH     ${WEBROOT}
    DEPLOY_SSH_KEY  contents of ~/.ssh/portfolio_deploy (private key)

  Then: git push origin main  (or run deploy/deploy.sh manually)

  Reminder: Lightsail has its own firewall in front of ufw.
  In the console -> Networking -> IPv4/IPv6 Firewall, make sure
  TCP 80 and TCP 443 are open (SSH 22 is open by default).

EOF
