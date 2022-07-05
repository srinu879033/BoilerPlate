const { Builder, By, Key } = require("selenium-webdriver");
const port = process.env.PORT || 3000;
const initiateBrowserInstance = async () => {
  const navigatingUrl = `http://localhost:${port}`;
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get(navigatingUrl);
  } catch (error) {
    console.log(error.message);
  } finally {
    await driver.quit();
  }
};
initiateBrowserInstance();
