import styles from './SearchBox.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {    
    const searchId = nanoid();
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);

    const handleSearch = (e) => { 
        dispatch(changeFilter(e.target.value));
    };
    
    return (
        <div className={styles.searchBox}>
            <label htmlFor={searchId}>Find contacs by name</label>
            <input
                type='text'                
                id={searchId}
                value={filterValue}
                onChange={handleSearch} />
        </div>
    );
};

export default SearchBox;
