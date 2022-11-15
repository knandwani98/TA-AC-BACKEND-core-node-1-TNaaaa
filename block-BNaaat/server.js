var http = require('http');
var fs = require('fs');
var server = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    fs.readFile('./node.html', (err, content) => {
      console.error(err);
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    });
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('listening to server 5555');
});
