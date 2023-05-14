class Paragraph {
    constructor(content) {
        this.content = content;
        this.score = null;
        this.label = null;
    }

    // ...
    setScore(score) {
        this.score = score;
    }

    setLabel(label) {
        this.label = label;
    }

    getScore() {
        return this.score;
    }

    getLabel() {
        return this.label;
    }


}