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

function App() { 
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(fetchContacts());
  },[dispatch]);

  return (
    <>
      <div className={styles.appContainer}>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        
      </div>      
    </>
  )
}

export default App;
