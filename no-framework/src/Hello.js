import './Hello.css'

export function Hello({ greetingVisible = false } = {}) {
  const button = document.createElement('button')
  button.textContent = 'Show Greeting'
  button.onclick = () => {
    const h1 = document.querySelector('h1')
    h1.style.display = 'block'
  }

  const greeting = document.createElement('h1')
  greeting.style.display = greetingVisible ? 'block' : 'none'
  greeting.textContent = 'Hello world!'

  const parent = document.createElement('div')
  parent.append(button)
  parent.append(greeting)

  return parent
}
