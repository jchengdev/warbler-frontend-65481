import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { configureStore } from './../store';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import AboutPage from './../components/AboutPage';
import AppWrapped from './AppWrapped';

const store = configureStore();

// USER LOGIN INFO RELOAD (e.g. server error)
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/about" render={_props => <AboutPage {..._props} />} />
        <Route render={_props => <AppWrapped {..._props} /> } />
      </Switch>
    </Router>
  </Provider>
);

export default App;
