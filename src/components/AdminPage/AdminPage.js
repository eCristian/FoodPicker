import React from 'react';
import { Link } from 'react-router-dom'

import '../GlobalFiles/GlobalFiles.css';
import './AdminPage.css';

import logo from '../GlobalFiles/logo.png';
import addfood from './addfood.png';

import fire from '../../Firebase';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foodOrDessertName: "",
      whenServed: "",
      whereToAdd: ""
    }
  }

  foodOrDessertNameHandler = (event) => {
    this.setState({foodOrDessertName: event.target.value})
  }

  whenSevedHandler = (event) => {
    this.setState({whenServed: event.target.value})
  }

  whereToAddHandler = (event) => {
    this.setState({whereToAdd: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fire.database().ref("Food Or Dessert Name").push({
      name: `${this.state.foodOrDessertName}`
    })
    alert(`${this.state.foodOrDessertName} Added Successfully to database!`)
  }

  handleLogout = () => {
    fire.auth().signOut();
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
        <Link to="/"><img id="logo" src={logo} alt="Logo" /></Link>
        <div>
          <img id="addfood" src={addfood} alt="Add Food" />
        </div>
        <div className="formAdmin">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="inputFoodOrDessert">Food or Dessert name</label>
              <input type="text" value={this.state.foodOrDessertName} onChange={this.foodOrDessertNameHandler} class="form-control" id="inputFoodOrDessertName" required />
            </div>
            <div class="form-group">
              <label for="inputWhenServed"><strong>When is the Food/Dessert served?</strong></label><br />
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" required />
                <label class="form-check-label" for="inlineRadio1">BREAKFAST</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" required />
                <label class="form-check-label" for="inlineRadio1">LUNCH</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" required />
                <label class="form-check-label" for="inlineRadio1">DINNER </label>
              </div>
              <br />
              <br />
              <label for="inputWhereToAdd"><strong>Where to add?</strong></label><br />
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option1" required />
                <label class="form-check-label" for="inlineRadio2">FOOD</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option1" required />
                <label class="form-check-label" for="inlineRadio2">DESSERT</label>
              </div>
              <br />
            </div>
            <button id="submitBtn" type="submit" value="Submit" class="btn btn-primary">Add</button>
          </form>
          <p id="footerTextAdmin">You are logged in as Admin.</p>
          <button type="button" class="btn btn-danger" onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    )
  }
}

export default AdminPage;
