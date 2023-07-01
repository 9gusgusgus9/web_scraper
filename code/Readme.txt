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

