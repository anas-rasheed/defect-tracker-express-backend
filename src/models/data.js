var mongoose = require('mongoose');
var allUsers = require('../models/userSchema');

mongoose.connect('mongodb://localhost/defect-tracker', function () {
  console.log('db connected');
  mongoose.connection.db.dropDatabase();

  var users = [
    {
      username: 'admin',
      password: 'admin',
    },
  ];

  users.forEach(function (user) {
    new allUsers(user).save();
  });

  console.log('data stored successfully');
});
