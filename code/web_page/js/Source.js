class Source {
    constructor(link) {
        this.articles = [];
        this.link = link;
    }

    takeArticles() {
        // ...
        this.articles.push(new Article(id, title, link));

    }

    getArticles() {
        return this.articles;
    }
}