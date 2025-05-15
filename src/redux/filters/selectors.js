import { selectContacts } from '../contacts/selectors';
import { createSelector } from '@reduxjs/toolkit';


export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
    (contactsList, filterValue) => {         
        return contactsList.filter(contact =>
            contact.name.toLowerCase().includes(filterValue.toLowerCase())
        );
    });
  