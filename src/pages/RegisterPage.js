import React, { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onChangeInput = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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

  const onSubmitRegForm = event => {
    event.preventDefault();
    if (email !== '' && password !== '' && password !== '') {
      dispatch(authOperations.registration({ name, email, password }));
      clearForm();
    }
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setPassword('');
  };

  return (
    <Box component="section">
      <Box component="h2" textAlign="center">
        Please, fill the form to registration:
      </Box>

      <Box className="editContactWrapper">
        <form
          onSubmit={onSubmitRegForm}
          className="loginRegisterForm"
          autoComplete="off"
        >
          <TextField
            onChange={onChangeInput}
            label="Name"
            margin="normal"
            name="name"
            value={name}
            type="text"
          />
          <TextField
            onChange={onChangeInput}
            label="E-mail"
            margin="normal"
            name="email"
            value={email}
            type="email"
          />
          <TextField
            onChange={onChangeInput}
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
