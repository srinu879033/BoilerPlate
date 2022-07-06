const port = process.env.PORT || 3000;
const assert = require("assert");
const mocha = require("mocha");
const describe = mocha.describe;
const LoginPage = require("./pages/loginPage");
//describe block

const navigatingUrl = `http://localhost:${port}`;
describe("adding tests for login", async () => {
  beforeEach(async () => {
    await LoginPage.launchBrowser(navigatingUrl);
  });
  afterEach(async () => {
    await LoginPage.closeBrowser();
  });
  //it block
  it("checking validation of username", async () => {
    await LoginPage.login("", "My Password");
    const obtainedOutput = await LoginPage.getText("usernameErrorMsg");
    await assert.strictEqual(obtainedOutput, "Username is Required");
  });
  it("checking validation of password", async () => {
    await LoginPage.login("My Username", "");
    const obtainedOutput = await LoginPage.getText("passwordErrorMsg");
    await assert.strictEqual(obtainedOutput, "Password is Required");
  });
});

//function for mocking the inputs for username and password in Login Form

//function to compare the output expected by us and the actual output from our application

//launch the browser
