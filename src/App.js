import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
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

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterPage />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}
