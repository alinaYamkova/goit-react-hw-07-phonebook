import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from "uuid";

export const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
export const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction('contacts/addContactsRequest');
export const addContactSuccess = createAction('contacts/addContactsSuccess');
export const addContactError = createAction('contacts/addContactsError');

export const deleteContactRequest = createAction('contacts/deleteContactsRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactsSuccess');
export const deleteContactError = createAction('contacts/deleteContactsError');

export const filterContacts = createAction('contacts/filterContacts');