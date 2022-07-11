const LoginForm = ({
  formState,
  handleSubmit,
  onChangeUsername,
  onChangePassword,
}) => {
  return (
    <form id="login" class="input-group" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-field"
        placeholder="Enter Username"
        id="username"
        onChange={onChangeUsername}
      />
      <p className="error-msg" id="usernameErrorMsg">
        {formState.usernameErrorMsg}
      </p>
      <input
        type="password"
        className="input-field"
        placeholder="Enter Password"
        id="password"
        onChange={onChangePassword}
      />
      <p className="error-msg" id="passwordErrorMsg">
        {formState.passwordErrorMsg}
      </p>
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
  );
};

export default LoginForm;
