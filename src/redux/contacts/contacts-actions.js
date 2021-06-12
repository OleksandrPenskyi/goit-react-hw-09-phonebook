/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSucess = createAction('contacts/fetchContactSucess');
const fetchContactError = createAction('contacts/fetchContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const patchContactRequest = createAction('contacts/patchContactRequest');
const patchContactSuccess = createAction('contacts/patchContactSuccess');
const patchContactError = createAction('contacts/patchContactError');

const filterValue = createAction('contacts/filterValue');

export default {
  fetchContactRequest,
  fetchContactSucess,
  fetchContactError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  patchContactRequest,
  patchContactSuccess,
  patchContactError,

  filterValue,
};
