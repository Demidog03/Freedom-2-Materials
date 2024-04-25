import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const navigate = useNavigate()
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login')
        }
    }, [isLoggedIn])

    return (
        <>
            {children}
        </>
    );
}

export default AuthGuard;
