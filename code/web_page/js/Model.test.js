const Model = require('./Model');
const Article = require('./Article');
const Paragraph = require('./Paragraph');

describe('Model', () => {
  let model;
  let article;
  let paragraph;

  beforeEach(() => {
    model = new Model();
    article = new Article('Test Article', 'Test Description', 'http://example.com/article', '2023-05-24');
    paragraph = new Paragraph('Test Paragraph');

    article.addParagraph(paragraph);
  });

  it('should evaluate the article and rate the paragraphs', () => {
    const rateSpy = jest.spyOn(model, 'rate');

    model.evaluate(article);

    expect(rateSpy).toHaveBeenCalledTimes(1);
    expect(rateSpy).toHaveBeenCalledWith(paragraph);
    expect(paragraph.getScore()).toBe(0);
    expect(paragraph.getLabel()).toBe('neutral');
  });

  it('should rate the paragraph as neutral', () => {
    model.rate(paragraph);

    expect(paragraph.getScore()).toBe(0);
    expect(paragraph.getLabel()).toBe('neutral');
  });
});
