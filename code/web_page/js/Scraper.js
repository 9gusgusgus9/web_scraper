class Scraper {
    
    constructor(sources) {
        this.sources = sources;
    }

    scrape() {
        this.sources.forEach(source => {
            this.pullArticles(source);
        });

    }


    pullArticles(source) {
        var link_s = source.getLink();
        jQuery.support.cors = true;
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + link_s,
            type: "GET",
            dataType: "xml",
            success: function (data) {
                $(data).find("item").each(function () {
                    var el = $(this);
                    var title = el.find("title").text();
                    var description = el.find("description").text();
                    if (description.substr(0, 22) !== "Pros on CNBC discussed") {
                        var link = el.find("link").text();
                        var pubDate = el.find("pubDate").text();
                        var article = new Article(title, description, link, pubDate);
                        
                        $.ajax({
                            url: "https://cors-anywhere.herokuapp.com/" + link,
                            type: "GET",
                            dataType: "html",
                            success: function (data) {
                                var groups = $(data).find("div.group");
                                groups.each(function () {
                                    var ps = $(this).find("p");
                                    var p = "";
                                    ps.each(function () {
                                        p += $(this).text();
                                        p += "\n";
                                    });
                                    var paragraph = new Paragraph(p);
                                    article.addParagraph(paragraph);
                                });
                            }
                        });
                        //console.log(article.toString());
                        source.addArticle(article);
                    }
                });
            }
        });
    }

    getSources() {
        return this.sources;
    }

}
var module = module || {};
module.exports=Scraper;