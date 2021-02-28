import React from "react";
import { Link } from "react-router-dom"
import { onClickSignUp } from "../../containers/SignUpContainer/SignUpContainer";

const SignUp = () => {
    return (
        <div className="auth-page">
        <div className="container page">
          <div className="row">
      
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <Link to = "/login">Have an account?</Link>
              </p>
      
              <ul className="error-messages">
                <li>That email is already taken</li>
              </ul>
      
              <form>
                <fieldset className="form-group">
                  <input id = "sign-up-input-name" className="form-control form-control-lg" type="text" placeholder="Your Name" />
                </fieldset>
                <fieldset className="form-group">
                  <input id = "sign-up-input-email" className="form-control form-control-lg" type="text" placeholder="Email" />
                </fieldset>
                <fieldset className="form-group">
                  <input id = "sign-up-input-pwd" className="form-control form-control-lg" type="password" placeholder="Password" />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" onClick = {onClickSignUp} >
                  Sign up
                </button>
              </form>
            </div>
      
          </div>
        </div>
      </div>
    );
}

export default SignUp;