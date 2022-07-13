const { By, Key } = require("selenium-webdriver");
const Page = require("./page"); //importing Page Class

class RegisterPage extends Page {
  //function for logging in to the page
  async register(username, password, confirmPassword, mailId) {
    await this.driver.findElement(By.id("toggleRegister")).click();

    this.usernameInputElement = this.driver.findElement(By.id("username")); //accessing username input element in the login page
    this.passwordInputElement = this.driver.findElement(By.id("password")); //accessing password input element in the login page
    this.mailInputElement = this.driver.findElement(By.id("mailId"));
    this.confirmPasswordInputElement = this.driver.findElement(
      By.id("confirmPassword")
    );

    await this.usernameInputElement.sendKeys(username); //sending input
    await this.passwordInputElement.sendKeys(password, Key.RETURN); //sending input
    await this.mailInputElement.sendKeys(mailId);
    await this.confirmPasswordInputElement.sendKeys(confirmPassword);
    await this.driver.findElement(By.id("register")).click();
  }

  //function for getting the value of our required element
}

module.exports = new RegisterPage();
