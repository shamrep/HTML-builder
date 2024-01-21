const fs = require('fs');
const path = require('node:path');
const filePath = path.join(__dirname, 'text.txt');
const readableStream = fs.createReadStream(filePath, 'utf-8');

readableStream.on('data', (result) => {
  console.log(result);
});
