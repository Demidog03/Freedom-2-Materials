import { useState } from "react"

function CounterValue({ value }) { // value -> num
    const [counterValue, setCounterValue] = useState(value) // useState("fdfs") -> initialValue - "fdfs"

    return (
        <h2 id="counterElement">{value}</h2>
    )
}

export default CounterValue