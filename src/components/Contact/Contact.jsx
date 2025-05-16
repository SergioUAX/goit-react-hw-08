import { FaUser, FaPhone } from 'react-icons/fa';
import { ListItem, ListItemText, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Contact = ({ data: {id, name,number }, onDelete }) => {    
    return (        
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
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
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
