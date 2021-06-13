import React from 'react';
import SiteNavigation from './SiteNavigation';
import AuthNavigation from './AuthNavigation';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Box } from '@material-ui/core';

export default function AppBar() {
  const isUserLogin = useSelector(authSelectors.isLogin);

  return (
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
}
