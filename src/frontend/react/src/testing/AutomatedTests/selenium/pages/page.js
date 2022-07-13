const { Builder, By } = require("selenium-webdriver");

class Page {
  constructor() {
    this.driver = null;
  }
  async launchBrowser(navigatingUrl) {
    this.driver = await new Builder().forBrowser("chrome").build(); //building a driver
    await this.driver.get(navigatingUrl); // navigating to our application
  }
  async getText(id) {
    return this.driver
      .findElement(By.id(id))
      .getText()
      .then((value) => {
        return value;
      });
  }
  async closeBrowser() {
    await this.driver.quit(); //closing the browser instance
  }
}

module.exports = Page;
