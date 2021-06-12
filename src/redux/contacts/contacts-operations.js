/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import contactsActions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(contactsActions.fetchContactSucess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error.message));
  }
};

const addContact = newContact => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', newContact);
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};

const patchContact = ({ id, name, number }) => async dispatch => {
  const editedContact = { name, number };

  dispatch(contactsActions.patchContactRequest());

  try {
    const { data } = await axios.patch(`/contacts/${id}`, editedContact);

    dispatch(contactsActions.patchContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.patchContactError(error.message));
  }
};

export default { fetchContacts, addContact, deleteContact, patchContact };
