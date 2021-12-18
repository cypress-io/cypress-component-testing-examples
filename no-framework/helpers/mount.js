import { ROOT_ID, setupHooks } from '@cypress/mount-utils'

export const mount = (node) => {
  // Get existing root element or create one if necessary
  let root = document.getElementById(ROOT_ID)
  if (!root) {
    root = document.createElement('div')
    root.id = ROOT_ID
    document.body.append(root)
  }

  // Clear out the root element before mounting the new component
  root.innerHTML = ''

  // Mount the component
  root.append(node)

  // Initialize internal pre/post test hooks
  setupHooks()
}
