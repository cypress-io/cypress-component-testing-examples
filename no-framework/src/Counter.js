import './Counter.css'

export function Counter({ initialValue = 0 } = {}) {
  let counter = initialValue

  const decrementButton = document.createElement('button')
  decrementButton.append('-')
  decrementButton.onclick = () => {
    counter--
    render()
  }

  const incrementButton = document.createElement('button')
  incrementButton.append('+')
  incrementButton.onclick = () => {
    counter++
    render()
  }

  const render = () => {
    counterElem.innerText = counter
  }

  const parent = document.createElement('div')
  const counterElem = document.createElement('span')
  parent.append(decrementButton)
  parent.append(counterElem)
  parent.append(incrementButton)
  render()

  return parent
}
