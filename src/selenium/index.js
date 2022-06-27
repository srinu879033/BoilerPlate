const { Builder, By, Key } = require("selenium-webdriver");
const port = process.env.PORT || 3000;
const assert = require("assert");
const checkLogin = async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get(`http://localhost:${port}/`);
  try {
    await driver.findElement(By.id("username")).sendKeys("Selenium");
  } catch (err) {
    console.log(err.message);
  }
  try {
    await driver.findElement(By.id("password")).sendKeys("Selenium");
  } catch (err) {
    console.log(err.message, Key.RETURN);
  }
};

checkLogin();
