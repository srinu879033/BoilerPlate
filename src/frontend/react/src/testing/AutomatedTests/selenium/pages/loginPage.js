const { By, Key } = require("selenium-webdriver");
const Page = require("./page"); //importing Page Class

class LoginPage extends Page {
  //function for logging in to the page
  async login(username, password) {
    this.usernameInputElement = this.driver.findElement(By.id("username")); //accessing username input element in the login page
    this.passwordInputElement = this.driver.findElement(By.id("password")); //accessing password input element in the login page

    await this.usernameInputElement.sendKeys(username); //sending input
    await this.passwordInputElement.sendKeys(password, Key.RETURN); //sending input
    await this.driver.findElement(By.id("login")).click();
  }

  //function for getting the value of our required element
}

module.exports = new LoginPage();
