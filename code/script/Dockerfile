FROM tiangolo/uvicorn-gunicorn:python3.10-slim

COPY ./ /app
WORKDIR /app

RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app"]