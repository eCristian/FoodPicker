import React from 'react';
import { Link } from 'react-router-dom'

import '../GlobalFiles/GlobalFiles.css';
import './AdminPage.css';

import logo from '../GlobalFiles/logo.png';
import addfood from './addfood.png';

import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDuEadA7JVjjNgIaOcQZACQB7nq-WBNPiw",
  authDomain: "foodpicker-50f7b.firebaseapp.com",
  databaseURL: "https://foodpicker-50f7b.firebaseio.com",
  projectId: "foodpicker-50f7b",
  storageBucket: "foodpicker-50f7b.appspot.com",
  messagingSenderId: "59468916442",
  appId: "1:59468916442:web:bfc6a1a85621981b2a27e3"
};

firebase.initializeApp(firebaseConfig);

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
    firebase.database().ref("Food Or Dessert Name").push({
      name: `${this.state.foodOrDessertName}`
    })
    alert(`${this.state.foodOrDessertName} Added Successfully to database!`)
    event.preventDefault();
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
              <input type="text" value={this.state.foodOrDessertName} onChange={this.foodOrDessertNameHandler} class="form-control" id="inputFoodOrDessertName" />
            </div>
            <div class="form-group">
              <label for="whenServed"><strong>When is the Food/Dessert served?</strong></label><br />
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="breakfast" />
                <label class="form-check-label" for="inlineRadio1">Breakfast</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="lunch" />
                <label class="form-check-label" for="inlineRadio2">Lunch</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="dinner" />
                <label class="form-check-label" for="inlineRadio3">Dinner</label>
              </div>
            </div>
          </form>
        </div>
        <div className="formAdmin">
          <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="whenServed"><strong>Where to add?</strong></label><br />
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="food" />
              <label class="form-check-label" for="inlineRadio1">Food</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="dessert" />
              <label class="form-check-label" for="inlineRadio2">Dessert</label>
            </div>
          </div>
            <button id="submitBtn" type="submit" value="Submit" class="btn btn-primary">Add</button>
          </form>
        </div>
        <div id="footerTextAdmin">
          <p>You are logged in as Admin. <Link to="/"><em><u>Logout</u></em></Link></p>
        </div>
      </div>
    )
  }
}

export default AdminPage;
