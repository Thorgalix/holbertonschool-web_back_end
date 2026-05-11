const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

console.log('Welcome to Holberton School, what is your name?');

let isFirstLine = true;

rl.on('line', (line) => {
  if (isFirstLine) {
    console.log(`Your name is: ${line}`);
    isFirstLine = false;
  }
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
