#!/usr/bin/env bash

outfile=generated_config.yml

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
  cat >> $outfile <<EOF
  $dir-ct:
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
          wait-on: "http://localhost:8080"
          yarn: true
          command: yarn cypress run-ct
          timeout: 3m
          requires:
            - "Setup $name"
EOF
}

add_workflow create-next-app-webpack-5 "Create Next App + Webpack 5"
add_workflow create-next-app "Create Next App"
add_workflow create-nuxt-app "Create Nuxt App"
add_workflow create-react-app-react-router "Create React App + React Router"
add_workflow create-react-app-redux "Create React App + Redux"
add_workflow create-react-app-tailwind "Create React App + Tailwind CSS"
add_workflow create-react-app "Create React App"
add_workflow vite-react "Vite + React"
add_workflow vite-vue "Vite + Vue"
add_workflow vue-cli-2 "Vue CLI (Vue 2)"
add_workflow vue-cli-3 "Vue CLI (Vue 3)"