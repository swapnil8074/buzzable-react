import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./containers/login/Login";
import Signup from "./containers/signup/Signup";
import Home from "./containers/homePage/Homepage";
import { loadUser } from "./actions/authActions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    // load user after component get mounted to Dom
    // this.props.loadUser();
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
          <Route path="*">
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      dispatch(loadUser());
    }
  };
};

const mapStateToProps = store => {
  return {};
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
