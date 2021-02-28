const connection = require('./connection');
let data = require('../models/data');

module.exports = setupDB = () => {
  return connection.dropDatabase().then(() => {
    return connection.getUsersCollection().then((users) => {
      users.insertMany(data.usersData).then(() => {
        return connection.getDefectsCollection().then((defects) => {
          defects.insertMany(data.defectsData).then((data) => {
            if (data) {
              return 'Successfully Inserted';
            } else {
              throw new Error('Failed Miserably');
            }
          });
        });
      });
    });
  });
};
