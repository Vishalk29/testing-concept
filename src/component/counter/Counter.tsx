import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const incrementfunction = () => {
    setCounter(counter + 1)
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => incrementfunction()}>Increment</button>
    </>
  )
}

export default Counter
