// auth reducer
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/actionTypes";

const initalAuthState = {
  isLoggedIn: false,
  inProgress: false,
  user: {},
  error: null,
};

export default function authReducer(state = initalAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        inProgress: false,
        user: action.user,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    default:
      return state;
  }
}
