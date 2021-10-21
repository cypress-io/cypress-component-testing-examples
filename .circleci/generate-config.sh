#!/usr/bin/env bash

outfile="$1"

cat > $outfile <<EOF
version: 2.1
orbs:
  cypress: cypress-io/cypress@1.28.0

executors:
  with-chrome-and-firefox:
    docker:
      - image: "cypress/browsers:node14.17.0-chrome88-ff89"

workflows:
EOF

function add_workflow() {
  local dir="$1"
  local name="$2"
  echo "Adding workflow $dir ($name)"
  cat >> $outfile <<EOF
  $dir:
    jobs:
      - cypress/install:
          name: "Setup $name"
          cache-key: cache-{{ arch }}-{{ .Branch }}-{{ checksum "$dir/package.json" }}
          working_directory: $dir
          yarn: true
          executor: with-chrome-and-firefox

      - cypress/run:
          name: "Run $name Component Tests"
          cache-key: cache-{{ arch }}-{{ .Branch }}-{{ checksum "$dir/package.json" }}
          working_directory: $dir
          executor: with-chrome-and-firefox
          yarn: true
          command: yarn cypress run-ct
          timeout: 3m
          requires:
            - "Setup $name"
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
