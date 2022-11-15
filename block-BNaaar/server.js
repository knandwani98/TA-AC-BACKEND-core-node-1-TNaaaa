var http = require('http');

var server = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.end('Welcome to homepage');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>this is all about NodeJS</h2>');
  } else if (req.method === 'POST' && req.url === '/about') {
    const jsonData = {
      message: 'this is a post request',
    };
    res.end(JSON.stringify(jsonData));
  } else {
    res.writeHeader(404, { 'Content-Type': 'text/html' });
    res.end('Page Not Found');
  }
}

server.listen(5000, () => {
  console.log('Listening to port 5000...');
});
