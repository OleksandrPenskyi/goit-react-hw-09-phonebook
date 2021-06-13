import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../../redux/auth';
import { authSelectors } from '../../../redux/auth';
import { Box, Typography, Button } from '@material-ui/core';
import { UserMenuStyles } from './styles';

// const mapDispatchToProps = {
//   onLogout: authOperations.logout,
// };

export default function UserMenu() {
  const classes = UserMenuStyles();

  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  return (
    <Box component="section" className={classes.section}>
      <Typography className={classes.text}>
        Welcome, <b>{email}</b>
      </Typography>
      <Button
        onClick={onLogout}
        type="button"
        variant="contained"
        color="secondary"
        className={classes.btn}
      >
        LEAVE
      </Button>
    </Box>
  );
}
