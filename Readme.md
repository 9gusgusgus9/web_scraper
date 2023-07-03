# Prospera Wealth Management
**Description:** This project, developed by a team of four software engineering students from the University of Bologna as part of a software engineering exam, aims to solve a specific problem or address a particular need. The project focuses on the development of a web application that utilizes web scraping techniques to gather financial articles from renowned websites and provides them in a more concise and user-friendly manner. Additionally, the project incorporates a sentiment analysis model to analyze the content of the news articles, enabling readers to determine whether the news is positive, negative, or neutral before delving into the details. The project is designed to cater specifically to personal wealth management companies, offering them a valuable tool for staying up-to-date with financial news while efficiently assessing sentiment trends.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tests](#Tests)
- [License](#license)
- [Contact](#contact)

## Installation

1. 1. Clone the repository: 
    * `git clone https://github.com/9gusgusgus9/web_scraper.git`

2. start the virtual environment:
    * `python -m venv .venv`
    * `source .venv/scripts/activate`

3. Setup 
    * `pip install -r code/script/requirements.txt`
    * `pip install torch torchvision torchaudio`
    * `pip install xformers`

4. Start the server in the directory code/script
    * `uvicorn main:app --reload`



## Usage

1. move to directory `code/web_page`

2. open `home.html` on the browser

3. Click on a news title to open it and read the full text

4. The boarder of the box will tell you if the article is positive (green), neutral (orange), or negative (red)

5. Explore the NAV to see information on the company that we made up which could use it

6. The number on the top of the box means the confidence of the sentiment analysis performed

## Features

- Web scraping: The project utilizes web scraping techniques to gather financial articles from renowned websites.
- Sentiment Analysis: The project incorporates a sentiment analysis model to assess the sentiment of the financial news articles.
- Sentiment Indicators: Users can quickly identify the sentiment of the news articles as positive, negative, or neutral.
- Real world Example: We imagined a company called "Prospera Walth Management" which could actually use this project as MVP to offer its employees a valuable tool for staying informed and making data-driven decisions.


## Tests

We developed two tests to ensure the quality of the the code we wrote. 

1. Install jest
    - `npm install jest`

2. Intsall jsdom and jquery required for two tests
    - `npm install jsdom`
    - `npm install jquery`

3. Run the tests 
    - move to directory `code/web_page/js/tests`
    -  `npx jest Scraper.tests.js`
    -  `npx jest Sender.tests.js`

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

If you have any questions, suggestions, or feedback, feel free to reach out to us:

- Gustavo Mazzanti: 9gusgusgus9
- Rostyslav Dovganyuk: rostydovga
- Marco Visentin: marco00visentin
- Francesca Eskina: FrancEskina