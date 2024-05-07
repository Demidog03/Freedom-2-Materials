import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../main';

interface AuthGuardProps {
    children: ReactNode
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
    const navigate = useNavigate()
    const { isLoggedIn } = useAppSelector(state => state.auth)

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
