import styles from './App.module.css';
// import ContactList from '../ContactList/ContactList';
// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Contacts from '../../pages/Contacts/Contacts';
import NotFound from '../../pages/NotFound/NotFound';
import SharedLayout from '../SharedLayout/SharedLayout';

function App() { 
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(fetchContacts());
  },[dispatch]);

  return (
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
