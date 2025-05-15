import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (!isLoggedIn) { 
        return <Navigate to='/login' />
    }
    return children;
};

export default PrivateRoute;
