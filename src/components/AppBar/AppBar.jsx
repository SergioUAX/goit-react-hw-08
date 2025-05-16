import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { AppBar as MuiAppBar, Toolbar, Box } from '@mui/material';


const AppBar = () => {  
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
     <MuiAppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Navigation />
        <Box>
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </Box>
      </Toolbar>
    </MuiAppBar>
    );
};

export default AppBar;
