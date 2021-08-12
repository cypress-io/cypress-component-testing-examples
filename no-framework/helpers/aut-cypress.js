// Because the dev server only needs the path relative to the project root,
// and the location.pathname contains the absolute path prefixed with
// /__cypress/iframes/, set specPath to everything after the project root.
const [, specPath] = location.pathname.split(__PROJECT_ROOT__)

// Import the spec file
const importsToLoad = [() => import(specPath)]

// Initialize Cypress in the Frame
const CypressInstance = (window.Cypress = parent.Cypress)
CypressInstance.onSpecWindow(window, importsToLoad)
CypressInstance.action('app:window:before:load', window)
