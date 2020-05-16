import React from 'react';
import { Link } from 'react-router-dom';

import './MainPage.css';
import '../GlobalFiles/GlobalFiles.css';

import register from './register.png';
import login from './login.png';
import logo from '../GlobalFiles/logo.png';


class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><img id="logo" src={logo} alt="Logo" /></Link>
        <ul>
          <Link to="/register"><img id="registerBtn" src={register} alt="Register Page" /></Link>
          <Link to="/login"><img id="loginBtn" src={login} alt="Login Page" /></Link>
        </ul>
      </div>
    )
  }
}

export default MainPage;
