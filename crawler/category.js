const puppeteer = require('puppeteer')

const crawlCategory = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://shopee.vn/all_categories');

  // Set screen size
  await page.setViewport({ width: 1920, height: 1080 });

  // Type into search box
  await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.search-box__link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
}

module.exports = crawlCategory
