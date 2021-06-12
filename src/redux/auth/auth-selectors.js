/* eslint-disable import/no-anonymous-default-export */
const getUserEmail = state => state.auth.user.email;
const isLogin = state => state.auth.isLogin;

export default { getUserEmail, isLogin };
