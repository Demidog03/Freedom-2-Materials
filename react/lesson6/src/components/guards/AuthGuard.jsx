import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector(state => state.auth)

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
