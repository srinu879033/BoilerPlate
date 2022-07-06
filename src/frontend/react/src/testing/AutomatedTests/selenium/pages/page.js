const { Builder } = require("selenium-webdriver");

class Page {
  constructor() {
    this.driver = null;
  }
  async launchBrowser(navigatingUrl) {
    this.driver = await new Builder().forBrowser("chrome").build();
    await this.driver.get(navigatingUrl);
  }
  async closeBrowser() {
    await this.driver.quit();
  }
}

module.exports = Page;
