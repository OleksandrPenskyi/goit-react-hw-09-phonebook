import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../../redux/contacts';
import EditContactModal from '../../EditContactModal';
import { ListItem, Box, ButtonGroup, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function ContactListItem({ name, number, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = useCallback(() => {
    dispatch(contactsOperations.deleteContact(id));
  }, [dispatch, id]);

  return (
    <>
      <ListItem>
        <Box className="contactsListItem">
          <Box component="span">
            Name: <b>{name}</b> | Number: <b>{number}</b>
          </Box>

          <ButtonGroup>
            <Button
              onClick={handleToggleModal}
              type="button"
              variant="contained"
              startIcon={<EditIcon />}
              size="small"
            >
              Edit
            </Button>

            <Button
              onClick={handleDelete}
              type="button"
              variant="contained"
              startIcon={<DeleteIcon />}
              size="small"
            >
              Delete
            </Button>
          </ButtonGroup>
        </Box>
      </ListItem>

      {isModalOpen && (
        <EditContactModal
          name={name}
          number={number}
          id={id}
          onToggleModal={handleToggleModal}
        />
      )}
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
