import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const initialState = {
  name: '',
  email: '',
  password: '',
};

class RegisterPage extends Component {
  static propTypes = {
    onRegistration: PropTypes.func.isRequired,
  };

  state = initialState;

  onChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitRegForm = event => {
    event.preventDefault();

    this.props.onRegistration(this.state);

    this.setState({ ...initialState });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Box component="section" onSubmit={this.onSubmitRegForm}>
        <Box component="h2" textAlign="center">
          Please, fill the form to registration:
        </Box>

        <Box className="editContactWrapper">
          <form
            onSubmit={this.onSubmitRegForm}
            className="loginRegisterForm"
            autoComplete="off"
          >
            <TextField
              onChange={this.onChangeInput}
              label="Name"
              margin="normal"
              name="name"
              value={name}
              type="text"
            />
            <TextField
              onChange={this.onChangeInput}
              label="E-mail"
              margin="normal"
              name="email"
              value={email}
              type="email"
            />
            <TextField
              onChange={this.onChangeInput}
              label="Password"
              margin="normal"
              name="password"
              value={password}
              type="password"
            />
            <Button type="submit" variant="contained">
              Registration
            </Button>
          </form>
        </Box>
      </Box>
    );
  }
}

const mapDispatchToProps = {
  onRegistration: authOperations.registration,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
