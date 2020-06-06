import React from 'react';
import { Link } from 'react-router-dom'

// CSS
import '../../BaseFiles/base.css';
import './GeneratedFood.css';

// Images
import logo from '../../BaseFiles/logo.png';


class ResultPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><img id="logo" src={logo} alt="Logo" /></Link>
        <h1>HELLO</h1>
      </div>
    )
  }
}

export default ResultPage;
