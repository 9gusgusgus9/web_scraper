const Scraper = require('../Scraper');
const Source = require('../Source');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const $ = require('jquery');

describe('Scraper', () => {
  let scraper;

  beforeEach(() => {
    const source = new Source("CNBC", "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000664");
    scraper = new Scraper(source);

    // Create a JSDOM instance with jQuery
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.$ = require('jquery')(global.window);
  });

  afterEach(() => {
    // Clean up the JSDOM instance
    delete global.document;
    delete global.window;
    delete global.$;
  });

  it('should scrape articles from sources', async () => {
    // Perform the scraping
    await scraper.scrape();

    // Get the scraped sources
    const scrapedSources = scraper.getSources();

    // Assert that the scraped sources array is not empty
    expect(scrapedSources.length).toBeGreaterThan(0);
  });
});