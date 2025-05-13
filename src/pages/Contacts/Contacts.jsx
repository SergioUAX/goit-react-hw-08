import styles from './contacts.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

   
const Contacts = () => {

  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(fetchContacts());
  }, [dispatch]);
  
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm/>
            <SearchBox/>        
            <ContactList />
        </>
)};

export default Contacts;