var http = require('http');
var server = http.createServer(handleServer);

function handleServer(req, res) {
  res.writeHead(201, { 'Content-Type': 'text/html' });
  res.end('<h1>Welcome</h1>');
}

server.listen(4444, () => {
  console.log('Listening to server 4444');
});
