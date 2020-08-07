'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/hello/:folderId', (req, res) => {

setTimeout(() => {
  console.log('timeout beyond time');
  console.log(`params: ${req.params}`);
  res.send(`Hello World with folder id: ${req.params.folderId}`);
}, 60000);

});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
