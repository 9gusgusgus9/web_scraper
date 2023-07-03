# Prospera Wealth Management
**Description:** This project, developed by a team of four software engineering students from the University of Bologna as part of a software engineering exam, aims to solve a specific problem or address a particular need. The project focuses on the development of a web application that utilizes web scraping techniques to gather financial articles from renowned websites and provides them in a more concise and user-friendly manner. Additionally, the project incorporates a sentiment analysis model to analyze the content of the news articles, enabling readers to determine whether the news is positive, negative, or neutral before delving into the details. The project is designed to cater specifically to personal wealth management companies, offering them a valuable tool for staying up-to-date with financial news while efficiently assessing sentiment trends.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Installation

1. 1. Clone the repository: 
    * `git clone https://github.com/9gusgusgus9/web_scraper.git`

2. start the virtual environment:
    * `python -m venv .venv`
    * `source .venv/scripts/activate`

3. Setup 
    * `pip install -r requirements.txt`
    * `pip install torch torchvision torchaudio`
    * `pip install xformers`

4. Start the server in the directory code/script
    * `uvicorn main:app --reload`



### Steps for opening the web application

1. move to directory `code/web_page`

2. open `home.html` on the browser


### Steps for running the tests

1. Install jest
    - `npm install jest`

2. Intsall jsdom and jquery required for two tests
    - `npm install jsdom`
    - `npm install jquery`

3. Run the tests 
    - move to directory `code/web_page/js/tests`
    -  `npx jest Article.tests.js`
    -  `npx jest Paragraph.tests.js`
    -  `npx jest Scraper.tests.js`
    -  `npx jest Sender.tests.js`
    -  `npx jest Source.tests.js`