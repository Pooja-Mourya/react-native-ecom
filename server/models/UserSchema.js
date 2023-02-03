const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const Avatar = mongoose.model('user', UserSchema);

module.exports = Avatar;
