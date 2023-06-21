class Model {
    constructor() {}

    evaluate(article) {
        article.getParagraphs().forEach(paragraph => {
            this.rate(paragraph);
        });
    }

    rate(paragraph){
        paragraph.setScore(0);
        paragraph.setLabel("neutral");
    }
}
module.exports=Model;