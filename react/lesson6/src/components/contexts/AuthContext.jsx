import { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthContextComponent({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false) // глобальная переменная

    return (
        <AuthContext.Provider value={
            {
                isLoggedIn,
                setIsLoggedIn
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextComponent
