import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import AppBar from './components/Appbar';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Loader from './components/Loader';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "homePage" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              component={RegisterPage}
              restricted
              redirectTo="/contacts"
            />
            <PublicRoute
              path="/login"
              component={LoginPage}
              restricted
              redirectTo="/contacts"
            />
            <PrivateRoute
              path="/contacts"
              component={ContactsPage}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isUserLogin: authSelectors.isLogin(state),
});

const mapDispatchToProps = {
  getUser: authOperations.refreshUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
