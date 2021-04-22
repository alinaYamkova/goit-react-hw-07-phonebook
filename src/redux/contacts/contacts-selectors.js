import { createSelector } from "reselect";

const getLoading = (state) => state.contacts.loading;
const getAllContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;

// мемоизация
const showFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.includes(normalizedFilter)
    );
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default { getLoading, getAllContacts, getFilter, showFilteredContacts };