class Article {
    constructor(id, title, link) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.paragraphs = [];
    }
    // ...

    takeParagraphs() {
        // ...
        this.paragraphs.push(new Paragraph(content));
    }

    getParagraphs() {
        return this.paragraphs;
    }
}