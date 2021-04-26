import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { 
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
    filterContacts,
} from './contacts-actions';

const items = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactsSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactsSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
});

// тiлькu на Request ставим true
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true, 
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const error = createReducer(null, {});

export const contactsReducer = combineReducers({ items, filter, loading, error });