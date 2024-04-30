const initialState = {
    isLoggedIn: false,
    token: ''
}

export function authReducer(state = initialState, action) { // state - состояние, action - методы
    switch (action.type) {
        case 'auth/login': {
            console.log('Авторизация успешна');
            return { ...state, isLoggedIn: true, token: action.payload || '' }
        }
        case 'auth/logout': {
            console.log('Выход из системы');
            localStorage.removeItem('token');
            return { ...state, isLoggedIn: false }
        }
        default: { // else
            return state
        }
    }
}

// action => { type: string, payload: данные } 
// type: 'auth/login', 'auth/register', 'auth/setIsLoggedIn', 'auth/logout' 