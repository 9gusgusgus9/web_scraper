const LOADING_TIME = 3000;
var sources = [];

sources.push(new Source("CNBC", "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000664"));
// sources.push(new Source("Seeking alpha", "https://seekingalpha.com/sector/financial.xml"));
// sources.push(new Source("Bar Chart", "https://www.barchart.com/news/rss/financials"));


var scraper = new Scraper(sources);
scraper.scrape();

function loadArticles() {

        body = document.getElementById("main");
        body.innerHTML = "";

        scraper.getSources().forEach(source => {
                source.getArticles().forEach(article => {
        
                        const art = document.createElement("article");
                        art.classList.add("articles");
        
        
                        const header = document.createElement("header");
        
                        const h2 = document.createElement("h2");
                        const title = document.createTextNode(article.getTitle());
                        h2.appendChild(title);
        
                        header.appendChild(h2);
        
                        const data = document.createElement("p");
                        const date = document.createTextNode(article.getPubDate());
                        data.appendChild(date);
        
                        header.appendChild(data);
        
                        art.appendChild(header);
        
        
                        const p = document.createElement("p");
                        const description = document.createTextNode(article.getDescription());
                        p.appendChild(description);
        
                        art.appendChild(p);
        
                        const footer = document.createElement("footer");
                        const tag = document.createElement("p");
                        const tags = document.createTextNode("Source: " + source.getName());
                        tag.appendChild(tags);
        
                        footer.appendChild(tag);
        
                        art.appendChild(footer);
        
                        art.addEventListener("click", function() {
                                loadArticle(article);
                        });
        
                        body.appendChild(art);
                });
        });
}

function loadArticle(article) {
        const art = document.createElement("article");
        
        body = document.getElementById("main");
        body.innerHTML = "";

        const header = document.createElement("header");

        const h2 = document.createElement("h2");
        const title = document.createTextNode(article.getTitle());
        h2.appendChild(title);

        header.appendChild(h2);

        const data = document.createElement("p");
        const date = document.createTextNode(article.getPubDate());
        data.appendChild(date);

        header.appendChild(data);

        art.appendChild(header);


        const p = document.createElement("p");
        const description = document.createTextNode(article.getDescription());
        p.appendChild(description);

        art.appendChild(p);

        
        article.getParagraphs().forEach(paragraph => {

                const par = document.createElement("p");
                var content = paragraph.getContent();
                //console.log(content);
                const text = document.createTextNode(content);
                
                par.appendChild(text);
                
                art.appendChild(par);
        });
                

        const footer = document.createElement("footer");
        const tag = document.createElement("p");
        const tags = document.createTextNode("Link: " + article.getLink());
        tag.appendChild(tags);

        footer.appendChild(tag);

        art.appendChild(footer);


        body.appendChild(art);

}

setTimeout(loadArticles, LOADING_TIME);
