import LoginForm from '../../components/LoginForm/LoginForm';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import styles from './Login.module.css';


const Login = () => {
    // const isLoggedIn = useSelector(selectIsLoggedIn);
    // if (isLoggedIn) {
    //     return <Navigate to='/' />;
    // }
    return (
        <div>
            <h2>Login page</h2>
            <LoginForm />
        </div>
)};

export default Login;