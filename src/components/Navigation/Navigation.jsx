import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
  return (
    <div>       
        <nav className={styles.navigation}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>        
      </nav>
      </div>
    );
};

export default Navigation;
