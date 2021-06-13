import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';

import { Box, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import { SiteNavigationStyles } from './styles';

export default function SiteNavigation() {
  const classes = SiteNavigationStyles();
  const isUserLogin = useSelector(authSelectors.isLogin);

  return (
    <Box>
      <Button
        type="button"
        variant="contained"
        color="primary"
        className={classes.btn}
        startIcon={<HomeIcon />}
      >
        <NavLink to="/" className={classes.link}>
          Home
        </NavLink>
      </Button>
      {isUserLogin && (
        <Button
          type="button"
          variant="contained"
          color="primary"
          className={classes.btn}
          startIcon={<RecentActorsIcon />}
        >
          <NavLink to="/contacts" className={classes.link}>
            Contacts
          </NavLink>
        </Button>
      )}
    </Box>
  );
}
