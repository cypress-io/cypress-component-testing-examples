#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Guide Getting Started React'

create_branch

step
cmd npx create-react-app guide-getting-started-react
cmd cd $dir
cmd rm package-lock.json
commit_all "Run: ${commands[-2]}"

step
cmd yarn add -D https://cdn.cypress.io/beta/npm/10.0.0/circle-10.0-release-0366d4fa8971e5e5189c6fd6450cc3c8d72dcfe1/cypress.tgz @cypress/react @cypress/webpack-dev-server eslint-plugin-cypress
apply_patch global/create-react-app.patch
commit_all "Add Cypress with example component test"

step
apply_patch
commit_all "Add LoginForm files"

finalize
