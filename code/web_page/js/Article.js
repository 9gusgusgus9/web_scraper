class Article {
    constructor(title, description, link, pubDate) {
        this.title = title;
        this.description = description;
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

    toString() {
        return "Title: " + this.title + "\n" + "Link: " + this.link + "\n" + "PubDate: " + this.pubDate + "\n";
    }
}