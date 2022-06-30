import React, { useState } from "react";
import "./index.css";
console.log("fuck");
const LoginAndRegisterForm = () => {
  const initialState = {
    login: true,
    username: "",
    password: "",
    userErrorMsg: "",
    passwordErrorMsg: "",
    mail: "",
    mailErrorMsg: "",
    confirmPassword: "",
    confirmPasswordErrorMsg: "",
  };

  const [formState, setFormState] = useState(initialState);

  const currForm = formState.login ? "Login Form" : "Register Form";

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onChangeUsername = (event) => {
    const username = event.target.value;
    if (username === "") {
      setFormState({
        ...formState,
        username,
        userErrorMsg: "*Username is required",
      });
    } else {
      setFormState({ ...formState, username: username, userErrorMsg: "" });
    }
  };

  const onChangePassword = (event) => {
    const password = event.target.value;
    if (password === "") {
      setFormState({
        ...formState,
        password,
        passwordErrorMsg: "*Password is required",
      });
    } else {
      setFormState({ ...formState, password, passwordErrorMsg: "" });
    }
  };

  const onChangeMail = (event) => {
    const mail = event.target.value;
    if (!validateEmail(mail)) {
      setFormState({ ...formState, mail, mailErrorMsg: "*Email is invalid" });
    } else {
      setFormState({ ...formState, mail, mailErrorMsg: "" });
    }
  };

  const onChangeConfirmPassword = (event) => {
    const confirmPassword = event.target.value;
    if (confirmPassword !== formState.password) {
      setFormState({
        ...formState,
        confirmPassword,
        confirmPasswordErrorMsg: "Passwords do not match",
      });
    } else {
      setFormState({
        ...formState,
        confirmPassword,
        confirmPasswordErrorMsg: "",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    if (event.target.id === "login") {
      const { userErrorMsg, passwordErrorMsg } = formState;
      if (userErrorMsg === "" && passwordErrorMsg === "") {
        alert("Logged In");
      }
    } else {
      const conditionsCheck = document.getElementById("checkbox").checked;
      const {
        userErrorMsg,
        passwordErrorMsg,
        mailErrorMsg,
        confirmPasswordErrorMsg,
      } = formState;
      if (
        userErrorMsg === "" &&
        passwordErrorMsg === "" &&
        mailErrorMsg === "" &&
        confirmPasswordErrorMsg === "" &&
        conditionsCheck
      ) {
        alert("Successfully Registered");
      } else {
        if (!conditionsCheck) {
          setFormState({ ...formState, checkboxErrorMsg: "*Required" });
        } else {
          setFormState({ ...formState, checkboxErrorMsg: "" });
        }
      }
    }
  };

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
              setFormState({ ...initialState, login: true });
            }}
          >
            Login
          </button>
          <button
            className="toggle-btn"
            onClick={() => {
              var btn = document.getElementById("btn");
              btn.style.left = "110px";
              formState.login = false;
              setFormState({ ...initialState, login: false });
            }}
          >
            Register
          </button>
        </div>
        <div className="social-icons">
          <h1 style={{ fontSize: "14px" }}>{currForm}</h1>
        </div>
        {formState.login && (
          <form id="login" class="input-group" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-field"
              placeholder="Enter Username"
              id="username"
              onChange={onChangeUsername}
            />
            <p className="error-msg">{formState.userErrorMsg}</p>
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              id="password"
              onChange={onChangePassword}
            />
            <p className="error-msg">{formState.passwordErrorMsg}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <input type="checkbox" className="check-box" />

              <p>Remember Password</p>
            </div>
            <button type="submit" className="submit-btn">
              Log In
            </button>
          </form>
        )}
        {!formState.login && (
          <form
            id="register"
            className="input-group"
            style={{ marginTop: "-18px" }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="input-field"
              placeholder="Enter Username"
              onChange={onChangeUsername}
            />
            <p className="error-msg">{formState.userErrorMsg}</p>
            <input
              type="email"
              className="input-field"
              placeholder="Enter email"
              onChange={onChangeMail}
            />
            <p className="error-msg">{formState.mailErrorMsg}</p>
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              onChange={onChangePassword}
            />
            <p className="error-msg">{formState.passwordErrorMsg}</p>
            <input
              type="text"
              className="input-field"
              placeholder="Confirm Password"
              onChange={onChangeConfirmPassword}
            />
            <p className="error-msg">{formState.confirmPasswordErrorMsg}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                className="check-box"
                id="checkbox"
                required
              />
              <p style={{ fontSize: "13px" }}>
                I agree to the terms & Conditions
              </p>
            </div>

            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginAndRegisterForm;
