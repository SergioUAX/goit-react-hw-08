import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from 'react-redux';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) { 
        return <Navigate to={ redirectTo } />
    }
    return component;
};

export default RestrictedRoute;
