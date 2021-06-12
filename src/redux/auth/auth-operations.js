/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  on(key) {
    axios.defaults.headers.common.Authorization = `Bearer ${key}`;
  },
  off() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registration = newUser => async dispatch => {
  dispatch(authActions.authRegistrationRequest());

  try {
    const response = await axios.post('/users/signup', newUser);
    token.on(response.data.token);
    dispatch(authActions.authRegistrationSuccess(response.data));
  } catch (error) {
    dispatch(authActions.authRegistrationError(error.message));
  }
};

const login = createdUser => async dispatch => {
  dispatch(authActions.authLoginRequest());

  try {
    const response = await axios.post('/users/login', createdUser);
    token.on(response.data.token);
    dispatch(authActions.authLoginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.authLoginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.authLogoutRequest());

  try {
    await axios.post('/users/logout');
    token.off();
    dispatch(authActions.authLogoutSuccess());
  } catch (error) {
    dispatch(authActions.authLogoutError(error.message));
  }
};

const refreshUser = () => async (dispatch, getState) => {
  const {
    auth: { token: userToken },
  } = getState();

  if (!userToken) {
    return;
  }

  token.on(userToken);
  dispatch(authActions.authRefreshRequest());
  try {
    const response = await axios.get('/users/current');
    dispatch(authActions.authRefreshSuccess(response.data));
  } catch (error) {
    dispatch(authActions.authRefreshError(error.message));
  }
};

export default { registration, login, logout, refreshUser };
