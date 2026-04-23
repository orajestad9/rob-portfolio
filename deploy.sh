#!/bin/bash
set -euo pipefail

# Resolve repo directory (same pattern you used)
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Deploying portfolio site..."

# 1) Update repository in place (same as ROI project)
cd "$REPO_DIR"
git fetch origin
git reset --hard origin/main

# 2) Install dependencies (needed for Astro build)
echo "Installing dependencies..."
npm install

# 3) Build static site
echo "Building site..."
npm run build

# 4) Restart Nginx container (serving static files)
echo "Restarting containers..."
docker compose down
docker compose up -d

# 5) Optional: show status
docker compose ps
echo "Deployment complete."