import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';
import { Box, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes from 'prop-types';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

import { SiteNavigationStyles } from './styles';

const SiteNavigation = ({ isUserLogin }) => {
  const classes = SiteNavigationStyles();

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
};

const mapStateToProps = state => ({
  isUserLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(SiteNavigation);

SiteNavigation.propTypes = {
  isUserLogin: PropTypes.bool.isRequired,
};
