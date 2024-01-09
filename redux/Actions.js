export const setLoginUsername = (username) => ({
  type: "LOGIN_SET_USERNAME",
  payload: username,
});

export const setLoginPassword = (password) => ({
  type: "LOGIN_SET_PASSWORD",
  payload: password,
});

export const setLoginError = (errorMessage) => ({
  type: "LOGIN_SET_ERROR",
  payload: errorMessage,
});

export const setSignupUsername = (username) => ({
  type: "SIGNUP_SET_USERNAME",
  payload: username,
});

export const setSignupEmail = (email) => ({
  type: "SIGNUP_SET_EMAIL",
  payload: email,
});

export const setSignupPassword = (password) => ({
  type: "SIGNUP_SET_PASSWORD",
  payload: password,
});

export const setSignupError = (errorMessage) => ({
  type: "SIGNUP_SET_ERROR",
  payload: errorMessage,
});

export const updateUserInformation = (userData) => ({
  type: "UPDATE_USER_INFORMATION",
  payload: userData,
});
