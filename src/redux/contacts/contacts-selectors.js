/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from 'reselect';

const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getIsLoading = state => state.contacts.isLoading;
const getError = state => state.contacts.error;

const filterContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default { getItems, getFilter, filterContacts, getIsLoading, getError };
