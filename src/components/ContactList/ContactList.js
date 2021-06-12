import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { List } from '@material-ui/core';

import ContactListItem from './ContactListItem';

class ContactList extends Component {
  static propTypes = {
    filteredContacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    getContacts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <List>
        {this.props.filteredContacts.map(({ name, number, id }) => (
          <ContactListItem name={name} number={number} id={id} key={id} />
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  filteredContacts: contactsSelectors.filterContacts(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
