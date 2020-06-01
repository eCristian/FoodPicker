import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { AuthProvider } from './components/Auth/Auth';
import UserRoute from './components/PrivateRoutes/UserRoute/UserRoute';
import AdminRoute from './components/PrivateRoutes/AdminRoute/AdminRoute';

//Pages
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import AdminPage from './components/AdminPage/AdminPage';
import UserPage from './components/UserPage/UserPage';
import WrongPage from './components/WrongPage/WrongPage';

class App extends React.Component {
    render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/login" component={LoginPage} />
              <AdminRoute exact path="/admin" component={AdminPage} />
              <UserRoute exact path="/user" component={UserPage} />
              <Route exact path="/pageNotFound" component={WrongPage} />
              <Redirect to="/pageNotFound" />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
