const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtKey = 'mhfagaoigufdsghaehythtg';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    // required: true,
    unique: [true, 'this email is already register'],
  },
  password: {
    type: String,
    // required: true,
  },
  cPassword: {
    type: String,
    // required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

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

UserSchema.pre('save', function (next) {
  console.log('bycript password hashing');
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 12);
    this.cPassword = bcrypt.hashSync(this.cPassword, 12);
  }
  next();
});

UserSchema.methods.generateAuthToken = async function () {
  try {
    const getToken = jwt.sign({_id: this._id}, jwtKey);
    this.tokens = this.tokens.concat({token: getToken});
    await this.save();
    return getToken;
  } catch (error) {
    console.log(error);
  }
};
mongoose.model('UserAndroid', UserSchema);
