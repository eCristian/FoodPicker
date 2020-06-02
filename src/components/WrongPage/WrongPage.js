import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './WrongPage.css';

// Images
import gobacktext from './gobacktext.png';

class WrongPage extends React.Component {
  render() {
    return (
      <div id="notfound">
        <Link to="/"><img id="goBackText" src={gobacktext} alt="Go back to main page" /></Link>
      </div>
    )
  }
}

export default WrongPage;
