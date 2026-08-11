#!/usr/bin/env bash
#
# Manual deploy from the workstation. Mirrors .github/workflows/deploy.yml --
# use it when CI is unavailable or you want to ship without pushing to main.
#
#   deploy/deploy.sh
#   deploy/deploy.sh --rollback
#
# Override any of the settings below via the environment, e.g.
#   DEPLOY_HOST=1.2.3.4 deploy/deploy.sh
#
set -euo pipefail

# Lightsail static IP (ca-central-1a). Public by definition, not a secret.
DEPLOY_HOST="${DEPLOY_HOST:-15.157.115.109}"
DEPLOY_USER="${DEPLOY_USER:-ubuntu}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/caseyhsu.com}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/portfolio_deploy}"
SITE_URL="${SITE_URL:-https://caseyhsu.com}"
KEEP_RELEASES="${KEEP_RELEASES:-5}"

TARGET="${DEPLOY_USER}@${DEPLOY_HOST}"
SSH=(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=accept-new "$TARGET")

log()  { printf '\n\033[1;36m==>\033[0m %s\n' "$*"; }
die()  { printf '\033[1;31m[fail]\033[0m %s\n' "$*" >&2; exit 1; }

[[ -f "$SSH_KEY" ]] || die "ssh key not found: $SSH_KEY"
cd "$(git rev-parse --show-toplevel)" || die "not inside the repo"

# ------------------------------------------------------------- rollback -----
if [[ "${1:-}" == "--rollback" ]]; then
  log "Rolling back to the previous release"
  "${SSH[@]}" bash -euo pipefail <<EOF
    cd '${DEPLOY_PATH}'
    current="\$(basename "\$(readlink current)")"
    prev="\$(ls -1dt releases/*/ | sed 's:/\$::' | grep -v "\$current" | head -n1)"
    [[ -n "\$prev" ]] || { echo "no previous release"; exit 1; }
    ln -sfn "${DEPLOY_PATH}/\$prev" "${DEPLOY_PATH}/current.tmp"
    mv -Tf "${DEPLOY_PATH}/current.tmp" "${DEPLOY_PATH}/current"
    echo "Rolled back: \$current -> \$(basename "\$prev")"
EOF
  exit 0
fi

# ---------------------------------------------------------------- build -----
if [[ ! -d node_modules ]]; then
  log "Installing dependencies"
  npm ci
fi

log "Building"
npm run build
[[ -f dist/index.html ]] || die "dist/index.html missing after build"
echo "  $(find dist -type f | wc -l) files, $(du -sh dist | cut -f1)"

# --------------------------------------------------------------- upload -----
RELEASE="$(date -u +%Y%m%d%H%M%S)-$(git rev-parse --short HEAD)$([[ -n "$(git status --porcelain)" ]] && echo '-dirty' || true)"
log "Uploading release ${RELEASE}"

"${SSH[@]}" "mkdir -p '${DEPLOY_PATH}/releases/${RELEASE}'"

# Each release lands in a fresh empty directory, so tar-over-ssh is equivalent
# to rsync --delete here. Falls back automatically when rsync is absent.
if command -v rsync >/dev/null; then
  rsync -az --delete --chmod=D755,F644 \
    -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=accept-new" \
    dist/ "${TARGET}:${DEPLOY_PATH}/releases/${RELEASE}/"
else
  echo "  rsync not found, using tar over ssh"
  tar -czf - -C dist . \
    | "${SSH[@]}" "tar -xzf - -C '${DEPLOY_PATH}/releases/${RELEASE}' \
        && chmod -R u=rwX,go=rX '${DEPLOY_PATH}/releases/${RELEASE}'"
fi

# ------------------------------------------------------------- activate -----
log "Activating"
"${SSH[@]}" bash -euo pipefail <<EOF
  cd '${DEPLOY_PATH}'
  test -f "releases/${RELEASE}/index.html"
  ln -sfn "${DEPLOY_PATH}/releases/${RELEASE}" "${DEPLOY_PATH}/current.tmp"
  mv -Tf "${DEPLOY_PATH}/current.tmp" "${DEPLOY_PATH}/current"
  ls -1dt releases/*/ | tail -n +$((KEEP_RELEASES + 1)) | xargs -r rm -rf
  echo "Active: \$(readlink current)"
EOF

log "Health check"
curl -fsSL --retry 3 --retry-delay 3 -o /dev/null \
  -w '  HTTP %{http_code} in %{time_total}s\n' "$SITE_URL/" \
  || echo "  (health check failed -- check DNS/TLS)"

log "Deployed ${RELEASE}"
