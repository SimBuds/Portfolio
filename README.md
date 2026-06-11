# Casey Hsu's Personal Portfolio

- Built on Astro and hosted on a DigitalOcean droplet
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

## Deploy

Pushing to `main` deploys automatically via GitHub Actions
(`.github/workflows/deploy.yml`): the workflow builds the site and rsyncs
`dist/` to the droplet over SSH.

Required repository secrets (Settings → Secrets and variables → Actions):

- `DEPLOY_SSH_KEY` — private key authorized on the droplet (use a dedicated deploy key)
- `DEPLOY_HOST` — droplet hostname or IP
- `DEPLOY_USER` — SSH user (e.g. `casey`)
- `DEPLOY_PATH` — web root, e.g. `/var/www/portfolio/`

Manual fallback:

```bash
npm run build
scp -r dist/* casey@server:/var/www/portfolio/
```