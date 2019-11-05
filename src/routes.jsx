import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './services/redux';

import Main from './pages/main';
import Login from './pages/login';

class Routes extends Component {

  render() {

    return(
      <Provider store={store}>
        <Router>
          <Switch>
             <Route path="/" exact>
               <Main />
             </Route>
             <Route path="/login">
               <Login />
             </Route>
           </Switch>
        </Router>
      </Provider>
    )
  }
}

export default Routes;
