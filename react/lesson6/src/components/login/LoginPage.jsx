import React, { useContext, useEffect, useState } from 'react';
import classes from './LoginPage.module.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';

const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({
        username: '',
        password: ''
    })
    const dispatch = useDispatch() // диспетчер

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
                dispatch({ type: 'auth/login', payload: token })
                navigate('/shop')
            }
        }
        catch (err) {

        }
    }

    async function loginUser() {
        try {
            if (username === '') {
                setFormErrors({ ...formErrors, username: 'Требуется username' })
                //{...formErrors} => {username: '', password: ''}
                //{...formErrors, username: 'Требуется username'} => {username: '', password: '', username: 'Требуется username'}
                return
            }
            if (password === '') {
                setFormErrors({ ...formErrors, password: 'Требуется пароль' })
                return
            }
            const res = await axios.post('https://dummyjson.com/auth/login', {
                username, //username: username
                password, //password: password
            })
            if (res.data) {
                dispatch({ type: 'auth/login', payload: res.data.token })
                navigate('/shop')
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token)
                }
            }
        }
        catch (err) {
            if (err.response.data.message === 'Invalid credentials') {
                toast.error('Неверные данные пользователя!')
            }
            else {
                toast.error(err.response.data.message)
            }
        }

    }


    function changeUsername(event) {
        setUsername(event.target.value)
        setFormErrors({ ...formErrors, username: '' })
    }

    function changePassword(event) {
        setPassword(event.target.value)
        setFormErrors({ ...formErrors, password: '' })
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
                    isInvalid={Boolean(formErrors.username)}
                // isInvalid = Boolean('Требуется username') // true
                // isInvalid = Boolean('') // false (пустая строка это falsy value)
                />
                <Form.Control.Feedback type="invalid">
                    {formErrors.username}
                </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Password
                </InputGroup.Text>
                <Form.Control
                    onChange={changePassword}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    isInvalid={Boolean(formErrors.password)}
                />
                <Form.Control.Feedback type="invalid">
                    {formErrors.password}
                </Form.Control.Feedback>
            </InputGroup>
            <Button onClick={loginUser}>Войти на сайт</Button>
        </div>
    );
}

export default LoginPage;
