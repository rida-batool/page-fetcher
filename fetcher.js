const request = require('request');
const fs = require('fs');

let args = process.argv.slice(2);
console.log(args);

request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
    }
    console.log('File writter successfully');

    fs.stat(args[1], (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ./index.html`);
    });

  });

});