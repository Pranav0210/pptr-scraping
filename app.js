const puppeteer = require('puppeteer');
require('dotenv').config();

(async () => {
  const browser = await puppeteer.launch({
    headless:false,
  });
  const page = await browser.newPage();
  // const preloadFile = fs.readFileSync('./preload.js', 'utf8');
  // await page.evaluateOnNewDocument(preloadFile);
  await page.goto('https://in.linkedin.com');
  await page.type('#session_key', process.env.ID);
  await page.type('#session_password', process.env.PASS);
  await page.click('.sign-in-form__submit-button');
  // await page.waitForNavigation();
  // await page.click('.btn__primary--large', '.from__button--floating');
  await page.waitForTimeout(45000);
  await page.click('.search-global-typeahead__collapsed-search-button');
  await page.type('.search-global-typeahead__input','node');
  await page.waitForTimeout(1000);
  await page.screenshot({path:'feed.png'});
  // await browser.close();
})();
