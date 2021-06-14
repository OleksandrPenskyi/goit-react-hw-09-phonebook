import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import { TextField } from '@material-ui/core';

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = useCallback(
    ({ target: { value } }) => {
      dispatch(contactsActions.filterValue(value));
    },
    [dispatch],
  );

  return (
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
}
