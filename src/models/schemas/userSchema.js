const { Schema } = require('mongoose');

const usersSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: 'users' }
);

module.exports = usersSchema;
