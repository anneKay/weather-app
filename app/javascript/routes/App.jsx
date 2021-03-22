import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from "../components/home/Index";
import Login from "../components/login/Index";
import Signup from "../components/signup/Index";

import PropTypes from "prop-types";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/*" render={() => ("Page not found")} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
