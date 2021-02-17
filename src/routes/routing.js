const express = require('express');
const routing = express.Router();
const setupDB = require('../utilities/setupDB');
const connection = require('../utilities/connection');

routing.post('/login', function (req, res, next) {
  const creds = req.body;
  connection.getUsersCollection().then((users) => {
    users
      .findOne({ username: creds.username, password: creds.password })
      .then((user) => {
        if (user) {
          res.status(201).send('Authenticated');
        } else {
          res.status(500).send('Invalid Credentials');
        }
      })
      .catch((err) => next(err));
  });
});
routing.get('/setup', (req, res, next) => {
  setupDB()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => next(err));
});
module.exports = routing;
