const port = process.env.PORT || 3000;
const assert = require("assert");
const mocha = require("mocha");
const describe = mocha.describe;
const LoginPage = require("./pages/loginPage");
//describe block

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
  //it block
  it("validation of username", async () => {
    await LoginPage.login("", "My Password"); //logging in
    const obtainedOutput = await LoginPage.getText("usernameErrorMsg");
    await assert.strictEqual(obtainedOutput, "Username is Required");
  });
  it("validation of password", async () => {
    await LoginPage.login("My Username", "");
    const obtainedOutput = await LoginPage.getText("passwordErrorMsg");
    await assert.strictEqual(obtainedOutput, "Password is Required");
  });
});
