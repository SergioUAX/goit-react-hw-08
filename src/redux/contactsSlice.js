import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.isLoading;

const initialState = {  
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: (builder) => { 
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })      
      .addCase(deleteContact.fulfilled, (state, action) => { 
        state.items = state.items.filter(item => item.id !== action.payload);
      })      
      .addCase(addContact.fulfilled, (state, action) => { 
        state.items.push(action.payload);
      })      
      .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected),
        (state, action) => {
          state.error = action.payload;
        })
      .addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending),
        (state, action) => {
          state.error = null;
          state.isLoading = true;
        })
      .addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled),
        (state, action) => {          
          state.isLoading = false;
        })
  }
});

export const contactsReducer = contactsSlice.reducer;
