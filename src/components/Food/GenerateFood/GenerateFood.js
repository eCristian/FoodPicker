import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../../../Firebase';

// CSS
import '../../BaseFiles/base.css';
import './GenerateFood.css';

// Images
import logo from '../../BaseFiles/logo.png';


export class GenerateFood extends React.Component {

  handleChooseFoodAgain = () => {
    this.props.history.push('/chooseFood')
  }

  handleLogout = () => {
    fire.auth().signOut();
    this.props.history.push('/')
  }

  componentDidMount = () => {
    const numberOfProducts = 3;
    const randomIndex = Math.floor(Math.random() * numberOfProducts);
    const limit = 1;

    var reference = fire.database().ref(`${this.props.location.state.whatToEat}/${this.props.location.state.whenServed}`);

    reference.orderByChild("Id").startAt(2).limitToFirst(limit).once('value').then(snapshot => {
      //var data = snap.val();
      console.log(snapshot.val());
    })
  }

  render() {
    return (
      <div>
        <Link to="/"><img id="logo" src={logo} alt="Logo" /></Link>
        <p id="resultText">You chose {this.props.location.state.whatToEat} for {this.props.location.state.whenServed}!</p>
        <button id="chooseFoodAginBtn" type="button" class="btn btn-success" onClick={this.handleChooseFoodAgain}>Choose Food Again</button>
        <p id="footerTextGenerateFood">You are logged in as User.</p>
        <button id="logoutBtn" type="button" class="btn btn-danger" onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

export default GenerateFood;
