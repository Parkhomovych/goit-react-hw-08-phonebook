import { createSlice } from "@reduxjs/toolkit";

const filterState = '';

export const filterSlice = createSlice(
    {
        name: 'filter',
        initialState: filterState,
        reducers: {
            statusFilter(state, action) {
                return action.payload
            },
        },
    }
);

export const { statusFilter } = filterSlice.actions;

