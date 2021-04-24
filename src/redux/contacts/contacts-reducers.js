import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { 
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    filterContacts,
} from './contacts-actions';

const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [payload, ...state],
    [deleteContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
});

// тiлькu на Request ставим true
const loading = createReducer(false, {
  [fetchContactRequest]: () => true, 
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export const contactsReducer = combineReducers({ items, filter, loading });