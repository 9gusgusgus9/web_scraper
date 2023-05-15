class Article {
    constructor(id, title, link, pubDate) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.pubDate = pubDate;
        this.paragraphs = [];
    }
    // ...

    addParagraph(paragraph) {
        this.paragraphs.push(paragraph);
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
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

    toString() {
        return "Title: " + this.title + "\n" + "Link: " + this.link + "\n" + "PubDate: " + this.pubDate + "\n";
    }
}