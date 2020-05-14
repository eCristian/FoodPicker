import React from 'react';
import { Link } from 'react-router-dom';

import '../GlobalFiles/GlobalFiles.css';
import './RegisterPage.css';

import logo from '../GlobalFiles/logo.png';

class RegisterPage extends React.Component {
  render() {
    return(
      <Link to="/"><img id="logo" src={logo} alt="Logo" /></Link>
    )
  }
}

export default RegisterPage;
