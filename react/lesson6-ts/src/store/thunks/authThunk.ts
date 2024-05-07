import { AUTH_ACTIONS } from "../reducers/authReducer"
import toast from 'react-hot-toast'
import axios from 'axios'

export function authLoginThunk(username, password) {
    return async (dispatch) => {
        try {
            if (username === '') {
                dispatch({ type: AUTH_ACTIONS.SET_ERRORS, payload: {
                    password: '', username: 'Требуется username'
                }})
                return
            }
            if (password === '') {
                dispatch({ type: AUTH_ACTIONS.SET_ERRORS, payload: {
                    username: '', password: 'Требуется пароль'
                }})
                return
            }
            const res = await axios.post('https://dummyjson.com/auth/login', {
                username, //username: username
                password, //password: password
            })
            if (res.data) {
                dispatch({ type: AUTH_ACTIONS.AUTH_LOGIN, payload: res.data.token })
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
}

export function authLoginByTokenThunk() {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token') // jwt token
            const res = await axios.get('https://dummyjson.com/auth/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (res.data) {
                dispatch({ type: AUTH_ACTIONS.AUTH_LOGIN, payload: token })
            }
        }
        catch (err) {

        }
    }
}