/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const authRegistrationRequest = createAction('auth/RegistrationRequest');
const authRegistrationSuccess = createAction('auth/RegistrationSuccess');
const authRegistrationError = createAction('auth/RegistrationError');

const authLoginRequest = createAction('auth/LoginRequest');
const authLoginSuccess = createAction('auth/LoginSuccess');
const authLoginError = createAction('auth/LoginError');

const authLogoutRequest = createAction('auth/LogoutRequest');
const authLogoutSuccess = createAction('auth/LogoutSuccess');
const authLogoutError = createAction('auth/LogoutError');

const authRefreshRequest = createAction('auth/RefreshRequest');
const authRefreshSuccess = createAction('auth/RefreshSuccess');
const authRefreshError = createAction('auth/RefreshError');

export default {
  authRegistrationRequest,
  authRegistrationSuccess,
  authRegistrationError,

  authLoginRequest,
  authLoginSuccess,
  authLoginError,

  authLogoutRequest,
  authLogoutSuccess,
  authLogoutError,

  authRefreshRequest,
  authRefreshSuccess,
  authRefreshError,
};
