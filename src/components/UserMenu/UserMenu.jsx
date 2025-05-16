// import styles from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import { Button, Typography, Stack } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  return (
    // <>
    //   <h2>{user.name}</h2>        
    //   <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    // </>
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={() => dispatch(logoutThunk())}
        startIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </Stack>
    );
};

export default UserMenu;
