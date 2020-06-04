import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from './components/Auth/Auth';
import './App.css';

// Private Routes
import ChooseFoodRoute from './components/PrivateRoutes/ChooseFoodRoute/ChooseFoodRoute';
import AddFoodRoute from './components/PrivateRoutes/AddFoodRoute/AddFoodRoute';

//Pages
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import AddFood from './components/AddFood/AddFood';
import ChooseFood from './components/ChooseFood/ChooseFood';
import ResultPage from './components/ResultPage/ResultPage';
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
              <AddFoodRoute exact path="/addFood" component={AddFood} />
              <ChooseFoodRoute exact path="/chooseFood" component={ChooseFood} />
              <Route exact path="/result" component={ResultPage} />
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
