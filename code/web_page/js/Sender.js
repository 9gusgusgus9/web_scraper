URL_API_SERVER = "http://127.0.0.1:8000";

class Sender{

sendPostRequest(paragraph) {
      return new Promise((resolve, reject) => {
        const data = JSON.stringify(
          {"text": 
            [
              paragraph
            ]
          }
          ); 
        $.ajax({
          url: URL_API_SERVER,
          async: false,
          type: 'POST',
          data: data,
          contentType: 'application/json',
          success: function(response) {
            resolve(response);
          },
          error: function(xhr, status, error) {
            reject(error);
          }
        });
      });
    }

}
var module = module || {};
module.exports = Sender;
