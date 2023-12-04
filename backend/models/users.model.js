const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  bloodgroup: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema)

module.exports = User;