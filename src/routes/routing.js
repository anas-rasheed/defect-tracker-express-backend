const express = require('express');
const routing = express.Router();
const setupDB = require('../utilities/setupDB');
const Users = require('../models/schemas/userSchema');

// routing.post('/login', function (req, res, next) {
//   const creds = req.body;
//   Users.findOne();
// });
routing.get('/setup', (req, res, next) => {
  setupDB()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => next(err));
});
module.exports = routing;
