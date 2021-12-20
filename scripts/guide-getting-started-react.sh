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
commit_all "Run: ${commands[-2]}"

step
cmd yarn add -D cypress @cypress/react @cypress/webpack-dev-server eslint-plugin-cypress
apply_patch global/create-react-app.patch
apply_patch
commit_all "Add Cypress with example component test"

step
apply_patch
commit_all "Add LoginForm files"

finalize
