import { chromium, Browser, Page } from 'playwright';

describe('Home Page', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
  });

  it('should display the correct page title', async () => {
    await page.goto('http://localhost:4200');
    expect(await page.title()).toBe('ardis.lu');
  });

  afterAll(async () => {
    await browser.close();
  });
});
