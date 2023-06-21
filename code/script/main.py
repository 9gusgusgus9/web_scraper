'''
to start the server use:
-->  uvicorn <file_name>:app --reload

'''
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import Sentiment_Analysis_Model
import json


# model
sentiment_model = Sentiment_Analysis_Model()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["POST", "GET"],
		allow_headers=["*"],
    max_age=3600,
)

class Paragraph(BaseModel):
    text: list

@app.get('/', status_code=200)
def hello():
    return f"The server is running"

@app.post('/', status_code=200)
def post_text(paragraph: Paragraph):
    # execute the analysis
    result = sentiment_model.getAnalysis(paragraph.text)
    return result