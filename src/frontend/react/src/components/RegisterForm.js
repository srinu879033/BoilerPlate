const RegisterForm = ({
  formState,
  onChangeConfirmPassword,
  onChangeMail,
  onChangePassword,
  onChangeUsername,
  handleSubmit,
  onClickCheckbox,
}) => {
  return (
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
        id="username"
      />
      <p className="error-msg" id="usernameErrorMsg">
        {formState.usernameErrorMsg}
      </p>
      <input
        type="text"
        className="input-field"
        placeholder="Enter email"
        onChange={onChangeMail}
        id="mailId"
      />
      <p className="error-msg" id="mailErrorMsg">
        {formState.mailErrorMsg}
      </p>
      <input
        type="password"
        className="input-field"
        placeholder="Enter Password"
        onChange={onChangePassword}
        id="password"
      />
      <p className="error-msg" id="passwordErrorMsg">
        {formState.passwordErrorMsg}
      </p>
      <input
        type="text"
        className="input-field"
        placeholder="Confirm Password"
        onChange={onChangeConfirmPassword}
        id="confirmPassword"
      />
      <p className="error-msg" id="confirmPasswordErrorMsg">
        {formState.confirmPasswordErrorMsg}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <p className="error-msg" id="confirmPasswordErrorMsg">
          {formState.checkboxErrorMsg}
        </p>
        <input
          type="checkbox"
          className="check-box"
          id="checkbox"
          onClick={onClickCheckbox}
        />
        <p style={{ fontSize: "13px" }}>I agree to the terms & Conditions</p>
      </div>

      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
