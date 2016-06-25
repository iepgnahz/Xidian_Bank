'use strict'
let assert = require('assert');
let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017/xidian_bank';

function connect(callback) {
  MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    callback(db);
  });
}

exports.connect = connect;
