import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Loading from '../Loader';
import Error from '../Error';
import { contactsSelectors } from '../../redux/contacts';
import { Box } from '@material-ui/core';

import { PhonebookStyles } from './styles';

export default function Phonebook({ title, children }) {
  const classes = PhonebookStyles();
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);

  return (
    <Box component="section" className={classes.wrapper}>
      <h1>{title}</h1>
      {isLoading && <Loading />}

      {children}
      {error && <Error />}
    </Box>
  );
}

Phonebook.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
