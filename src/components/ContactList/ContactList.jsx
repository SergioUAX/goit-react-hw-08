import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { List, Typography, CircularProgress, Box } from '@mui/material';

const ContactList = () => {    
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);
    const visibleContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();
    
    const handleDelete = (id) => { 
        dispatch(deleteContact(id));
    };

    return (        
    <Box>
      <List>
        {visibleContacts.map((contact) => (
          <Contact key={contact.id} data={contact} onDelete={handleDelete} />
        ))}
      </List>

      {loading && (
        <Box sx={{ mt: 2 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          Server is dead...
        </Typography>
      )}
    </Box>
    );
};

export default ContactList;
