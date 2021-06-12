import React from 'react';
import Phonebook from '../components/Phonebook';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { Typography } from '@material-ui/core';

const ContactsPage = () => (
  <Phonebook title={'Phonebook'}>
    <ContactForm />

    <Typography variant="h6" component="h2">
      Contacts
    </Typography>
    <Filter />
    <ContactList />
  </Phonebook>
);

const mapStateToProps = state => ({
  isUserLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(ContactsPage);

ContactsPage.propTypes = {
  isUserLogin: PropTypes.bool.isRequired,
};
