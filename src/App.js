import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import AppBar from './components/Appbar';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Loader from './components/Loader';
import {
  homeLink,
  registerLink,
  loginLink,
  contactsLink,
  undefinedPageLink,
} from './routes';

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
          <PublicRoute exact path={homeLink}>
            <HomePage />
          </PublicRoute>

          <PublicRoute path={registerLink} restricted redirectTo={contactsLink}>
            <RegisterPage />
          </PublicRoute>

          <PublicRoute path={loginLink} restricted redirectTo={contactsLink}>
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path={contactsLink} redirectTo={loginLink}>
            <ContactsPage />
          </PrivateRoute>

          <PublicRoute path={undefinedPageLink}>
            <HomePage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}
