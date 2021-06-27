import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { LOGIN_FAIL, LOGIN_START } from "./actions/actionTypes";

class App extends React.Component {
  constructor(props) {
    console.log("PROPS:: ", props);
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>App Component</h1>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    store,
    ownProps,
  };
};

const mdp = (dispatch) => {
  return {
    loginStart: () => dispatch({ type: LOGIN_START }),
    loginFail: () =>
      dispatch({ type: LOGIN_FAIL, error: "ERROR:: NO ERROR CODE" }),
  };
};

export default connect(mapStateToProps, mdp)(App);
