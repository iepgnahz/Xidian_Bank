'use strict'
let cors = require('cors');
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080,  () => {
  console.log('App listening on port 8080!');
});
