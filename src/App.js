import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from './components/User/Auth/Auth';
import './App.css';

// Private Routes
import ChooseFoodRoute from './components/BaseFiles/PrivateRoutes/ChooseFoodRoute';
import AddFoodRoute from './components/BaseFiles/PrivateRoutes/AddFoodRoute';

//Pages
import HomePage from './components/BaseFiles/HomePage/HomePage';
import RegisterPage from './components/User/RegisterPage/RegisterPage';
import LoginPage from './components/User/LoginPage/LoginPage';
import AddFood from './components/Food/AddFood/AddFood';
import ChooseFood from './components/User/ChooseFood/ChooseFood';
import GeneratedFood from './components/Food/GeneratedFood/GeneratedFood';
import WrongPage from './components/BaseFiles/WrongPage/WrongPage';

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
              <AddFoodRoute exact path="/addFood" component={AddFood} />
              <ChooseFoodRoute exact path="/chooseFood" component={ChooseFood} />
              <Route exact path="/result" component={GeneratedFood} />
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
