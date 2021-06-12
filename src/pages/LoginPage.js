import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, TextField, Button } from '@material-ui/core';

import { authOperations } from '../redux/auth';

const initialState = { email: '', password: '' };

class LoginPage extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = initialState;

  onChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitLoginForm = event => {
    event.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ ...initialState });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Box component="section">
        <Box component="h2" textAlign="center">
          Please, fill the form to login:
        </Box>
        <form
          onSubmit={this.onSubmitLoginForm}
          className="loginRegisterForm"
          autoComplete="off"
        >
          <TextField
            onChange={this.onChangeInput}
            label="E-mail"
            margin="normal"
            name="email"
            type="email"
            value={email}
          />

          <TextField
            onChange={this.onChangeInput}
            label="Password"
            margin="normal"
            name="password"
            type="password"
            value={password}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
      </Box>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
