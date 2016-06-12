'use strict';

var express = require('express');
var app = express();

var timestamp = require('./timestamp.js');

app.get('/:date', function (req, res) {
  var dateString = req.params.date;

  if (dateString != "favicon.ico") {
    res.send(timestamp.getTimestamp(dateString));
  }
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
