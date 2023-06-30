Steps for windows using Git Bash

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

go to the link https://cors-anywhere.herokuapp.com/corsdemo
request temporary access

4) open the HTML page
