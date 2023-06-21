URL_API_SERVER = "http://127.0.0.1:8000";

class Sender{

    async sendPost(paragraph){

        //var result = await this.makePostRequest(paragraph);
        //console.log("the result is "+ result);

        var settings = {
          "asynch": false,
          "url": URL_API_SERVER,
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Content-Type": "application/json"
          },
          "data": JSON.stringify({
            "text": [
              paragraph
            ]
          }),
        };
        
        $.ajax(settings).done(function (response) {
          response.forEach(element => {
            return JSON.stringify(element);
          });
          
        });
      
    }

   

}

