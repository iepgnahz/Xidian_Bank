'use strict'
let cors = require('cors');
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let api = require('./api');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

app.get('/login', (req, res) => {
  res.sendfile('./public/html/login.html');
});

app.get('/main', (req, res) => {
  res.sendfile('./public/html/main.html');
});

app.get('/withdraw', (req, res) => {
  res.sendfile('./public/html/withdraw.html');
});

app.get('/deposit', (req, res) => {
  res.sendfile('./public/html/deposit.html');
});

app.get('/record', (req, res) => {
  res.sendfile('./public/html/record.html');
});

app.get('/balance', (req, res) => {
  res.sendfile('./public/html/balance.html');
});

app.get('/transfer', (req, res) => {
  res.sendfile('./public/html/transfer.html');
});

app.listen(8080,  () => {
  console.log('App listening on port 8080!');
});
