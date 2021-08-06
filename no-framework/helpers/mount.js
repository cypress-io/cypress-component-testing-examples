import { ROOT_ID, setupHooks } from '@cypress/mount-utils'

export const mount = (node) => {
  const el = document.getElementById(ROOT_ID)

  // clean up each time we mount a new component
  el.innerHTML = ''

  // mount component
  el.append(node)

  // initialize internal pre/post test hooks
  setupHooks()
}
