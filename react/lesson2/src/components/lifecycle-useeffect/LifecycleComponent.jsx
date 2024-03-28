import { useEffect, useState } from "react";

const LifecycleComponent = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [counter, setCounter] = useState(0)
    // 1. mount
    // 2. update
    // 3. dismount

    //useEffect(callback, dependencies (зависимости))
    // 1. mount
    useEffect(() => {
        console.log('Компонент отрендерился (mounted)')
    }, [])

    // 2. update
    useEffect(() => {
        console.log('Компонент обновился при каждом рендере (update)');
    })
    useEffect(() => {
        console.log('Компонент обновился при изменении isClicked (update)');
    }, [isClicked])

    // 3. dismount
    useEffect(() => {
        return () => {
            getUsers()
            console.log('Компонент исчезает (dismount)');
        }
    }, [])


    function clickButton() {
        setIsClicked(true)
    }
    function increaseCounter() {
        setCounter(counter + 1)
    }

    async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }

    return (
        <>
            <h1>{isClicked ? 'Кнопка нажалась' : 'Кнопка не нажималось'}</h1>
            <button onClick={clickButton}>Нажми</button>
            <h1>{counter}</h1>
            <button onClick={increaseCounter}>Увеличить счетчик</button>
        </>
    );
}

export default LifecycleComponent;
