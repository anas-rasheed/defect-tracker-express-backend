const express = require('express');
const routing = express.Router();
const Users = require('../models/userSchema');

routing.post('/login', function (req, res, next) {
  var creds = req.body;
  Users.find(function (err, doc) {
    for (let i = 0; i < doc.length; i++) {
      if (
        doc[i].username == creds.username &&
        doc[i].password == creds.password
      ) {
        return res.status(201).send({
          message: 'Login Successful',
        });
      } else {
        return res.status(500).send({
          message: 'Credential Mismatch',
        });
      }
    }
  });
  //   next();
});

module.exports = routing;
