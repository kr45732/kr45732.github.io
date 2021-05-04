const express = require('express');

const app = express();
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + "/views/projects.html");
});

app.listen(3000, () => {
  console.log('server started');
});
