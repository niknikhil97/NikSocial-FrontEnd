import authReducer from "./auth";

// root reducer
const initialRootState = {
  auth: {
    isLoggedIn: false,
    inProgress: false,
    user: {},
    error: null,
  },
  newsFeeds: [],
};

export default function rootReducer(state = initialRootState, action) {
  return {
    ...state,
    auth: authReducer(state.auth, action),
  };
}
