const express = require('express')
const multer = require('multer')
const Student = require('../models/StudentSchema')

// const as = require('./uploads')
const router = express.Router()

const uploadAvatar = {
  Storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      //    cb(null, file.fieldname + '-' + Date.now() + '.png')
      cd(null, file.file.originalname)
    },
  }),
}

router.post('/student', (req, res) => {
  console.log(req.body)
  const students = new Student(req.body)
  students
    .save()
    .then(() => {
      res.send(students)
    })
    .catch((e) => {
      console.log(e)
    })
})

router.get('/student', async (req, res) => {
  //   console.log(req.body)
  try {
    const students = await Student.find()
    res.send(students)
  } catch (error) {
    console.log(error)
  }
})

router.get('/student/:id', async (req, res) => {
  try {
    const _id = req.params._id
    console.log('_id', _id)
    const student = await Student.findById(_id)
    // console.log('student', student)
    if (!student) {
      return res.status(500).send()
    } else {
      res.send(student)
    }
  } catch (error) {
    console.log(error)
  }
})

router.patch('/student/:id', async (req, res) => {
  try {
    const _id = req.params.id
    const student = await Student.findByIdAndUpdate(_id, req.body)
    if (!student) {
      return res.status(404).send(student)
    } else {
      res.send(student)
    }
  } catch (error) {
    console.log(error)
  }
})
router.delete('/student/:id', async (req, res) => {
  try {
    const student = await Student.findOneAndDelete()
    // console.log('student', student)
    if (!student) {
      return res.status(500).send()
    } else {
      res.send(student)
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
