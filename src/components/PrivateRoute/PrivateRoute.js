import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../../redux/auth';

const PrivateRoute = ({
  component: Component,
  isUserLogin,
  redirectTo,
  ...otherProps
}) => (
  <Route
    {...otherProps}
    render={props =>
      isUserLogin ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  isUserLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
  isUserLogin: PropTypes.bool.isRequired,
};
