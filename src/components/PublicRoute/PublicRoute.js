import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({ children, redirectTo, ...otherProps }) {
  const isUserLogin = useSelector(authSelectors.isLogin);

  return (
    <Route {...otherProps}>
      {isUserLogin && otherProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}

PublicRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.node,
  otherProps: PropTypes.node,
};
