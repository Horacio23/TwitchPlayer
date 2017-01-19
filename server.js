'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
console.log("request received")
  res.send('Que bola locol');
});


app.post('/play', function (req, res) {
console.log("Post received")
  res.send('Que bola locol');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);