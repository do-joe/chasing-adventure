#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="root@foundry.jjk3.com"
REMOTE_PATH="/home/foundry/foundrydata/Data/modules/chasing-adventure"
NO_RESTART=false

for arg in "$@"; do
  case "$arg" in
    --no-restart) NO_RESTART=true ;;
    *) echo "Unknown option: $arg"; exit 1 ;;
  esac
done

# 1. Build packs locally
echo "Building packs..."
npm run build

# 2. Rsync to server
echo "Deploying to ${REMOTE_HOST}:${REMOTE_PATH}..."
rsync -avz --delete \
  --exclude '_source/' \
  --exclude 'ref/' \
  --exclude 'node_modules/' \
  --exclude 'data/' \
  --exclude 'build.mjs' \
  --exclude 'generate-packs.mjs' \
  --exclude 'package.json' \
  --exclude 'package-lock.json' \
  --exclude '.git*' \
  --exclude 'CLAUDE.md' \
  --exclude 'deploy.sh' \
  ./ "${REMOTE_HOST}:${REMOTE_PATH}/"

# 3. Fix ownership
echo "Fixing ownership..."
ssh "${REMOTE_HOST}" "chown -R foundry:foundry ${REMOTE_PATH}"

# 4. Restart Foundry
if [ "$NO_RESTART" = false ]; then
  echo "Restarting Foundry VTT..."
  ssh "${REMOTE_HOST}" "systemctl restart foundryvtt"
  echo "Foundry VTT restarted."
else
  echo "Skipping restart (--no-restart)."
fi

echo "Deploy complete."
