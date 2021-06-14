import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperations } from '../../redux/contacts';
import { Box, TextField, Button } from '@material-ui/core';

const modalRoot = document.querySelector('#modal-root');

// const mapDispatchToProps = {
//   editContact: contactsOperations.patchContact,
// };

export default function EditContactModal({
  name: contactName,
  number: contactNumber,
  id: contactId,
  onToggleModal,
}) {
  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);
  const [id, setId] = useState(contactId);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCloseModal = event => {
      if (event.code === 'Escape') {
        onToggleModal();
      }
    };

    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [onToggleModal]);

  const handleChangeInput = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      case 'id':
        setId(value);
        break;

      default:
        break;
    }
  };

  const handleCancelChange = () => {
    onToggleModal();
    setDefaultState();
  };

  const setDefaultState = () => {
    setName(contactName);
    setNumber(contactNumber);
    setId(contactId);
  };

  const handleChangesSubmit = event => {
    event.preventDefault();

    dispatch(contactsOperations.patchContact({ name, number, id }));
    onToggleModal();
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onToggleModal();
    }
  };

  return createPortal(
    <Box onClick={handleOverlayClick} className="overlay">
      <Box className="modal">
        <Box component="h3" textAlign="center">
          Edit contact form
        </Box>

        <Box className="editContactWrapper">
          <form onSubmit={handleChangesSubmit} className="editContactForm">
            <Box className="editContactInput">
              <TextField
                onChange={handleChangeInput}
                label="Name"
                margin="normal"
                name="name"
                type="text"
                value={name}
                className="editContactBtn"
              />
            </Box>
            <Box className="editContactInput">
              <TextField
                onChange={handleChangeInput}
                label="Number"
                margin="normal"
                name="number"
                type="text"
                value={number}
                className="editContactBtn"
              />
            </Box>
            <Box className="editContactbtnWrapper">
              <Button type="submit" variant="outlined" size="large">
                Save changes
              </Button>
            </Box>
            <Button
              onClick={handleCancelChange}
              type="button"
              variant="outlined"
              size="large"
            >
              Cancel
            </Button>
          </form>
        </Box>
      </Box>
    </Box>,
    modalRoot,
  );
}

EditContactModal.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};
