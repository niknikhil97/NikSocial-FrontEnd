import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/actionTypes";

export function login(email, password) {
  return function (dispatch) {
    dispatch(startLogin());

    fetch("http://localhost:8000/user/create-token")
      .then((response) => {
        console.log("response body", response.status);

        if (response.status === 200) {
          dispatch(loginSuccess({ name: "Nikhil", age: 24 }));
        } else {
          dispatch(loginFailed("Wrong Credentials"));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFailed("Server Error While Logging IN"));
      });
  };
}

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAIL,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

// Why not to import store directly as module
// This looks simpler but we don’t recommend this approach. The main reason we dislike it is because it forces store to be a singleton. This makes it very hard to implement server rendering. On the server, you will want each request to have its own store, so that different users get different preloaded data.
// A singleton store also makes testing harder. You can no longer mock a store when testing action creators because they reference a specific real store exported from a specific module. You can’t even reset its state from outside.
