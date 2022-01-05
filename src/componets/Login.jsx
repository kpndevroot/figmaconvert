import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import "./login.css";
import { Outlet, Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div className="login-div">
        <div className="button-div">
          <Link to="/">
            <div className="signInBtn btn-active">
              <h6 className="btn-font">Sign in</h6>
            </div>
          </Link>
          <Link to="/sign">
            <div className="signInBtn">
              <h6 className="btn-font">Sign up</h6>
            </div>
          </Link>
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
                Don't have a account ?{" "}
                <Link to="/sign">
                  <a href="">Sign up</a>
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
