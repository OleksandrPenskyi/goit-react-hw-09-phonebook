import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { Button, TextField } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function ContactForm() {
  const contacts = useSelector(contactsSelectors.getItems);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmitAddContact = event => {
    event.preventDefault();

    const newContact = {
      name,
      number,
    };

    // проверка на повтор имени в контактах
    if (isRepeatedName(name)) {
      alert(`${name} is already in contacts.`);
      clearForm();
      return;
    }

    dispatch(contactsOperations.addContact(newContact));
    clearForm();
  };

  const isRepeatedName = name => {
    return contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitAddContact} className="addContactForm">
      <TextField
        onChange={onInputChange}
        variant="outlined"
        label="Name"
        size="small"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        margin="normal"
      />

      <TextField
        onChange={onInputChange}
        variant="outlined"
        label="Number"
        size="small"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        className="addContactBtn"
        startIcon={<PersonAddIcon />}
      >
        Add contact
      </Button>
    </form>
  );
}
