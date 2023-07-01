Steps for starting the server

1) start the virtual environment
python -m venv .venv
source .venv/scripts/activate

2) Setup
pip install torch torchvision torchaudio
pip install xformers

move to directory code/script
pip install -r requirements.txt

3) Start the server
uvicorn main:app --reload



Steps for opening the web application

1) move to directory code/web_page

2) open home.html on the browser



Steps for running the tests

1) Install jest
npm install jest

2) Intsall jsdom and jquery required for two tests
npm install jsdom
npm install jquery

3) Run the tests 
move to directory code/web_page/js/tests

npx jest Article.tests.js
npx jest Paragraph.tests.js
npx jest Scraper.tests.js
npx jest Sender.tests.js
npx jest Source.tests.js