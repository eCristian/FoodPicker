import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import '../GlobalFiles/GlobalFiles.css';
import './RegisterPage.css';

import logo from '../GlobalFiles/logo.png';
import registerTitle from './registerTitle.png';

import fire from '../../Firebase';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await fire
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      alert(`${email.value} Successfully Registered!`)
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return(
    <div>
      <div>
        <Link to="/"><img id="logo" src={logo} alt="Logo" /></Link>
      </div>
      <div>
        <img id="registerTitle" src={registerTitle} alt="Register Title" />
      </div>
      <div className="form">
        <form onSubmit={handleSignUp}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input name="email" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" required />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword">Password</label>
            <input name="password" type="password" class="form-control" id="inputPassword" required />
          </div>
          <button id="submitBtn" type="submit" value="Submit" class="btn btn-primary">Submit</button>
        </form>
        <p id="lastTextRegister">Already have an account? <Link to="/login"><em><u>Login here</u></em></Link></p>
      </div>
    </div>
  )
}

export default withRouter(SignUp);
