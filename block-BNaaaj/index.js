console.log('Welcome to node JS');

var os = require('os');
const freeMem = os.freemem();
const noOfCpus = os.cpus().length;
const upTime = os.uptime();
const vZ = os.version();

console.log(noOfCpus);
console.log(freeMem);
console.log(upTime);
console.log(vZ);

const fs = require('fs');
fs.readFile('./test.md', (rej, res) => {
  console.log(rej, res);
});

fs.unlink('./test.md', (err) => {
  if (err) throw err;
  console.log('file was deleted');
});

// Q. Create 2 files
// 1. area.js
//   2. app.js
//   3. In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
//   4. In app.js, require functions from area.js and execute the areas of given figures and console.log the results.

// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
// - create a fixed length buffer of 12.
// - write code to convert buffer back to string.

// Q. Write code example to demonstrate blocking and non-blocking code.

// #### http protocol

// Q. In server.js
// 1. require parse method from url core node module.
// 2. parse `https://airindia.com/fares/calculate?from=delhi&to=detroit`and store parsed value in varaible named parsedUrl.
// 3. console query string from parsed url
// 4. console pathname
// 5. console protocol
// 6. use parse method from url module to parse query string as well.
