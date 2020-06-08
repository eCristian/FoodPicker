import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../../../Firebase';

// CSS
import '../../BaseFiles/base.css';
import './ChooseFood.css';

// Images
import logo from '../../BaseFiles/logo.png';


class ChooseFood extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      whenServed: "",
      whatToEat: ""
    }
  }

  whenServedHandler = (event) => {
    this.setState({whenServed: event.target.value})
  }

  whatToEatHandler = (event) => {
    this.setState({whatToEat: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/result",
      state : {
        whatToEat: this.state.whatToEat,
        whenServed: this.state.whenServed
      }
    })
  }

  handleLogout = () => {
    fire.auth().signOut();
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
        <Link to="/"><img id="logo" src={logo} alt="Logo" /></Link>
        <div className="formUser">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="whenServed"><strong>What to eat?</strong></label><br />
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio4" value="Food" onChange={this.whatToEatHandler} required  />
                <label class="form-check-label" for="inlineRadio2">FOOD</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio5" value="Dessert" onChange={this.whatToEatHandler} required  />
                <label class="form-check-label" for="inlineRadio2">DESSERT</label>
              </div>
              <br />
              <br />
                <label for="whenServed"><strong>When to eat?</strong></label><br />
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="Breakfast" onChange={this.whenServedHandler} required />
                  <label class="form-check-label" for="inlineRadio1">BREAKFAST</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="Lunch" onChange={this.whenServedHandler} required  />
                  <label class="form-check-label" for="inlineRadio1">LUNCH</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="Dinner" onChange={this.whenServedHandler} required  />
                  <label class="form-check-label" for="inlineRadio1">DINNER </label>
                </div>
              <br />
            </div>
            <button id="submitBtn" type="submit" value="Submit" class="btn btn-primary">GENERATE</button>
          </form>
          <p id="footerTextUser">You are logged in as User.</p>
          <button type="button" class="btn btn-danger" onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    )
  }
}

export default ChooseFood;
