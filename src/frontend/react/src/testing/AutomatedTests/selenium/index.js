const port = process.env.PORT || 3000;
const assert = require("assert");
const mocha = require("mocha");
const describe = mocha.describe;
const LoginPage = require("./pages/loginPage");

const navigatingUrl = `http://localhost:${port}`; //url of the application that  we want to test

describe("adding tests for login", async () => {
  //beforeEach method will be executed before executing each it block
  beforeEach(async () => {
    await LoginPage.launchBrowser(navigatingUrl);
  });
  //afterEach method will be executed after completion of each it block
  afterEach(async () => {
    await LoginPage.closeBrowser(); //closing the browser instance
  });
  //array of input testCases
  const testsForValidationOfUsername = [
    {
      username: "",
      password: "My Password",
      expectedOutput: "Username is Required",
    },
    { username: "My Username", password: "My Password", expectedOutput: "" },
  ];

  testsForValidationOfUsername.forEach(
    ({ username, password, expectedOutput }) => {
      it("validation of username", async () => {
        await LoginPage.login(username, password); //logging in
        const obtainedOutput = await LoginPage.getText("usernameErrorMsg"); //accessing value of the element with id  usernameErrorMsg
        await assert.strictEqual(obtainedOutput, expectedOutput);
      });
    }
  );

  const testsForValidationOfPassword = [
    {
      username: "My Username",
      password: "",
      expectedOutput: "Password is Required",
    },
    {
      username: "My Username",
      password: "My Password",
      expectedOutput: "",
    },
  ];

  testsForValidationOfPassword.forEach(
    ({ username, password, expectedOutput }) => {
      it("validation of password", async () => {
        await LoginPage.login(username, password);
        const obtainedOutput = await LoginPage.getText("passwordErrorMsg"); //accessing value of the element with id  passwordErrorMsg
        await assert.strictEqual(obtainedOutput, expectedOutput);
      });
    }
  );
});
