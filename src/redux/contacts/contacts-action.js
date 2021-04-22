import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from "uuid";

export const fetchContactRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactsRequest');
export const addContactSuccess = createAction('contacts/addContactsSuccess');
export const addContactError = createAction('contacts/addContactsError');

export const deleteContactRequest = createAction('contacts/deleContactsRequest');
export const deleteContactSuccess = createAction('contacts/deleContactsSuccess');
export const deleteContactError = createAction('contacts/deleContactsError');

export const filterContacts = createAction('contacts/filterContacts');
