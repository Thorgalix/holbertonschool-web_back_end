const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
const databaseFile = process.argv[2];

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    countStudents(databaseFile)
      .then((report) => {
        res.end(`This is the list of our students\n${report}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
    return;
  }

  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
