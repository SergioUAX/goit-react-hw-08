import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <h2>Contacts book</h2>
      {isLoggedIn && <h2>{user.name}</h2>}
        <nav className={styles.navigation}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
        { !isLoggedIn &&
          <>
          <NavLink to="/login" className={buildLinkClass}>
            Login
          </NavLink>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
          </>
        }
        {isLoggedIn &&
          <>
          <button onClick={()=>dispatch(logoutThunk())}>Logout</button>
          {/* <NavLink to="/login" className={buildLinkClass}>
            Logout
          </NavLink> */}
          </>}
      </nav>
      </header>
    );
};

export default Navigation;
