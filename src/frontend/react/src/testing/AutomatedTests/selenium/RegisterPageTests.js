const port = process.env.PORT || 3000;
const assert = require("assert");
const mocha = require("mocha");
const {
  usernameValidationMsg,
  passwordValidationMsg,
} = require("../../../constants/validationMsgs");
const describe = mocha.describe;
const RegisterPage = require("./pages/RegisterPage");

const navigatingUrl = `http://localhost:${port}`; //url of the application that  we want to test

const validUsername = "My Username";
const validPassword = "My Password";
const validMailId = "fractalite@fractal.ai";

describe("adding tests for register", async () => {
  //beforeEach method will be executed before executing each it block
  beforeEach(async () => {
    await RegisterPage.launchBrowser(navigatingUrl);
  });
  //afterEach method will be executed after completion of each it block
  afterEach(async () => {
    await RegisterPage.closeBrowser(); //closing the browser instance
  });
  //array of input testCases
  const testsForValidationOfUsername = [
    {
      username: "",
      password: validPassword,
      mailId: validMailId,
      confirmPassword: validPassword,
      expectedOutput: usernameValidationMsg,
    },
    {
      username: validUsername,
      password: validPassword,
      expectedOutput: "",
      mailId: validMailId,
      confirmPassword: validPassword,
    },
  ];

  testsForValidationOfUsername.forEach(
    ({ username, password, expectedOutput, mailId, confirmPassword }) => {
      it("validation of username", async () => {
        await RegisterPage.register(
          username,
          password,
          mailId,
          confirmPassword
        ); //logging in
        const obtainedOutput = await RegisterPage.getText("usernameErrorMsg"); //accessing value of the element with id  usernameErrorMsg
        await assert.strictEqual(obtainedOutput, expectedOutput);
      });
    }
  );

  const testsForValidationOfPassword = [
    {
      username: validUsername,
      password: "",
      mailId: validMailId,
      confirmPassword: "",
      expectedOutput: passwordValidationMsg,
    },
    {
      username: validUsername,
      password: validPassword,
      mailId: validMailId,
      confirmPassword: validPassword,
      expectedOutput: "",
    },
  ];

  testsForValidationOfPassword.forEach(
    ({ username, password, expectedOutput, mailId, confirmPassword }) => {
      it("validation of password", async () => {
        await RegisterPage.register(
          username,
          password,
          mailId,
          confirmPassword
        );
        const obtainedOutput = await RegisterPage.getText("passwordErrorMsg"); //accessing value of the element with id  passwordErrorMsg
        await assert.strictEqual(obtainedOutput, expectedOutput);
      });
    }
  );
});
