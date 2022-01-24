#!/usr/bin/env bash




outfile="$1"

cat > $outfile <<EOF
name: Cypress Tests

on:
  push:
    branches-ignore:
      - "renovate/**"

jobs:
EOF

function add_workflow() {
  local dir="$1"
  local name="$2"
  echo "Adding workflow $dir ($name)"
  cat >> $outfile <<EOF
  ${dir}-install:
    runs-on: ubuntu-latest
    container: cypress/browsers:node16.13.0-chrome95-ff94
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: "Setup $name"
        uses: cypress-io/github-action@runs-node16
        with:
          working-directory: $dir
          cache-key: cache-{{ arch }}-{{ .Branch }}-{{ checksum "$dir/package.json" }}
          runTests: false

  ${dir}-run:
    timeout-minutes: 15
    runs-on: ubuntu-latest
    container: cypress/browsers:node16.13.0-chrome95-ff94
    needs: $dir-install
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: "Run $name Component Tests"
        uses: cypress-io/github-action@runs-node16
        with:
          cache-key: cache-{{ arch }}-{{ .Branch }}-{{ checksum "$dir/package.json" }}
          working-directory: $dir
          command: yarn cypress run-ct
          timeout: 3m

EOF
}

for dir in */; do
  dir=$(basename $dir)
  [[ ! -e "$dir/README.md" ]] && continue
  name="$(less $dir/README.md | sed -n 's/# Component Testing Example: //p')"
  [[ ! "$name" ]] && continue
  add_workflow $dir "$name"
done

echo
echo "Generated $outfile:"
echo
cat $outfile
