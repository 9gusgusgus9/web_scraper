const Paragraph = require('./Paragraph');

describe('Paragraph', () => {
  let paragraph;

  beforeEach(() => {
    paragraph = new Paragraph('Test Content');
  });

  it('should set and get the score', () => {
    paragraph.setScore(5.5);
    expect(paragraph.getScore()).toBe(5.5);
  });

  it('should set and get the label', () => {
    paragraph.setLabel('positive');
    expect(paragraph.getLabel()).toBe('positive');
  });

  it('should get the content', () => {
    expect(paragraph.getContent()).toBe('Test Content');
  });
});
