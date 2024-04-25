import React from 'react';
import classes from './LoginPage.module.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    function navigateToShop() {
        navigate('/shop')
    }
    return (
        <div className={classes.container}>
            <h1>Добро пожаловать!</h1>
            <Button onClick={navigateToShop}>Войти на сайт</Button>
        </div>
    );
}

export default LoginPage;
