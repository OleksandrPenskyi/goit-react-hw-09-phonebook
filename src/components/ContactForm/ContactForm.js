import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { Button, TextField } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    addNewContact: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  onInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitAddContact = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const newContact = {
      name,
      number,
    };

    // проверка на повтор имени в контактах
    if (this.isRepeatedName(name)) {
      alert(`${name} is already in contacts.`);
      this.clearForm();
      return;
    }

    this.props.addNewContact(newContact);
    this.clearForm();
  };

  isRepeatedName = name => {
    return this.props.contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());
  };

  clearForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onSubmitAddContact} className="addContactForm">
        <TextField
          onChange={this.onInputChange}
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
          onChange={this.onInputChange}
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
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getItems(state),
});

const mapDispatchToProps = dispatch => ({
  addNewContact: newContact =>
    dispatch(contactsOperations.addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
