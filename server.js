'use strict';

var http = require('http');
var timestamp = require('./timestamp.js');

var server = http.createServer(function(request, response) {
  
  var url = request.url;
  console.log(url);
  var output = timestamp.getTimestamp(url);

  response.end(output);
});

server.listen(3000, function() {
  console.log("listening on port 3000...");
})
