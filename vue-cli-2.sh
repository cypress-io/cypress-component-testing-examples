#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Vue CLI (Vue 2)'

# cat ~/.vuerc | jq '.presets["vue-cli-2"]' | pbcopy
export PRESET=$(cat <<'EOF'
{
  "useConfigFiles": true,
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-eslint": {
      "config": "base",
      "lintOn": []
    }
  },
  "vueVersion": "2"
}
EOF
)

preset_file="$PWD/$dir.json"
echo "$PRESET" > "$preset_file"
function cleanup() { rm "$preset_file"; }
trap cleanup EXIT

create_branch

step
cmd vue create --preset "./$dir.json" $dir
cmd cd $dir
commit_all "Run: ${commands[-2]}"

step
apply_patch
commit_all "Update app to move global styles into main.css file"

step
cmd yarn add -D cypress @cypress/vue @cypress/webpack-dev-server webpack-dev-server
apply_patch
commit_all "Add Cypress with example component and page tests"

finalize
