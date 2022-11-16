// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   console.log(req, res);
// }

// server.listen(5000, () => {
//   console.log('Listening to sever 5000');
// });

// --------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   res.setHeader('Content-Type', 'plain/text');
//   res.end('My first sever in NodeJS');
// }

// server.listen(5100, () => {
//   console.log('Listening to sever 5100');
// });

// --------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   console.log(req.headers);
//   res.end(req.session);
// }

// server.listen(5555, () => {
//   console.log('Listening to sever 5555');
// });

// --------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   console.log(req.url, req.method);
//   res.end('Welcome');
// }

// server.listen(5566, () => {
//   console.log('Listening to sever 5566');
// });

// ------------------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   // res.setHeader('Content-Type', 'application/json');
//   res.end(req.headers);
// }

// server.listen(7000, () => {
//   console.log('Listening to sever 7000');
// });

// -----------------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   res.statusCode = '202';
//   res.end();
// }

// server.listen(3333, () => {
//   console.log('Listening to sever 3333');
// });

// --------------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h3>Welcome to altcampus</h3>');
// }

// server.listen(8000, () => {
//   console.log('Listening to sever 8000');
// });

// --------------------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end('<h3>Welcome to altcampus</h3>');
// }

// server.listen(8000, () => {
//   console.log('Listening to sever 8000');
// });

// ------------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(`{success: true, message: 'Welcome to Nodejs'}`);
// }

// server.listen(8888, () => {
//   console.log('Listening to sever 8888');
// });

// -------------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   if (req.method === 'POST' && req.url === '/index') {
//     console.log(req.method);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`<h2>posted for first time</h2>`);
//   }
// }

// server.listen(5050, () => {
//   console.log('Listening to sever 5050');
// });

// ---------------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`Welcome`);
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`<h2>posted for first time</h2>`);
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     var err = console.error('Invalid URL');
//     res.end(err);
//   }
// }

// server.listen(2345, () => {
//   console.log('Listening to sever 2345');
// });

// --------------------------

// var http = require('http');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   if (req.method === 'GET' && req.url === '/users') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`<input type="text" name="" placeholder="Name" value="">
//         <input type="mail" name="" placeholder="Email" value="">`);
//   } else if (req.method === 'POST' && req.url === '/users') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`<h2>posted for first time</h2>`);
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     var err = console.error('Invalid URL');
//     res.end(err);
//   }
// }

// server.listen(2345, () => {
//   console.log('Listening to sever 2345');
// });

// ------------------------------------

// var http = require('http');
// var url = require('url');

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   var parsedURL = url.parse(req.url);
//   var pathName = parsedURL.pathname;

//   if (req.method === 'GET' && pathName === '/users') {
//     res.setHeader('Content-Type', 'application/json');
//     var mail = parsedURL.query.toString().split('=');
//     res.end(`{${mail[0]}: ${mail[1]}}`);
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     var err = console.error('Invalid URL');
//     res.end(err);
//   }
// }

// server.listen(2345, () => {
//   console.log('Listening to sever 2345');
// });
