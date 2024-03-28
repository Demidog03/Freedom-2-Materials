import { useLayoutEffect, useReducer } from 'react'
import { useCallback, useContext, useEffect, useId, useMemo, useState } from 'react'
import CounterValue from './CounterValue'

function Counter() {
    // state (состояние)
    // let num = 0
    let [num, setNum] = useState(0) // 0 -> initialValue, [value, setValue]
    console.log(num);

    function increaseCounter() {
        // num = num + 1 -> нельзя
        setNum(num + 1) // 0 + 1 -> 1 ====== setNum(1) - асинхронная
        setNum(prevNum => prevNum + 1) // 1 + 1 -> prevState => ждет новое значение (пока отработает первый set)
        setNum(num + 1)
    }

    return (
        <>
            <CounterValue value={num} />
            <button id="btn" onClick={() => increaseCounter()}>Добавить 1</button>
        </>
    )
}

export default Counter