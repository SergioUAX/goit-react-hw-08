import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

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
            <ContactForm/>
            <SearchBox/>        
            <ContactList />
        </>
)};

export default Contacts;
