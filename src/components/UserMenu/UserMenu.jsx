import styles from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  return (
    <>
      <h2>{user.name}</h2>        
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </>
    );
};

export default UserMenu;
