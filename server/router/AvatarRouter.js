const express = require('express')
const Avatar = require('../models/AvatarSchema')
const multer = require('multer')
const uploadMulter = multer({ dest: 'uploads/' })

const router = express.Router()

router.post('/upload', uploadMulter.single('avatar'), async (req, res) => {
  //   res.send('loading fghh')
  const upload = new Avatar(req.file)
  upload
    .save()
    .then(() => {
      res.send(upload)
    })
    .catch((e) => {
      console.log(e)
    })
})

// const uploadAvatar = {
//   Storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + '.png')
//     },
//   }),
// }

// router.post('/avatarUpload', uploadAvatar, (req, res) => {
//   res.send('image upload Successfully')
// })
module.exports = router
