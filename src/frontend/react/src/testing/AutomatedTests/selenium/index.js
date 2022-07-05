const { Builder, By, Key } = require("selenium-webdriver");

const port = process.env.PORT || 3000;
const assert = require("assert");
let driver = null;
const mocha = require("mocha");
const describe = mocha.describe;
//describe block

describe("adding tests for login", () => {
  //it block
  it("checking validation", async () => {
    try {
      driver = await new Builder().forBrowser("chrome").build();
      await driver.get(`http://localhost:${port}/`);
      const username = await driver.findElement(By.id("username"));
      const password = await driver.findElement(By.id("password"));
      username.sendKeys("My Username");
      password.sendKeys("My Password", Key.RETURN);
      const obtainedOutput = await driver
        .findElement(By.id("usernameErrorMsg"))
        .getText()
        .then((value) => {
          return value;
        });
      assert.strictEqual(obtainedOutput, "");
      await driver.quit();
    } catch (error) {
      console.log(error.message);
    }
  });
});

//function for mocking the inputs for username and password in Login Form

//function to compare the output expected by us and the actual output from our application

//launch the browser
