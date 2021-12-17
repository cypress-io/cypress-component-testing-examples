#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Vite + Vue'

create_branch

step
cmd yarn create vite vite-vue --template vue
commit_all "Run: ${commands[-1]}"

step
cmd cd $dir
cmd yarn
commit_all "Run: ${commands[-1]}"

step
apply_patch
commit_all "Update app to move global styles into main.css file"

step
cmd yarn add -D cypress @cypress/vue@3 @cypress/vite-dev-server
apply_patch 
commit_all "Add Cypress component testing support with sample tests"

step
cmd yarn add -D @cypress/code-coverage vite-plugin-istanbul
apply_patch
commit_all "Configure Cypress Code Coverage plugin"

finalize
