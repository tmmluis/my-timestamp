'use strict';

var express = require('express');
var app = express();

var timestamp = require('./timestamp.js');

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/:date', function (req, res) {
  var dateString = req.params.date;

  if (dateString != "favicon.ico") {
    res.send(timestamp.getTimestamp(dateString));
  }
});

app.listen(port, function () {
  console.log('listening on port ' + port + '!');
});
