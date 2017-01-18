var http = require('http');
var sum = require('./app');

http.createServer(function(req, res){
  res.writeHead(200);

  res.write(sum + '\n');


  res.end();
}).listen(3000);
