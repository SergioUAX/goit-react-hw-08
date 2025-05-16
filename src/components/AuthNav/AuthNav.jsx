import { NavLink } from "react-router-dom";
import { Button, Stack } from '@mui/material';

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

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={NavLink}
        to="/login"
        sx={linkStyles}
      >
        Login
      </Button>
      <Button
        component={NavLink}
        to="/register"
        sx={linkStyles}
      >
        Register
      </Button>
    </Stack>
    );
};

export default AuthNav;
