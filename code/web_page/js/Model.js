class Model {
    constructor() {}

    evaluate(article) {
        this.article.getParagraphs().forEach(paragraph => {
            this.rate(paragraph);
        });
    }

    rate(paragraph){
        paragraph.setRate(0);
        paragraph.setLabel("neutral");
    }
}