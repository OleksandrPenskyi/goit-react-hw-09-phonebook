import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button } from '@material-ui/core';

import { authOperations } from '../redux/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const onSubmitLoginForm = event => {
    event.preventDefault();
    // Оператор для логина
    if (email !== '' && password !== '') {
      dispatch(authOperations.login({ email, password }));
      clearForm();
    }
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Box component="section">
      <Box component="h2" textAlign="center">
        Please, fill the form to login:
      </Box>
      <form
        onSubmit={onSubmitLoginForm}
        className="loginRegisterForm"
        // ! autoComplete="off"
      >
        <TextField
          onChange={onChangeInput}
          label="E-mail"
          margin="normal"
          name="email"
          type="email"
          value={email}
        />

        <TextField
          onChange={onChangeInput}
          label="Password"
          margin="normal"
          name="password"
          // ! type="password"
          type="text"
          value={password}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </Box>
  );
}
