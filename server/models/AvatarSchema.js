const mongoose = require('mongoose')
const validator = require('validator')

const AvatarSchema = new mongoose.Schema({
  //   name: {
  //     type: String,
  //     minLength: 3,
  //   },
  //   email: {
  //     type: String,
  //     unique: [true, 'this email is already register'],
  //     required: true,
  //     validate: (value) => {
  //       if (!validator.isEmail(value)) {
  //         throw new Error('invalid email')
  //       }
  //     },
  //   },
  //   number: {
  //     type: Number,
  //     required: true,
  //   },
  //   address: {
  //     type: String,
  //     required: true,
  //   },
  avatar: {
    // data: Buffer,
    // contentType: String,
    type: String,
  },
})

const Avatar = mongoose.model('Avatar', AvatarSchema)

module.exports = Avatar
