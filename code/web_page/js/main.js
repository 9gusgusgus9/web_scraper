const LOADING_TIME = 3000;
var sources = [];

//Creating new sources
sources.push(new Source("CNBC", "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000664"));
// sources.push(new Source("Seeking alpha", "https://seekingalpha.com/sector/financial.xml"));
// sources.push(new Source("Bar Chart", "https://www.barchart.com/news/rss/financials"));

//Load Sender class
var sender = new Sender();
URL_API_SERVER = "http://127.0.0.1:8000";


//Load Scraper class with sources array
var scraper = new Scraper(sources);
scraper.scrape();

//MAIN
setTimeout(loadArticles, LOADING_TIME);


//MAIN FUNCTIONS
function loadArticles() {

        body = document.getElementById("main");
        body.innerHTML = "";

        //Looping through sources
        scraper.getSources().forEach(source => {

                //Looping through articles
                source.getArticles().forEach(article => {
        
                        //Creating article element html
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
                        
                        //Call loadArticle function when click on article
                        art.addEventListener("click", function() {
                                loadArticle(article);
                        });
        
                        body.appendChild(art);
                });
        });
}

//Function to load and evaluate article
function loadArticle(article) {
        //Creating article element html
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

        var cont = "";
        
        const sect = document.createElement("section");
        sect.setAttribute("id", "article");
        const points = document.createElement("p");
        points.setAttribute("id", "points");
        art.appendChild(points);
        article.getParagraphs().forEach(paragraph => {
                const par = document.createElement("p");
                var content = paragraph.getContent();
                const text = document.createTextNode(content);
                cont += content;
                par.appendChild(text);
                sect.appendChild(par);
        });

        art.appendChild(sect);

        //Article evaluation
        var result = sender.sendPostRequest(cont)
        .then((response) => {
                res = response[0]
                score = document.getElementById("points");
                score.innerHTML = "Score: " + res["score"];
                article = document.getElementById("article");
                switch(res["label"]) {
                        case "Positive":
                                article.classList.add("positive");
                                score.classList.add("positive");
                                break;
                        case "Negative":
                                article.classList.add("negative");
                                score.classList.add("negative");
                                break;
                        case "Neutral":
                                article.classList.add("neutral");
                                score.classList.add("neutral");
                                break;
                        default:
                                article.classList.add("none");
                }
                return response;
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        const footer = document.createElement("footer");
        const tag = document.createElement("p");
        const tags = document.createTextNode("Link: " + article.getLink());
        
        tag.appendChild(tags);

        footer.appendChild(tag);

        art.appendChild(footer);


        body.appendChild(art);

}
