const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + "/projects.html");
});

app.listen(3000, () => {
  console.log('server started');
});
