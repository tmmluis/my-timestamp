'use strict';

exports.getTimestamp = (input) => {
  input = input.replace("/", "");
  input = decodeURI(input);

  var locale = "en-US";
  var options = {month: 'long', day: 'numeric', year: 'numeric'};

  // is the input an integer?
  if( !isNaN(input) ) {
    var unixTime = Number.parseInt(input, 10);
    var date = new Date(timestamp.unix * 1000);
    var naturalTime = date.toLocaleDateString(locale, options);

    return JSON.stringify({
      unix: unixTime,
      natural: naturalTime
    });
  }

  var date = new Date(input);
  // is the input a natural language date?
  if( !isNaN(date) ) {
    return JSON.stringify({
      unix: Date.parse(date) / 1000,
      natural: date.toLocaleDateString(locale, options)
    });
  }

  return JSON.stringify({
    unix: null,
    natural: null
  });
}
