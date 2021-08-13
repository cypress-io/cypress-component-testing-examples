import './CountDown.css'

export function CountDown() {
  const parent = document.createElement('div')
  const counterElem = document.createElement('span')
  parent.append(counterElem)

  let counter = 0
  const render = () => {
    counterElem.innerText = counter--
    requestAnimationFrame(render)
  }
  render()

  return parent
}
