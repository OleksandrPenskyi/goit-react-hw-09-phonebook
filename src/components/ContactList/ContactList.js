import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { List } from '@material-ui/core';

import ContactListItem from './ContactListItem';

export default function ContactList() {
  const filteredContacts = useSelector(contactsSelectors.filterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactListItem name={name} number={number} id={id} key={id} />
      ))}
    </List>
  );
}
