'use strict'
let database = require('./dbconnection');

let user1 = {
  userId: "USER-000001",
  name: "张培",
  idCardNumber: "1234567890",
  bankCardNumber: "1234567890",
  phoneNumber: "1234567890",
  birthday: "1995-2-1",
  gender: "女",
  balance: "2000",
  location: "上海",
  password: "123456"
}

let user2 = {
  userId: "USER-000002",
  name: "薛地",
  idCardNumber: "0987654321",
  bankCardNumber: "0987654321",
  phoneNumber: "0987654321",
  birthday: "1994-2-2",
  gender: "女",
  balance: "1000",
  location: "西安",
  password: "123456"
}

function addUser(user) {
  database.connect((db) => {
    db.collection('user').insertOne(user, (err) => {
      db.close();
      if (err === null) {
        console.log("添加成功！");
      } else {
        console.log("添加失败！ERROR:" + err);
      }
    });
  });
}

addUser(user1);
addUser(user2);
