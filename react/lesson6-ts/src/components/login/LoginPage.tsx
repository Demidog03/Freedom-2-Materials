import { ChangeEvent, useEffect, useState } from 'react';
import classes from './LoginPage.module.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { AUTH_ACTIONS } from '../../store/reducers/authReducer';
import { authLoginThunk, authLoginByTokenThunk } from '../../store/thunks/authThunk'
import { useAppDispatch, useAppSelector } from '../../main';

const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('') // generic
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch() // диспетчер
    const { isLoggedIn, formErrors } = useAppSelector(state => state.auth)

    useEffect(() => {
        loginByToken() // автологин
    }, [])

    async function loginByToken() {
        dispatch(authLoginByTokenThunk())
    }

    async function loginUser() {
        dispatch(authLoginThunk(username, password))
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/shop')
        }
    }, [isLoggedIn])


    function changeUsername(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value) //setUsername('fsfsdffgfdgfd')
        dispatch({
            type: AUTH_ACTIONS.SET_ERRORS, payload: { ...formErrors, username: '' }
        })
    }

    function changePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
        dispatch({
            type: AUTH_ACTIONS.SET_ERRORS, payload: { ...formErrors, password: '' }
        })
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
