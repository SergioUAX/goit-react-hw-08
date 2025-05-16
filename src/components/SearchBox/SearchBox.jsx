// import styles from './SearchBox.module.css';
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
        // <div className={styles.searchBox}>
        //     <label htmlFor={searchId}>Find contacs by name</label>
        //     <input
        //         type='text'                
        //         id={searchId}
        //         value={filterValue}
        //         onChange={handleSearch} />
        // </div>
        <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        id={searchId}
        label="Find contacts by name"
        variant="outlined"
        value={filterValue}
        onChange={handleSearch}
      />
    </Box>
    );
};

export default SearchBox;
