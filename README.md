# Puppeteer-Scraper

#### This is a micro project meant to test and gradually learn about **[Puppeteer](https://pptr.dev/)** and web-scraping using JavaScript.

>Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

#### The project is supposed to do the following:<br>

1. Logs into a [LinkedIn](https://in.linkedin.com/) account according to the credentials provided as specified environment variables.

2. Loads the feed and searches for the people with a provided keyword.

3. Sends connection request to the listed profiles matching the keyword(s).


##  To run the code

> Install npm packages:<br>`npm install`<br>
> Create a .env file.<br>`touch .env`<br>
> Run using the node. <br>`node app.js`<br>

#### A chrome browser will pop up showing the browser and the automated processes. You can switch it to run in the headless mode changing the headless option to *true* as shown:
`const browser = await puppeteer.launch({
    headless: true
  });`
