#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Ionic React'

create_branch

step
cmd npx ionic start $dir tabs --type=react
cmd cd $dir
commit_all "Run: ${commands[-2]}"

step
cmd npm install -D cypress @cypress/react @cypress/webpack-dev-server eslint-plugin-cypress
apply_patch global/create-react-app-typescript.patch
apply_patch
commit_all "Add Cypress with example component test"

finalize
