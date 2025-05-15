import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitAPI } from './auth/operations';

//axios.defaults.baseURL = 'https://681dfa03c1c291fa66327612.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
try {
    const response = await goitAPI.get('/contacts');    
    return response.data;
} catch (error) {    
    return thunkAPI.rejectWithValue(error.message);
}
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => { 
    try {
        const response = await goitAPI.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => { 
    try {
        const response = await goitAPI.post(`/contacts/`, body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const editContact = createAsyncThunk('contacts/editContact', async (body, { rejectWithValue }) => { 
    try {
        const response = await goitAPI.patch(`/contacts/${body.id}`, body);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
