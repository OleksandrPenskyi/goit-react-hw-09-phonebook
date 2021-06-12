import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../Loader';
import Error from '../Error';
import { contactsSelectors } from '../../redux/contacts';
import { Box } from '@material-ui/core';

import { PhonebookStyles } from './styles';

const Phonebook = ({ title, children, isLoading, error }) => {
  const classes = PhonebookStyles();

  return (
    <Box component="section" className={classes.wrapper}>
      <h1>{title}</h1>
      {isLoading && <Loading />}

      {children}
      {error && <Error />}
    </Box>
  );
};

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getIsLoading(state),
  error: contactsSelectors.getError(state),
});

export default connect(mapStateToProps)(Phonebook);

Phonebook.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
