import React from 'react';
import { Link } from 'react-router-dom'
import fire from '../../Firebase';
import ChooseFood from '../ChooseFood/ChooseFood';

// CSS
import '../GlobalFiles/GlobalFiles.css';
import './ResultPage.css';

// Images
import logo from '../GlobalFiles/logo.png';


class ResultPage extends React.Component {
  constructor(props) {
    super(props);
  }
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
