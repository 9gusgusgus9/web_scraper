const Source = require('./Source');
const Article = require('./Article');

describe('Source', () => {
  let source;
  let article1;
  let article2;

  beforeEach(() => {
    source = new Source('Test Source', 'http://example.com');
    article1 = new Article('Article 1', 'Description 1', 'http://example.com/article1', '2023-05-24');
    article2 = new Article('Article 2', 'Description 2', 'http://example.com/article2', '2023-05-25');
  });

  it('should get the name', () => {
    expect(source.getName()).toBe('Test Source');
  });

  it('should get the link', () => {
    expect(source.getLink()).toBe('http://example.com');
  });

  it('should add an article', () => {
    source.addArticle(article1);
    source.addArticle(article2);

    expect(source.getArticles()).toEqual([article1, article2]);
  });

  it('should get the articles', () => {
    source.addArticle(article1);
    source.addArticle(article2);

    expect(source.getArticles()).toEqual([article1, article2]);
  });

  it('should convert to string', () => {
    const expectedString = 'Link: http://example.com\n';
    expect(source.toString()).toBe(expectedString);
  });
});
