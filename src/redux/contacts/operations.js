import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('/contacts');  
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

});

export const addContact = createAsyncThunk('contacts/addContact', async (user, thunkAPI) => {
    try {
        const {data} = await axios.post('/contacts', user);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactsId, thunkAPI) => {
    try { 
        const {data} = await axios.delete(`/contacts/${contactsId}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});
