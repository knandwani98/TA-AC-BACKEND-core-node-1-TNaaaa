var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handleServer);

function handleServer(req, res) {
  var parsedURL = url.parse(req.url);
  var pathName = parsedURL.pathname;
  if (req.method === 'GET' && pathName === '/') {
    res.setHeader('Contet-Type', 'text/html');
    fs.createReadStream('../../index.html').pipe(res);
  } else if (req.method === 'GET' && pathName === '/blog') {
    res.setHeader('Contet-Type', 'text/html');
    fs.createReadStream('../../blog.html').pipe(res);
  } else if (req.method === 'GET' && pathName === '/cases') {
    res.setHeader('Contet-Type', 'text/html');
    fs.createReadStream('../../cases.html').pipe(res);
  } else if (req.method === 'GET' && pathName === '/contact') {
    res.setHeader('Contet-Type', 'text/html');
    fs.createReadStream('../../contact.html').pipe(res);
  } else if (req.method === 'GET' && pathName === '/services') {
    res.setHeader('Contet-Type', 'text/html');
    fs.createReadStream('../../services.html').pipe(res);
  } else if (req.method === 'GET' && pathName === '/about') {
    res.setHeader('Contet-Type', 'text/html');
    fs.createReadStream('../../about.html').pipe(res);
  } else if (req.url.split('.').pop() === 'css') {
    res.setHeader('Content-Type', 'text/css');
    console.log(req.url);
    fs.readFile('../stylesheet' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content.toString());
    });
  } else if (req.method === 'GET' && pathName === '/images') {
    res.setHeader('Contet-Type', 'text/html');
    fs.readFile('../images', (err, content) => {
      console.log(err);
      res.setHeader('Contet-Type', 'text/jpeg');
      res.end(content);
    });
  } else {
    res.setHeader('Contet-Type', 'text/html');
    res.end(`<h1>Invalid Page</h1>`);
  }
}

server.listen(4000, () => {
  console.log('Listening to server 4000');
});
