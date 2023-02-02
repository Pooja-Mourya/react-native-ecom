const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const jwtKey = 'mhfagaoigufdsghaehythtg';
const crypto = require('crypto');
const validator = require('validator');

// const UserSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     // required: true,
//     unique: [true, 'this email is already register'],
//   },
//   password: {
//     type: String,
//     // required: true,
//   },
//   cPassword: {
//     type: String,
//     // required: true,
//   },
//   tokens: [
//     {
//       token: {
//         type: String,
//         require: true,
//       },
//     },
//   ],
// });

// UserSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     console.log('hash');
//     // const password = this.password.toString();
//     // const cPassword = this.cPassword.toString();
//     this.password == (await bcrypt.hashSync(this.password, 12));
//     this.cPassword == (await bcrypt.hashSync(this.cPassword, 12));
//   }
//   next();
// });

// UserSchema.pre('save', function (next) {
//   console.log('bycript password hashing');
//   if (this.isModified('password')) {
//     this.password = bcrypt.hashSync(this.password, 12);
//     this.cPassword = bcrypt.hashSync(this.cPassword, 12);
//   }
//   next();
// });

// UserSchema.methods.generateAuthToken = async function () {
//   try {
//     const getToken = jwt.sign({_id: this._id}, jwtKey);
//     this.tokens = this.tokens.concat({token: getToken});
//     await this.save();
//     return getToken;
//   } catch (error) {
//     console.log(error);
//   }
// };

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please your Name'],
    minlength: [3, 'Please enter a name at least 3 characters'],
    maxlength: [15, 'Name can not big than 15 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    validate: [validator.isEmail, 'Please enter a valid email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password!'],
    minlength: [8, 'Password should be greater than 8 characters'],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.jwtTokenGenerator = function () {
  //   return jwt.sign({id: this._id}, jwtKey);
  const getToken = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
  return getToken;
};

UserSchema.methods.comparePassword = async function (enteredPassword) {
  //   console.log('first', enteredPassword);
  //   console.log(this.password);
  return await bcrypt.compare(enteredPassword.toString(), this.password);
};

UserSchema.methods.getResetToken = async function () {
  const resetToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.resetpasswordTime = Date.now() + 15 * 60 * 100;
  return resetToken;
};

mongoose.model('UserAndroid', UserSchema);
