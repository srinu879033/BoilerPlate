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
    mailId: "",
    mailErrorMsg: "",
    confirmPassword: "",
    confirmPasswordErrorMsg: "",
    checkboxErrorMsg: "",
  };

  const [formState, setFormState] = useState(initialState);

  const currForm = formState.login ? "Login Form" : "Register Form";

  const onChangeUsername = (event) => {
    const username = event.target.value;
    const usernameErrorMsg = username === "" ? usernameValidationMsg : "";
    setFormState({
      ...formState,
      username,
      usernameErrorMsg: usernameErrorMsg,
    });
  };

  const onChangePassword = (event) => {
    const password = event.target.value;
    const passwordErrorMsg = password === "" ? passwordValidationMsg : "";
    setFormState({
      ...formState,
      password,
      passwordErrorMsg: passwordErrorMsg,
    });
  };

  const onChangeMail = (event) => {
    const mailId = event.target.value;
    const mailErrorMsg = !validateEmail(mailId) ? mailValidationMsg : "";
    setFormState({ ...formState, mailId, mailErrorMsg });
  };

  const onChangeConfirmPassword = (event) => {
    const confirmPassword = event.target.value;
    const confirmPasswordErrorMsg =
      confirmPassword !== formState.password
        ? confirmPasswordValidationMsg
        : "";
    setFormState({
      ...formState,
      confirmPassword,
      confirmPasswordErrorMsg,
    });
  };

  const onClickCheckbox = (event) => {
    console.log("fuck");
    const checkboxErrorMsg = event.target.checked ? "" : checkboxValidationMsg;
    setFormState({ ...formState, checkboxErrorMsg });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, confirmPassword, mailId } = formState;
    if (event.target.id === "login") {
      const usernameErrorMsg = username === "" ? usernameValidationMsg : "";
      const passwordErrorMsg = password === "" ? passwordValidationMsg : "";
      if (username === "" || password === "") {
        setFormState({
          ...formState,
          username,
          password,
          usernameErrorMsg,
          passwordErrorMsg,
        });
      }
    } else {
      const usernameErrorMsg = username === "" ? usernameValidationMsg : "";
      const passwordErrorMsg = password === "" ? passwordValidationMsg : "";
      const mailErrorMsg = !validateEmail(mailId) ? mailValidationMsg : "";
      const confirmPasswordErrorMsg =
        confirmPassword !== formState.password
          ? confirmPasswordValidationMsg
          : "";
      const checkboxErrorMsg = document.getElementById("checkbox").checked
        ? ""
        : checkboxValidationMsg;
      if (
        usernameErrorMsg === "" ||
        passwordErrorMsg === "" ||
        mailErrorMsg === "" ||
        confirmPasswordErrorMsg === "" ||
        checkboxErrorMsg === ""
      ) {
        setFormState({
          ...formState,
          usernameErrorMsg,
          passwordErrorMsg,
          confirmPasswordErrorMsg,
          mailErrorMsg,
          checkboxErrorMsg,
        });
      }
    }
  };

  return (
    <div id="container" className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button
            id="toggleLogin"
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
            id="toggleRegister"
            className="toggle-btn"
            onClick={() => {
              const btn = document.getElementById("btn");
              btn.style.left = "110px";
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
            onClickCheckbox={onClickCheckbox}
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
