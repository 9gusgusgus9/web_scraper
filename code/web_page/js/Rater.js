class Rater {
    constructor(model, sources) {
        this.model = model;
        this.sources = sources;
        this.rate();
    }

    rate() {
        this.sources.forEach(source => {
            source.getArticles().forEach(article => {
                this.model.evaluate(article);
            });
        });
    }


    addSource(source) {
        this.sources.push(source);
        this.rate();
    }

}
var module = module || {};
module.exports=Rater;