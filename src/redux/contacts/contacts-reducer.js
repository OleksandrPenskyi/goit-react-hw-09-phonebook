import { createReducer, combineReducers } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

const itemsReducer = createReducer([], {
  [contactsActions.fetchContactSucess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [contactsActions.patchContactSuccess]: (state, { payload }) =>
    state.map(item => (item.id === payload.id ? payload : item)),
});

const filterReducer = createReducer('', {
  [contactsActions.filterValue]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [contactsActions.fetchContactRequest]: () => true,
  [contactsActions.fetchContactSucess]: () => false,
  [contactsActions.fetchContactError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const errorReducer = createReducer(false, {
  [contactsActions.fetchContactRequest]: () => false,
  [contactsActions.fetchContactSucess]: () => false,
  [contactsActions.fetchContactError]: () => true,

  [contactsActions.addContactRequest]: () => false,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => true,

  [contactsActions.deleteContactRequest]: () => false,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => true,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default contactsReducer;
