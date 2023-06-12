class Article {
    constructor(title, description, link, pubDate) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.pubDate = pubDate;
        this.paragraphs = [];
        this.stocks = [];
        // till now we leave it as array
        this.sentimentResult = []
    }
    // ...

    addParagraph(paragraph) {
        this.paragraphs.push(paragraph);
    }

    addStock(stock) {
        this.stocks.push(stock);
    }

    addSentimentAnalysis(sentimentRes) {
        this.sentimentResult.push(sentimentRes);
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getLink() {
        return this.link;
    }

    getPubDate() {
        return this.pubDate;
    }
    
    getParagraphs() {
        return this.paragraphs;
    }

    getStocks() {
        return this.stocks;
    }

    getSentiment() { 
        return this.sentimentResult;
    }

    toString() {
        return "Title: " + this.title + "\n" + "Link: " + this.link + "\n" + "PubDate: " + this.pubDate + "\n";
    }
}