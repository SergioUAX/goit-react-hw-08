import styles from './register.module.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Register = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return <Navigate to='/' />;
    }
    return (
        <div>
            <h2>Register page</h2>
            <RegisterForm />
        </div>
)};

export default Register;