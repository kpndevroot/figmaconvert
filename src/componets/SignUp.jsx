import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsTelephone, BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneHome } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="login signup">
      {/*  */}
      <div className="sign-div">
        <div className="button-div">
          <Link to="/" className="btnLink">
            <a className="signInBtn">
              <h6 className="btn-font">Sign in</h6>
            </a>
          </Link>
          <Link to="/sign" className="btnLink">
            <a className="signInBtn btn-active">
              <h6 className="btn-font">Sign up</h6>
            </a>
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
            <h3 className="formLabel">mobile</h3>
            <div className="input-container">
              <BsFillTelephoneFill className="input-icon" />
              <input
                type="tel"
                placeholder="mob"
                className="email login-input"
              />
            </div>
          </div>

          <div className="form-group">
            <h3 className="formLabel">Address</h3>
            <div className="input-container">
              <AiTwotoneHome className="input-icon" />
              <input
                type="text"
                placeholder="address"
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
          <div className="form-group">
            <h3 className="formLabel">Re-enter Password</h3>
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
                Don't have a account ?
                <Link to="/" className="btnLink">
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

export default SignUp;
