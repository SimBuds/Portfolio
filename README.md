# Casey Hsu's Personal Portfolio

- Built on Astro, served as a static site by nginx on AWS Lightsail
- Displays my current portfolio with plans for the future xD
- Live at https://caseyhsu.com

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Server setup

One-time, on a fresh Ubuntu Lightsail instance. Point DNS at the static IP and
open TCP 443 in the Lightsail console firewall first, then:

```bash
scp deploy/bootstrap.sh ubuntu@<STATIC_IP>:~
ssh ubuntu@<STATIC_IP> 'sudo bash ~/bootstrap.sh'
```

Installs nginx, certbot (with auto-renewal), ufw, and a swap file; creates
`/var/www/caseyhsu.com/` with a `releases/` + `current` symlink layout; and
authorizes the CI deploy key. Safe to re-run.

## Deploy

Pushing to `main` deploys automatically via GitHub Actions
(`.github/workflows/deploy.yml`): the workflow builds the site, uploads it to
`releases/<timestamp>-<sha>`, then atomically flips the `current` symlink. The
last 5 releases are kept.

Required repository secrets (Settings → Secrets and variables → Actions):

- `DEPLOY_SSH_KEY` — private key authorized on the server (`~/.ssh/portfolio_deploy`)
- `DEPLOY_HOST` — Lightsail static IP
- `DEPLOY_USER` — SSH user (`ubuntu`)
- `DEPLOY_PATH` — base path, `/var/www/caseyhsu.com` (not the `current` symlink)

To deploy manually or roll back:

```bash
DEPLOY_HOST=<STATIC_IP> deploy/deploy.sh
DEPLOY_HOST=<STATIC_IP> deploy/deploy.sh --rollback
```