import { createSelector } from "reselect";

const getAllContacts = (state) => state.contacts.items;
const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;

// мемоизация
const showFilteredContacts  = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// const showFilteredContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//      contact.name.includes(normalizedFilter)
//   );
// };

export default { getAllContacts, getLoading, getFilter, showFilteredContacts };