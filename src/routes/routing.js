const express = require('express');
const routing = express.Router();
const setupDB = require('../utilities/setupDB');
const connection = require('../utilities/connection');

routing.post('/login', (req, res, next) => {
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

routing.get('/fetchDefects', (req, res, next) => {
  connection
    .getDefectsCollection()
    .then((defects) => {
      defects.find({}, { _id: 0, __v: 0 }).then((data) => {
        res.status(200).send(data);
      });
    })
    .catch((err) => next(err));
});

routing.get('/setup', (req, res, next) => {
  setupDB()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => next(err));
});
module.exports = routing;
