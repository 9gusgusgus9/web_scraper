class Scraper {
    
    constructor(sources) {
        this.sources = sources;
    }

    scrape() {
        this.sources.forEach(source => {
            this.pullArticles(source);
        });
        this.sources.forEach(source => {
            console.log("LEN: " + source.getArticles().length);
        });

    }


    pullArticles(source) {
        var link = source.getLink();
        $.ajax({
            url: link,
            type: "GET",
            dataType: "xml",
            success: function (data) {
                $(data).find("item").each(function () {
                    var el = $(this);
                    var title = el.find("title").text();
                    var description = el.find("description").text();
                    var link = el.find("link").text();
                    var pubDate = el.find("pubDate").text();
                    var article = new Article(title, description, link, pubDate);
                    //console.log(article.toString());
                    source.addArticle(article);
                });
            }
        });
    }

    getSources() {
        return this.sources;
    }

}