import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperations } from '../../redux/contacts';
import { Box, TextField, Button } from '@material-ui/core';

const modalRoot = document.querySelector('#modal-root');

class EditContactModal extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    editContact: PropTypes.func.isRequired,
  };

  state = {
    name: this.props.name,
    number: this.props.number,
    id: this.props.id,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangesSubmit = event => {
    event.preventDefault();

    this.props.editContact(this.state);
    this.props.onToggleModal();
  };

  handleCancelChange = () => {
    this.props.onToggleModal();

    this.setState({
      name: this.props.name,
      number: this.props.number,
      id: this.props.id,
    });
  };

  handleCloseModal = event => {
    if (event.target === event.currentTarget || event.code === 'Escape') {
      this.props.onToggleModal();
    }
  };

  render() {
    return createPortal(
      <Box onClick={this.handleCloseModal} className="overlay">
        <Box className="modal">
          <Box component="h3" textAlign="center">
            Edit contact form
          </Box>

          <Box className="editContactWrapper">
            <form
              onSubmit={this.handleChangesSubmit}
              className="editContactForm"
            >
              <Box className="editContactInput">
                <TextField
                  onChange={this.handleChangeInput}
                  label="Name"
                  margin="normal"
                  name="name"
                  type="text"
                  value={this.state.name}
                  className="editContactBtn"
                />
              </Box>
              <Box className="editContactInput">
                <TextField
                  onChange={this.handleChangeInput}
                  label="Number"
                  margin="normal"
                  name="number"
                  type="text"
                  value={this.state.number}
                  className="editContactBtn"
                />
              </Box>
              <Box className="editContactbtnWrapper">
                <Button type="submit" variant="outlined" size="large">
                  Save changes
                </Button>
              </Box>
              <Button
                onClick={this.handleCancelChange}
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
}

const mapDispatchToProps = {
  editContact: contactsOperations.patchContact,
};

export default connect(null, mapDispatchToProps)(EditContactModal);
