import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector([selectContacts, selectFilter], (contactsName, contactsFilter) => {
    return contactsName.filter(contact => {
        if (contactsFilter.trim() === '') {
            return contact;
        }
        return contact.name.toLowerCase().includes(contactsFilter.toLowerCase());
    });
})