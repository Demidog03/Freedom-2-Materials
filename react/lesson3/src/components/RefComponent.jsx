import { useEffect, useRef, useState } from "react";

const RefComponent = () => {
    const titleRef = useRef(null)
    const [number, setNumber] = useState(5)

    // useEffect(() => {
    //     const titleElement = document.getElementById('title') // DOM manipulation - sideEffect
    //     titleElement.style.color = 'red'
    //     console.log(titleElement);
    // }, []) // mount

    useEffect(() => {
        const titleElement = titleRef.current
        titleElement.style.color = 'red'
    }, [])

    const changeNumber = () => {
        setNumber(20)
        console.log(number);
    }

    return (
        <div>
            <h1 ref={titleRef}>Текст</h1>
            <p>{number}</p>
            <button onClick={changeNumber}>Поменять цифру</button>
        </div>
    );
}

export default RefComponent;
