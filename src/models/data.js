var mongoose = require('mongoose');
var Users = require('../models/userSchema');
var Defects = require('../models/defectsSchema');

mongoose.connect('mongodb://localhost/defect-tracker', function () {
  console.log('db connected');
  mongoose.connection.db.dropDatabase();

  var usersData = [
    {
      username: 'admin',
      password: 'admin',
    },
    {
      username: 'Mack',
      password: 'Mack',
    },
  ];

  usersData.forEach(function (user) {
    new Users(user).save();
  });

  var defectsData = [
    {
      defectId: 'H100001',
      defectSummary: 'High Priority Defect',
      createdBy: 'admin',
      createdOn: '24-02-2019',
      priority: 'High',
      status: 'In Progress',
      assignedTo: 'Mack',
    },
  ];

  defectsData.forEach(function (defect) {
    new Defects(defect).save();
  });

  console.log('data stored successfully');
});
