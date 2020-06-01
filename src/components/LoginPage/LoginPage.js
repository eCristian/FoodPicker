import React, { useCallback, useContext }  from 'react';
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';

import '../GlobalFiles/GlobalFiles.css';
import './LoginPage.css';

import logo from '../GlobalFiles/logo.png';
import loginTitle from './loginTitle.png';

import fire from '../../Firebase';
import { AuthContext } from '../Auth/Auth';

let adminNumber = 0;
let userNumber = 0;

const Login = ({ history }) => {
  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await fire
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      if ( email.value === "admin@foodpicker.com" ) {
        history.push("/admin");
        adminNumber = 1;
      } else {
        history.push("/user");
        userNumber = 1;
      }
    } catch (error) {
      alert(error);
    }
  },[history]);

  const { currentUser } = useContext(AuthContext);

  if ( currentUser ) {
    if ( adminNumber === 1 ) {
      return <Redirect to="/admin" />;
    } else if ( userNumber === 1 ) {
      return <Redirect to="/user" />;
    }
  }

  return(
    <div>
      <div>
        <Link to="/"><img id="logo" src={logo} alt="Logo" /></Link>
      </div>
      <div>
        <img id="loginTitle" src={loginTitle} alt="Login Title" />
      </div>
      <div className="form">
          <form onSubmit={handleLogin}>
            <div class="form-group">
              <label for="exampleInputEmail">Email address</label>
              <input name="email" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" required />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword">Password</label>
              <input name="password" type="password" class="form-control" id="inputPassword" required />
            </div>
            <button id="submitBtn" type="submit" value="Submit" class="btn btn-primary">Submit</button>
          </form>
          <p id="lastTextLogin">Not a member? <Link to="/register"><em><u>Register now</u></em></Link></p>
        </div>
    </div>
  )
}


export default withRouter(Login);
