from transformers import BertTokenizer, BertForSequenceClassification
from transformers import pipeline

class Sentiment_Analysis_Model():

    def __init__(self) -> None:
        self.finbert = BertForSequenceClassification.from_pretrained('yiyanghkust/finbert-tone',num_labels=3)
        self.tokenizer = BertTokenizer.from_pretrained('yiyanghkust/finbert-tone')
        self.nlp = pipeline("sentiment-analysis", model=self.finbert, tokenizer=self.tokenizer)


    def getAnalysis(self,sentences):
        self.result = self.nlp(sentences)
        return self.result
    
