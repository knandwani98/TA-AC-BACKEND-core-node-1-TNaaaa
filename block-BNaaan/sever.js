var http = require('http');

var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.headers, '- header');
  console.log(req.method, '- method');
  console.log(req.url, '- url');
  res.end('Welcome');
}

server.listen(3000, () => {
  console.log('Listening to server 3000...');
});
