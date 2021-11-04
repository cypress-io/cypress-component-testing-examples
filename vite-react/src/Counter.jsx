import { useState } from 'react'
import './Counter.css'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
  )
}
