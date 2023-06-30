const Scraper = require('./Scraper');
const Source = require('./Source');
const Article = require('./Article');
const Paragraph = require('./Paragraph');

describe('Scraper', () => {
  let scraper;
  let mockSource;
  let mockArticle;
  let mockParagraph;

  beforeEach(() => {
    // Create a mock source object
    mockSource = new Source('Mock Source', 'http://example.com');

    // Create a mock article object
    mockArticle = new Article('Mock Article', 'Mock Description', 'http://example.com/article', '2023-05-24');

    // Create a mock paragraph object
    mockParagraph = new Paragraph('Mock Paragraph');

    // Mock the necessary functions
    mockSource.getLink = jest.fn().mockReturnValue('http://example.com');
    mockSource.addArticle = jest.fn();
    mockArticle.addParagraph = jest.fn();
    mockParagraph.setScore = jest.fn();
    mockParagraph.setLabel = jest.fn();

    // Create the scraper with the mock source
    scraper = new Scraper([mockSource]);
  });

  it('should scrape articles and paragraphs from sources', () => {
    // Mock the necessary jQuery functions
    global.$ = jest.fn();
    global.$.ajax = jest.fn().mockImplementation(({ success }) => {
      const mockData = `
        <rss>
          <channel>
            <item>
              <title>Mock Title</title>
              <description>Mock Description</description>
              <link>http://example.com/article</link>
              <pubDate>2023-05-24</pubDate>
            </item>
          </channel>
        </rss>
      `;
      success(mockData);
    });
    global.$(document).find = jest.fn().mockReturnValueOnce([
      {
        find: jest.fn().mockReturnValueOnce([{ text: jest.fn().mockReturnValueOnce('Mock Paragraph') }]),
      },
    ]);

    // Call the scrape method
    scraper.scrape();

    // Verify that the necessary functions were called
    expect(mockSource.getLink).toHaveBeenCalled();
    expect(global.$.ajax).toHaveBeenCalledWith({
      url: 'https://cors-anywhere.herokuapp.com/http://example.com',
      type: 'GET',
      dataType: 'xml',
      success: expect.any(Function),
    });
    expect(mockSource.addArticle).toHaveBeenCalledWith(mockArticle);
    expect(mockArticle.addParagraph).toHaveBeenCalledWith(mockParagraph);
    expect(mockParagraph.setScore).toHaveBeenCalledWith(0);
    expect(mockParagraph.setLabel).toHaveBeenCalledWith('neutral');
  });

  it('should return the sources', () => {
    const sources = scraper.getSources();
    expect(sources).toEqual([mockSource]);
  });
});
