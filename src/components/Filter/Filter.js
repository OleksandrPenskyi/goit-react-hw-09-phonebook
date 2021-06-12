import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import { TextField } from '@material-ui/core';

const Filter = ({ onChangeFilter, filter }) => (
  <TextField
    onChange={onChangeFilter}
    variant="filled"
    label="Find contacts by name:"
    size="small"
    type="text"
    name="filter"
    value={filter}
  />
);

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(contactsActions.filterValue(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
