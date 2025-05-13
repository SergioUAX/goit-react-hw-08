import LoginForm from '../../components/LoginForm/LoginForm';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import styles from './login.module.css';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return <Navigate to='/' />;
    }
    return (
        <div>
            <h2>Login page</h2>
            <LoginForm />
        </div>
)};

export default Login;