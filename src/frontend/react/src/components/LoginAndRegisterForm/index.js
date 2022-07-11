import React, { useState } from "react";
import "./index.css";
import {
  checkboxValidationMsg,
  passwordValidationMsg,
  usernameValidationMsg,
  mailValidationMsg,
  confirmPasswordValidationMsg,
} from "../../constants/validationMsgs";
import { validateEmail } from "../../utilities/helpers";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

const LoginAndRegisterForm = () => {
  const initialState = {
    login: true,
    username: "",
    password: "",
    usernameErrorMsg: "",
    passwordErrorMsg: "",
    mail: "",
    mailErrorMsg: "",
    confirmPassword: "",
    confirmPasswordErrorMsg: "",
  };

  const [formState, setFormState] = useState(initialState);

  const currForm = formState.login ? "Login Form" : "Register Form";

  const updateUsername = (username, usernameErrorMsg) => {
    setFormState({ ...formState, username, usernameErrorMsg });
  };
  const updatePassword = (password, passwordErrorMsg) => {
    setFormState({ ...formState, password, passwordErrorMsg });
  };
  const onChangeUsername = (event) => {
    const username = event.target.value;
    if (username === "") {
      updateUsername(username, usernameValidationMsg);
    } else {
      updateUsername(username, "");
    }
  };

  const onChangePassword = (event) => {
    const password = event.target.value;
    if (password === "") {
      updatePassword(password, passwordValidationMsg);
    } else {
      updatePassword(password, "");
    }
  };

  const onChangeMail = (event) => {
    const mail = event.target.value;
    if (!validateEmail(mail)) {
      setFormState({ ...formState, mail, mailErrorMsg: mailValidationMsg });
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
        confirmPasswordErrorMsg: confirmPasswordValidationMsg,
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
    const { username, mail, password, confirmPassword } = formState;
    if (event.target.id === "login") {
      if (username === "") {
        updateUsername(username, usernameValidationMsg);
      }
      if (password === "") {
        updatePassword(password, passwordValidationMsg);
      }
    } else {
      const conditionsCheck = document.getElementById("checkbox").checked;

      if (username === "") {
        updateUsername(username, usernameValidationMsg);
      }
      if (!validateEmail(mail)) {
        setFormState({ ...formState, mailErrorMsg: mailValidationMsg });
      }
      if (password === "") {
        updatePassword(password, passwordValidationMsg);
      }
      if (confirmPassword === "") {
        setFormState({
          ...formState,
          confirmPasswordErrorMsg: confirmPasswordValidationMsg,
        });
      }

      if (!conditionsCheck) {
        setFormState({
          ...formState,
          checkboxErrorMsg: checkboxValidationMsg,
        });
      } else {
        setFormState({ ...formState, checkboxErrorMsg: "" });
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
              const btn = document.getElementById("btn");
              btn.style.left = "0";
              setFormState({ ...initialState, login: true });
            }}
          >
            Login
          </button>
          <button
            className="toggle-btn"
            onClick={() => {
              const btn = document.getElementById("btn");
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
          <LoginForm
            handleSubmit={handleSubmit}
            formState={formState}
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
          />
        )}
        {!formState.login && (
          <RegisterForm
            handleSubmit={handleSubmit}
            formState={formState}
            onChangeConfirmPassword={onChangeConfirmPassword}
            onChangeMail={onChangeMail}
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
          />
        )}
      </div>
    </div>
  );
};

export default LoginAndRegisterForm;
