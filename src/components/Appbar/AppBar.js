import React from 'react';
import SiteNavigation from './SiteNavigation';
import AuthNavigation from './AuthNavigation';
import UserMenu from './UserMenu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../../redux/auth';
import { Box } from '@material-ui/core';

const AppBar = ({ isUserLogin }) => (
  <Box
    component="header"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
  >
    <SiteNavigation />
    {isUserLogin ? <UserMenu /> : <AuthNavigation />}
  </Box>
);

const mapStateToProps = state => ({
  isUserLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(AppBar);

AppBar.propTypes = {
  isUserLogin: PropTypes.bool.isRequired,
};
