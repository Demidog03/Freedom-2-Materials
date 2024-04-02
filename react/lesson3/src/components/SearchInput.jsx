import { useEffect, useState, useRef } from "react";

const SearchInput = ({ placeholder }) => {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)

    function changeInputValue(event) {
        setInputValue(event.target.value)
    }

    function saveInputValue() {
        setInputValue(inputRef.current.value)
    }

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]) // когда меняется inputValue

    return (
        <>
            <input ref={inputRef} placeholder={placeholder} />
            <button onClick={saveInputValue}>Сохранить</button>
        </>
    );
}

export default SearchInput;
