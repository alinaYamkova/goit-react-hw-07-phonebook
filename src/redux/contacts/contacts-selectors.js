import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;

const showFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) =>
    items.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        number.includes(filter),
    ),
);

// const showFilteredContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//      contact.name.includes(normalizedFilter)
//   );
// };

export default { getAllContacts, getLoading, getFilter, showFilteredContacts };
