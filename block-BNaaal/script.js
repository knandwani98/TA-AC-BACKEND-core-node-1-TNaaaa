// writeCode

const http = require('http');

const server = http.createServer(handleServer);

function handleServer(res, rej) {
  res.end('Welcome');
}

server.listen(4000, () => {
  console.log('Server listening to 4000');
});

// 1. create a basic node server using http module's createServer method and add a listener on port 4000.
// 2. start the server using script writer i.e. `node script_file.js`
// 3. open the browser and request your server on url `http://localhost:4000`.
// 4. notice the output in browser and terminal.
