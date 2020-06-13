import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../../../Firebase';

// CSS
import '../../BaseFiles/base.css';
import './GenerateFood.css';

// Images
import logo from '../../BaseFiles/logo.png';


export class GenerateFood extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ""
    }
  }

  handleChooseFoodAgain = () => {
    this.props.history.push('/chooseFood')
  }

  handleLogout = () => {
    fire.auth().signOut();
    this.props.history.push('/')
  }

  componentWillMount = () => {
    let dbRef = fire.database().ref(`${this.props.location.state.whatToEat}/${this.props.location.state.whenServed}`);

    let productsCounter = 0;

    dbRef.orderByChild("Name").on("child_added", function(data) {
      ++productsCounter;
    });

    const randomIndex = Math.floor(Math.random() * productsCounter);

    dbRef.orderByChild("Id").startAt(randomIndex).limitToFirst(1).once("child_added", snapshot => {
      let data = snapshot.val();
      this.setState({ result: data.Name });
    })
  }

  render() {
    return (
      <div>
        <Link to="/"><img id="logo" src={logo} alt="Logo" /></Link>
        <p id="parametersText">You chose {this.props.location.state.whatToEat} for {this.props.location.state.whenServed}!</p>
        <h1 id="resultText">{this.state.result}</h1>
        <button id="chooseFoodAginBtn" type="button" class="btn btn-success" onClick={this.handleChooseFoodAgain}>Choose Food Again</button>
        <p id="footerTextGenerateFood">You are logged in as User.</p>
        <button id="logoutBtn" type="button" class="btn btn-danger" onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

export default GenerateFood;
