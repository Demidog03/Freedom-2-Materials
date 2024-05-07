import { ActionWithPayload } from "../../types";

interface AuthState {
    isLoggedIn: boolean,
    token: string,
    formErrors: {
        username: string,
        password: string
    }
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: '',
    formErrors: {
        username: '',
        password: ''
    }
}

// enum
export const AUTH_ACTIONS = {
    AUTH_LOGIN: 'auth/login',
    AUTH_LOGOUT: 'auth/logout',
    SET_ERRORS: 'auth/setErrors'
}

export function authReducer(state: AuthState = initialState, action: ActionWithPayload) { // state - состояние, action - методы
    switch (action.type) {
        case AUTH_ACTIONS.AUTH_LOGIN: {
            console.log('Авторизация успешна');
            return { ...state, isLoggedIn: true, token: action.payload || '' }
        }
        case AUTH_ACTIONS.AUTH_LOGOUT: {
            console.log('Выход из системы');
            localStorage.removeItem('token');
            return { ...state, isLoggedIn: false }
        }
        case AUTH_ACTIONS.SET_ERRORS: {
            return { ...state, formErrors: action.payload }
        }
        default: { // else
            return state
        }
    }
}

// action => { type: string, payload: данные } 
// type: 'auth/login', 'auth/register', 'auth/setIsLoggedIn', 'auth/logout' 