var express = require('express');
var fs = require('fs');

var buf = new Buffer(256);

fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
else
buf = data;
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(buf.toString('utf-8', 0, buf.length));
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});