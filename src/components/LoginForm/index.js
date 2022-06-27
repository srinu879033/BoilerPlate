import React, { useState } from "react";
import "./index.css";

const LoginForm = () => {
  const [login, setLogin] = useState(true);
  return (
    <div id="container" className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button
            className="toggle-btn"
            onClick={() => {
              var btn = document.getElementById("btn");
              btn.style.left = "0";
              setLogin(true);
            }}
          >
            Login
          </button>
          <button
            className="toggle-btn"
            onClick={() => {
              var btn = document.getElementById("btn");
              btn.style.left = "110px";
              setLogin(false);
            }}
          >
            Register
          </button>
        </div>
        <div className="social-icons">
          <h1 style={{ fontSize: "14px" }}>LoginForm</h1>
        </div>
        {login && (
          <form id="login" class="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Enter UserName"
              required
              id="username"
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              id="password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>Remember Password</span>
            <button type="submit" className="submit-btn">
              Log In
            </button>
          </form>
        )}
        {!login && (
          <form id="register" className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Enter Username"
              required
            />
            <input
              type="email"
              className="input-field"
              placeholder="Enter email"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>I agree to the terms & Conditions</span>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
