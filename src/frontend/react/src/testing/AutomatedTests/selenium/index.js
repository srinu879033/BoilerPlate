const { Builder, By, Key } = require("selenium-webdriver");

const port = process.env.PORT || 3000;
const assert = require("assert");
let driver = null;

const initiateBrowser = async () => {
  try {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(`http://localhost:${port}/`); //navigating to our application
    checkLogin();
  } catch (error) {
    console.log(error.message);
  }
};

//function for mocking the inputs for username and password in Login Form
const mockLogin = async (
  usernameInput,
  passwordInput,
  username,
  password,
  id,
  expectedOutput
) => {
  username.sendKeys(usernameInput);
  password.sendKeys(passwordInput, Key.RETURN);
  checkOutputs(id, expectedOutput);
  username.clear();
  password.clear();
};

//function to compare the output expected by us and the actual output from our application
const checkOutputs = async (id, expectedOutput) => {
  try {
    const obtainedOutput = await driver
      .findElement(By.id(id))
      .getText()
      .then((value) => {
        return value;
      });
    assert.strictEqual(obtainedOutput, expectedOutput);
  } catch (error) {
    console.log(error.message);
  }
};

const checkLogin = async () => {
  try {
    const username = await driver.findElement(By.id("username"));
    const password = await driver.findElement(By.id("password"));
    await mockLogin(
      "",
      "Selenium",
      username,
      password,
      "usernameErrorMsg",
      "Username is Required"
    );
  } catch (err) {
    console.log(err.message);
  }
};

initiateBrowser(); //launch the browser
