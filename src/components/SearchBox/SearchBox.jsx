import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import { TextField, Box } from '@mui/material';

const SearchBox = () => {    
    const searchId = nanoid();
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);

    const handleSearch = (e) => { 
        dispatch(changeFilter(e.target.value));
    };
    
    return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        id={searchId}
        label="Find contacts by name"
        variant="outlined"
        value={filterValue}
        onChange={handleSearch}
        sx={{ width: '400px', maxWidth: '100%' }}
      />
    </Box>
    );
};

export default SearchBox;
