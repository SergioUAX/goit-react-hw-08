import { NavLink } from "react-router-dom";
// import clsx from 'clsx';
import { Button, Stack } from '@mui/material';

// const buildLinkClass = ({ isActive }) => {
//   return clsx(styles.link, isActive && styles.active);
// };

const linkStyles = {
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '1rem',
  color: '#333',
  '&.active': {
    color: '#1976d2',
    fontWeight: 'bold',
  },
};

const Navigation = () => {
  return (
    // <div>       
    //     <nav className={styles.navigation}>
    //     <NavLink to="/" className={buildLinkClass}>
    //       Home
    //     </NavLink>
    //     <NavLink to="/contacts" className={buildLinkClass}>
    //       Contacts
    //     </NavLink>        
    //   </nav>
    //   </div>
    <Stack direction="row" spacing={2}>
      <Button
        component={NavLink}
        to="/"
        sx={linkStyles}
      >
        Home
      </Button>
      <Button
        component={NavLink}
        to="/contacts"
        sx={linkStyles}
      >
        Contacts
      </Button>
    </Stack>
    );
};

export default Navigation;
