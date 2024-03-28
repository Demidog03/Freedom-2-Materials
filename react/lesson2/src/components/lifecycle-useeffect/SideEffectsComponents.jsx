// fetch
// DOM manipulation (document.getElementsById())
// Promise
// localStorage

const SideEffectsComponents = () => {
    async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }

    return (
        <div>
            <button></button>
        </div>
    );
}

export default SideEffectsComponents;

