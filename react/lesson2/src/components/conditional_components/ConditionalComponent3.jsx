import { useState } from 'react';
import classes from './ConditionalComponent3.module.css'

const ConditionalComponent3 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function login() {
        setIsLoggedIn(true)
    }

    function logout() {
        setIsLoggedIn(false)
    }

    return (
        <div className={classes.container}>
            <div className={classes['login-wrapper']}>
                <h1 style={{ color: isLoggedIn ? 'blue' : 'red' }}>
                    {isLoggedIn ? 'Добро пожаловать в систему!' : 'Вы не авторизованы!'}
                </h1>
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

export default ConditionalComponent3;
