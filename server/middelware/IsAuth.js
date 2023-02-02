const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/ErrorHandler');
// const User = require('../models/UserSchema');
const mongoose = require('mongoose');
// const jwtKey = 'mhfagaoigufdsghaehythtg';

const User = mongoose.model('UserAndroid');

const IsAuth = async (req, res, next) => {
  const {token} = req.cookies;
  if (!token) {
    return next(new ErrorHandler('please login for access details', 401));
  }
  //   console.log('user', User);
  const decodedData = jwt.verify(token, process.env.SECRET_KEY);
  //   console.log('decodedData', decodedData);

  req.user = await User.findById(decodedData._id);
  //   console.log('user', myUser);
  // = await User.findById(decodedData._id);
  next();
};

module.exports = IsAuth;
