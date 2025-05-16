// import styles from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';
import { ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Contact = ({ data: {id, name,number }, onDelete }) => {    
    return (
        // <div className={styles.contact}>
        //     <div>
        //         <p><FaUser />{name}</p>
        //         <p><FaPhone />{number}</p>
        //     </div>
        //     <button onClick={() => onDelete(id)}>Delete</button>
        // </div>        
        <ListItem
      sx={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        mb: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 2,
      }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <FaUser /> {name}
          </Box>
        }
        secondary={
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <FaPhone /> {number}
          </Box>
        }
      />
    </ListItem>
    );
};

export default Contact;
