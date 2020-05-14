import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from './components/MainPage/MainPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import WrongPage from './components/WrongPage/WrongPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/pageNotFound" component={WrongPage} />
          <Redirect to="/pageNotFound" />
        </Switch>
      </Router>
    );
  }
}

export default App;
