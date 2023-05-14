var sources = [];
sources.push(new Source("https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000664"))

var scraper = new Scraper(sources);
scraper.scrape();

setTimeout(function () {

scraper.getSources().forEach(source => {
	source.getArticles().forEach(article => {

        body = document.getElementById("main");

        const header = document.createElement("header");

        const h2 = document.createElement("h2");
        const title = document.createTextNode(article.getTitle());
        h2.appendChild(title);

        header.appendChild(h2);

        const data = document.createElement("p");
        const date = document.createTextNode(article.getPubDate());
        data.appendChild(date);

        header.appendChild(data);

        const par = document.createElement("p");
        const text = document.createTextNode("Lorem ipsum");
        
        par.appendChild(text);
        
        const footer = document.createElement("footer");
        const tag = document.createElement("p");
        const tags = document.createTextNode("Tag: tag1, tag2, tag3...");
        tag.appendChild(tags);

        footer.appendChild(tag);

        const art = document.createElement("article");
        art.appendChild(header);
        art.appendChild(par);
        art.appendChild(footer);

        body.appendChild(art);
	});
});
}, 500);