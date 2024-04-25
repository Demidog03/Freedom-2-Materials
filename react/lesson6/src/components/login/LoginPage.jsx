import React, { useContext, useEffect, useState } from 'react';
import classes from './LoginPage.module.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    function navigateToShop() {
        navigate('/shop')
    }

    useEffect(() => {
        loginByToken() // автологин
    }, [])

    async function loginByToken() {
        try {
            const token = localStorage.getItem('token') // jwt token
            const res = await axios.get('https://dummyjson.com/auth/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (res.data) {
                setIsLoggedIn(true)
                navigate('/shop')
            }
        }
        catch (err) {

        }
    }

    async function loginUser() {
        try {
            if (username === '') {
                alert('Пожалуйста заполните username!')
                return
            }
            if (password === '') {
                alert('Пожалуйста напишите пароль!')
                return
            }
            const res = await axios.post('https://dummyjson.com/auth/login', {
                username, //username: username
                password, //password: password
            })
            if (res.data) {
                setIsLoggedIn(true)
                navigate('/shop')
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token)
                }
            }
        }
        catch (err) {
            if (err.response.data.message === 'Invalid credentials') {
                alert('Неверные данные пользователя!')
            }
            else {
                alert(err.response.data.message)
            }
        }

    }


    function changeUsername(event) {
        setUsername(event.target.value)
    }

    function changePassword(event) {
        setPassword(event.target.value)
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.loginTitle}>Добро пожаловать!</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Username
                </InputGroup.Text>
                <Form.Control
                    onChange={changeUsername}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Password
                </InputGroup.Text>
                <Form.Control
                    onChange={changePassword}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Button onClick={loginUser}>Войти на сайт</Button>
        </div>
    );
}

export default LoginPage;
