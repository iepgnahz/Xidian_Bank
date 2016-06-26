'use strict'
let database = require('./dbconnection');

function getUser(userInfo, callback) {
  database.connect((db) => {
    db.collection('user').findOne({ bankCardNumber: userInfo.bankCardNumber }, (err, doc) => {
      let user = docToUser(doc);
      callback(user, err);
      db.close();
    });
  });
}

function userLogin(login, callback) {
  database.connect((db) => {
    db.collection('user').findOne({ bankCardNumber: login.bankCardNumber }, (err, doc) => {
      if (doc !== null && doc.password === login.password) {
        let user = docToUser(doc);
        callback(user, err);
      } else {
        callback(null, "密码错误！");
      }
      db.close();
    });
  });
}

function withdraw(record, callback) {
  database.connect((db) => {
    db.collection('user').findOne({ bankCardNumber: record.bankCardNumber }, (err, doc) => {
      if (doc !== null) {
        if (parseFloat(record.amount) <= 0) {
          callback("请输入正确的数额！");
        } else if (parseFloat(record.amount) > parseFloat(doc.balance)) {
          callback("余额不足！");
        } else {
          doc.balance = "" + (parseFloat(doc.balance) - parseFloat(record.amount));
          db.collection('user').update({ bankCardNumber: record.bankCardNumber }, docToUser(doc));
          callback(null);
        }
      } else {
        callback("取款失败！");
      }
      db.close();
    });
  });
}

function deposit(record, callback) {
  database.connect((db) => {
    db.collection('user').findOne({ bankCardNumber: record.bankCardNumber }, (err, doc) => {
      if (doc !== null) {
        if (parseFloat(record.amount) <= 0) {
          callback("请输入正确的数额！");
        } else {
          doc.balance = "" + (parseFloat(doc.balance) + parseFloat(record.amount));
          db.collection('user').update({ bankCardNumber: record.bankCardNumber }, docToUser(doc));
          callback(null);
        }
      } else {
        callback("存款失败！");
      }
      db.close();
    });
  });
}

function transfer(record, callback) {
  database.connect((db) => {
    db.collection('user').findOne({ bankCardNumber: record.from }, (err, doc) => {
      if (doc !== null) {
        if (parseFloat(record.amount) <= 0) {
          callback("请输入正确的数额！");
        } else {
          if (parseFloat(doc.balance) < parseFloat(record.amount)) {
            callback("余额不足！");
            db.close();
          } else {
            doc.balance = "" + (parseFloat(doc.balance) - parseFloat(record.amount));
            db.collection('user').update({ bankCardNumber: record.from }, docToUser(doc));
            db.collection('user').findOne({ bankCardNumber: record.to }, (err, doc2) => {
              if (doc2 !== null) {
                doc2.balance = "" + (parseFloat(doc2.balance) + parseFloat(record.amount));
                db.collection('user').update({ bankCardNumber: record.to }, docToUser(doc2));
                callback(null);
              } else {
                callback("转账失败，请确认转账账户存在！");
              }
              db.close();
            });
          }
        }
      } else {
        callback("转账失败！");
      }
    });
  });
}

function docToUser(doc) {
  return {
    userId: doc.userId,
    name: doc.name,
    idCardNumber: doc.idCardNumber,
    bankCardNumber: doc.bankCardNumber,
    phoneNumber: doc.phoneNumber,
    birthday: doc.birthday,
    gender: doc.gender,
    balance: doc.balance,
    location: doc.location,
    password: doc.password
  }
}

exports.userLogin = userLogin;
exports.withdraw = withdraw;
exports.deposit = deposit;
exports.transfer = transfer;
exports.getUser = getUser;
