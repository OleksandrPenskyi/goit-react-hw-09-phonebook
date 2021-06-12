import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsOperations } from '../../../redux/contacts';
import EditContactModal from '../../EditContactModal';
import { ListItem, Box, ButtonGroup, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class ContactListItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { name, number, id, deleteContact } = this.props;
    const { isModalOpen } = this.state;

    const handleDelete = () => {
      deleteContact(id);
    };

    return (
      <>
        <ListItem>
          <Box className="contactsListItem">
            <Box component="span">
              Name: <b>{name}</b> | Number: <b>{number}</b>
            </Box>

            <ButtonGroup>
              <Button
                onClick={this.handleToggleModal}
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
            onToggleModal={this.handleToggleModal}
          />
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispath => ({
  deleteContact: id => dispath(contactsOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
