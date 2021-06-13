import React from 'react';
import Phonebook from '../components/Phonebook';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { Typography } from '@material-ui/core';

export default function ContactsPage() {
  return (
    <Phonebook title={'Phonebook'}>
      <ContactForm />

      <Typography variant="h6" component="h2">
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </Phonebook>
  );
}
