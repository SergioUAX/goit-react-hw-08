import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { logoutThunk } from '../auth/operations';

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
      .addCase(logoutThunk.fulfilled, () => initialState)
      
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
