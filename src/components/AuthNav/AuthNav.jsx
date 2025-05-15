import styles from './AuthNav.module.css';
import { NavLink } from "react-router-dom";
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const AuthNav = () => {
  return (
          <>
          <NavLink to="/login" className={buildLinkClass}>
            Login
          </NavLink>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
          </>    
    );
};

export default AuthNav;
