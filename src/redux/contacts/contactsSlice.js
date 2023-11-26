import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations'
import { LogOut } from "redux/auth/operations";

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initialContacts = {
    items: [],
    isLoading: false,
    error: null
}

export const contactsSlice = createSlice({

    name: "contacts",
    initialState: initialContacts,
    extraReducers: (builder) => {
        builder.addCase(addContact.pending, handlePending)
        builder.addCase(fetchContacts.pending, handlePending)
        builder.addCase(deleteContact.pending, handlePending)

        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        builder.addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        builder.addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(item => item.id === action.payload.id);
            state.items.splice(index, 1);
        })
        builder.addCase(fetchContacts.rejected, handleRejected)
        builder.addCase(addContact.rejected, handleRejected)
        builder.addCase(deleteContact.rejected, handleRejected)
        builder.addCase(LogOut.fulfilled, (state)=>{
            state.items=[];
            state.isLoading=false;
            state.error=null;
        })
    },
});

