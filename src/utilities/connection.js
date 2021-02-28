const mongoose = require('mongoose');
const usersSchema = require('../models/schemas/userSchema');
const defectsSchema = require('../models/schemas/defectsSchema');
const dbURI = 'mongodb://localhost/defect-tracker';

const connection = {};

connection.dropDatabase = () => {
  return mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((database) => {
      return database.connection.dropDatabase();
    });
};
connection.getUsersCollection = () => {
  return mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((database) => {
      return database.model('Users', usersSchema);
    })
    .catch(() => {
      let err = new Error('DB connection failed');
      err.status(500);
      throw err;
    });
};
connection.getDefectsCollection = () => {
  return mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((database) => {
      return database.model('Defects', defectsSchema);
    })
    .catch(() => {
      let err = new Error('DB connection failed');
      err.status(500);
      throw err;
    });
};

module.exports = connection;
