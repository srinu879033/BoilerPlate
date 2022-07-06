const Page = require("./page");
const { By, Key } = require("selenium-webdriver");

class LoginPage extends Page {
  async login(username, password) {
    this.usernameInputElement = this.driver.findElement(By.id("username"));
    this.passwordInputElement = this.driver.findElement(By.id("password"));
    await this.usernameInputElement.sendKeys(username);
    await this.passwordInputElement.sendKeys(password, Key.RETURN);
  }
  async getText(id) {
    return await this.driver
      .findElement(By.id(id))
      .getText()
      .then((value) => {
        return value;
      });
  }
}

module.exports = new LoginPage();
