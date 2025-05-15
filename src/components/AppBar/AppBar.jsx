import styles from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {  
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </>  
    );
};

export default AppBar;
