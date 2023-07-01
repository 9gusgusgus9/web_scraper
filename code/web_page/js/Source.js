class Source {
    constructor(name, link) {
        this.articles = [];
        this.name = name;
        this.link = link;
    }

    getName() {
        return this.name;
    }

    getLink() {
        return this.link;
    }

    addArticle(article) {
        this.articles.push(article);
    }

    getArticles() {
        return this.articles;
    }

    toString() {
        return "Link: " + this.link + "\n";
    }
}

module.exports=Source