import React from 'react';
import { Link } from 'react-router-dom';

import '../GlobalFiles/GlobalFiles.css';
import './LoginPage.css';

import logo from '../GlobalFiles/logo.png';

class LoginPage extends React.Component {
  render() {
    return(
      <div>
        <Link to="/"><img id="logo" src={logo} alt="Logo" /></Link>
      </div>
    )
  }
}

export default LoginPage;
