class Source {
    constructor(link) {
        this.articles = [];
        this.link = link;
    }

    getLink() {
        return this.link;
    }

    addArticle(article) {
        this.articles.push(article);
        console.log("Added article: " + article.toString());
        console.log(this.articles.length);
    }

    getArticles() {
        console.log("LEN: " + this.articles.length);
        return this.articles;
    }

    toString() {
        return "Link: " + this.link + "\n";
    }
}