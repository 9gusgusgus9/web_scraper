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

4) open home.html file on the browser
