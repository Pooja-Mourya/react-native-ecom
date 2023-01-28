const mongoose = require('mongoose')
const validator = require('validator')

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
  },
  email: {
    type: String,
    unique: [true, 'this email is already register'],
    required: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error('invalid email')
      }
    },
  },
  number: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    // requited: true,
  },
})

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student
