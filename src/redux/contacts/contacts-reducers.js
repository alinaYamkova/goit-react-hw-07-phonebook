import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { 
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    filterContacts,
} from './contacts-actions';

const items = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
});

// тiлькu на Request ставим true
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true, 
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {});

export const contactsReducer = combineReducers({ items, filter, loading, error });