import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Contacts from '../../pages/Contacts/Contacts';
import NotFound from '../../pages/NotFound/NotFound';
import SharedLayout from '../SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => { 
    dispatch(refreshThunk());
  },[dispatch]);

  return isRefreshing ?
    null    
    : (
    <>      
        <Routes>
          <Route path= '/' element= {<SharedLayout />}>
            <Route index element={<Home />} />          
            <Route path='/contacts' element={<Contacts />} />            
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>             
    </>
  )
}

export default App;
