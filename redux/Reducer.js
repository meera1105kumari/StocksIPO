const initialState = {
  loginUsername: "",
  loginPassword: "",
  loginError: "",
  signupUsername: "",
  signupEmail: "",
  signupPassword: "",
  signupError: "",
  userData: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SET_USERNAME":
      return { ...state, loginUsername: action.payload };
    case "LOGIN_SET_PASSWORD":
      return { ...state, loginPassword: action.payload };
    case "LOGIN_SET_ERROR":
      return { ...state, loginError: action.payload };
    case "SIGNUP_SET_USERNAME":
      return { ...state, signupUsername: action.payload };
    case "SIGNUP_SET_EMAIL":
      return { ...state, signupEmail: action.payload };
    case "SIGNUP_SET_PASSWORD":
      return { ...state, signupPassword: action.payload };
    case "SIGNUP_SET_ERROR":
      return { ...state, signupError: action.payload };
    case "UPDATE_USER_INFORMATION":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default authReducer;
