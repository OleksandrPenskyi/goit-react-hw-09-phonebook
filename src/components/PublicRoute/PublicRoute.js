import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({
  component: Component,
  isUserLogin,
  redirectTo,
  ...otherProps
}) => (
  <Route
    {...otherProps}
    render={props =>
      isUserLogin && otherProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isUserLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(PublicRoute);

PublicRoute.propTypes = {
  isUserLogin: PropTypes.bool.isRequired,
};
