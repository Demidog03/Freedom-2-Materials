import './App.css'
import { useState, useMemo, useCallback } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const hugeCalculation = useCallback(() => { // можно вообще не использовать
    console.log('ЗАПУСКАЕМ HUGECALCULATION');
    for (let i = 0; i < 1000000000; i++) {
      // какие то вычесления
    }
    return 50
  }, [])

  const hugeNumber = useMemo(() => hugeCalculation(), []) // можно использовать

  function increaseCounter() {
    setCounter(counter + 1)
  }
  function increaseCounter2() {
    setCounter2(counter2 + 1)
  }

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={increaseCounter}>+counter</button>
        <h1>{counter2}</h1>
        <button onClick={increaseCounter2}>+counter2</button>
      </div>
    </>
  )
}

export default App
