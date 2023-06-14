const Rater = require('./Rater');
const Model = require('./Model');
const Source = require('./Source');
const Article = require('./Article');

describe('Rater', () => {
  let rater;
  let model;
  let source;
  let article;

  beforeEach(() => {
    model = new Model();
    source = new Source('Test Source', 'http://example.com/source');
    article = new Article('Test Article', 'Test Description', 'http://example.com/article', '2023-05-24');

    source.addArticle(article);

    rater = new Rater(model, [source]);
  });

  it('should evaluate the model for all articles', () => {
    const evaluateSpy = jest.spyOn(model, 'evaluate');

    rater.rate();

    expect(evaluateSpy).toHaveBeenCalledTimes(1);
    expect(evaluateSpy).toHaveBeenCalledWith(article);
  });

  it('should add a new source and re-evaluate', () => {
    const newSource = new Source('New Source', 'http://example.com/new-source');
    const evaluateSpy = jest.spyOn(model, 'evaluate');

    rater.addSource(newSource);

    expect(rater.sources).toContain(newSource);
    expect(evaluateSpy).toHaveBeenCalledTimes(1);
    expect(evaluateSpy).toHaveBeenCalledWith(article);
  });
});
