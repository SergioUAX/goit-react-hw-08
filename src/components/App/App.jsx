import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/HomePage/HomePage';
import Login from '../../pages/LoginPage/LoginPage';
import Register from '../../pages/RegistationPage/RegistrationPage';
import Contacts from '../../pages/ContactsPage/ContactsPage';
import NotFound from '../../pages/NotFoundPage/NotFoundPage';
import Layout from '../Layout/Layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/PrivateRoute';

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
          <Route path= '/' element= {<Layout />}>
            <Route index element={<Home />} />          
            <Route path='/contacts' element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            } />            
          </Route>
          <Route path='/login' element={<RestrictedRoute component={<Login />} redirectTo='/' />} />
          <Route path='/register' element={<RestrictedRoute component={<Register />} redirectTo='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>             
    </>
  )
}

export default App;
