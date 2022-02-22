#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Create React App'

create_branch

step
cmd npx create-react-app $dir
cmd cd $dir
commit_all "Run: ${commands[-2]}"

step
cmd yarn add -D https://cdn.cypress.io/beta/npm/10.0.0/linux-x64/circle-10.0-release-e7718f7489276cac2e8ad71bc57a627eb0135fbd/cypress.tgz @cypress/react @cypress/webpack-dev-server eslint-plugin-cypress
apply_patch global/create-react-app.patch
apply_patch
commit_all "Add Cypress with example component test"

step
cmd yarn add -D @cypress/code-coverage@3.10.0-dev.1 @cypress/instrument-cra
apply_patch global/create-react-app-code-coverage.patch
commit_all "Configure Cypress Code Coverage plugin"

finalize
