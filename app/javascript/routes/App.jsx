import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../components/home/LandingPage';

import PropTypes from "prop-types";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route path="/region" render={() => ('Region!')} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
