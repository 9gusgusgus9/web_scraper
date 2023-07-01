const Article = require('../Article'); // Assuming the Article class is in a separate file

describe('Article', () => {
  let article;

  beforeEach(() => {
    // Create a new instance of the Article class before each test
    article = new Article('Test Title', 'Test Description', 'http://example.com', '2023-05-24');
  });

  it('should add a paragraph', () => {
    article.addParagraph('Paragraph 1');
    expect(article.getParagraphs()).toEqual(['Paragraph 1']);
  });

  it('should get the article ID', () => {
    expect(article.getId()).toBeUndefined();
  });

  it('should get the article title', () => {
    expect(article.getTitle()).toBe('Test Title');
  });

  it('should get the article description', () => {
    expect(article.getDescription()).toBe('Test Description');
  });

  it('should get the article link', () => {
    expect(article.getLink()).toBe('http://example.com');
  });

  it('should get the article publication date', () => {
    expect(article.getPubDate()).toBe('2023-05-24');
  });

  it('should get the article paragraphs', () => {
    expect(article.getParagraphs()).toEqual([]);
  });

  it('should return a string representation of the article', () => {
    const expectedString = 'Title: Test Title\nLink: http://example.com\nPubDate: 2023-05-24\n';
    expect(article.toString()).toBe(expectedString);
  });
});
