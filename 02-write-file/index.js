const fs = require('fs');
const readline = require('readline');
const path = require('node:path');
const filePath = path.join(__dirname, 'text.txt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileStream = fs.createWriteStream(filePath, 'utf-8');

console.log('Hi!');

rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('Bye!');
    process.exit();
  }

  fileStream.write(input + '\n');
});

process.on('SIGINT', () => {
  console.log('Bye!');
  process.exit();
});
