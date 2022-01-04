import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import "./login.css";
function Login() {
  return (
    <div className="login">
      <div className="login-div">
        <div className="button-div">
          <div className="signInBtn">
            <h6 className="btn-font">Sign in</h6>
          </div>
          <div className="signInBtn">
            <h6 className="btn-font">Sign up</h6>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <h3 className="formLabel">Email address</h3>
            <div className="input-container">
              <MdEmail className="input-icon" />
              <input
                type="text"
                placeholder="Email address"
                className="email login-input"
              />
            </div>
          </div>
          <div className="form-group">
            <h3 className="formLabel">Password</h3>
            <div className="input-container">
              <RiLockPasswordFill className="input-icon" />
              <input
                type="password"
                placeholder="Enter your password"
                className="email login-input"
              />
            </div>
          </div>
          <div className="submit-div">
            <div className="signInBtn signBtnSubmit">
              <h6 className="btn-font">Sign in</h6>
            </div>

            <div className="login-link">
              <h6>
                Don't have a account ? <a href="">Sign up</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
