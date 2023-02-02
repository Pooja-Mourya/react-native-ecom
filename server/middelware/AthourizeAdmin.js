const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/ErrorHandler');
// const User = require('../models/UserSchema');
const mongoose = require('mongoose');
// const jwtKey = 'mhfagaoigufdsghaehythtg';

const AuthorizedAdmin = (...roles) => {
  return async (req, res, next) => {
    const User = mongoose.model('UserAndroid');
    const {token} = req.cookies;
    const decodedData = jwt.verify(token, process.env.SECRET_KEY);

    req.user = await User.findById(decodedData._id);
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`${req.user.role} can not access this resources`),
      );
    }
    next();
  };
};

module.exports = AuthorizedAdmin;
