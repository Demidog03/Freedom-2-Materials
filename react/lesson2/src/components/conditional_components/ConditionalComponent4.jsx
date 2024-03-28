import { useState } from 'react';
import classes from './ConditionalComponent3.module.css'

const ConditionalComponent4 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('')

    function login() {
        setIsLoggedIn(true)
    }

    function logout() {
        setIsLoggedIn(false)
    }

    function handleChangeUsername(event) {
        setUsername(event.target.value)
    }

    return (
        <div className={classes.container}>
            <div className={classes['login-wrapper']}>
                <h1 style={{ color: isLoggedIn ? 'blue' : 'red' }}>
                    {isLoggedIn ? `Добро пожаловать, ${username}!` : 'Вы не авторизованы!'}
                </h1>
                {
                    !isLoggedIn
                    && <input value={username} type="text" placeholder='Введите имя' onChange={handleChangeUsername} />
                }
                <button
                    style={{ backgroundColor: isLoggedIn ? 'red' : 'blue' }}
                    className={classes['login-btn']}
                    onClick={() => isLoggedIn ? logout() : login()}
                >
                    {isLoggedIn ? 'Выйти' : 'Войти'}
                </button>
            </div>
        </div>
    )
}

export default ConditionalComponent4;
