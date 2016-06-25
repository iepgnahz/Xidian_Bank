'use strict'
let express = require('express');
let router = express.Router();

let userdb = require('./database/userdb');

router.post('/user', (req, res, next) => {
  console.log(req.headers.host + req.baseUrl + req.route.path + " " + req.method);
  let userInfo = req.body;
  userdb.getUser(userInfo, (user ,err) => {
    err === null ? res.send({ user: user }) : res.send({ error: err });
  });
});

router.post('/login', (req, res, next) => {
  console.log(req.headers.host + req.baseUrl + req.route.path + " " + req.method);
  let login = req.body;
  userdb.userLogin(login, (user ,err) => {
    err === null ? res.send({ user: user }) : res.send({ error: err });
  });
});

router.post('/withdraw', (req, res, next) => {
  console.log(req.headers.host + req.baseUrl + req.route.path + " " + req.method);
  let record = req.body;
  userdb.withdraw(record, (err) => {
    err === null ? res.send({ msg: "取款成功，请拿好钞票！" }) : res.send({ error: err });
  })
});

router.post('/deposit', (req, res, next) => {
  console.log(req.headers.host + req.baseUrl + req.route.path + " " + req.method);
  let record = req.body;
  userdb.deposit(record, (err) => {
    err === null ? res.send({ msg: "存款成功！" }) : res.send({ error: err });
  })
});

router.post('/transfer', (req, res, next) => {
  console.log(req.headers.host + req.baseUrl + req.route.path + " " + req.method);
  let record = req.body;
  userdb.transfer(record, (err) => {
    err === null ? res.send({ msg: "转账成功！" }) : res.send({ error: err });
  })
});

module.exports = router;
