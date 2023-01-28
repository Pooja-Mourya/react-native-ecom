const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const router = express.Router();
const User = mongoose.model('UserAndroid');

router.post('/signupAndroid', async (req, res) => {
  const {email, password, cPassword} = req.body;
  console.log(req.body);
  if (!email || !password || !cPassword)
    return res.status(422).json({message: 'plz fill all field'});
  try {
    const existUser = await User.findOne({email: email});

    if (existUser)
      return res.status(422).json({message: 'this email is already exist'});

    if (password !== cPassword) {
      return res
        .status(422)
        .json({message: 'password & confirm password must be same'});
    } else {
      const user = await new User({email, password, cPassword});
      user.save();
      return res.status(201).json({message: 'user register successfully'});
    }
  } catch (error) {
    res.status(422).json({error: 'invalid registration'});
  }
});

router.post('/signInAndroid', async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    res.status(422).send('please provide correct password and email');
  }

  const user = await User.findOne({email: email});

  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    const userToken = await user.generateAuthToken();

    // res.cookie('jwtToken', userToken, {
    //   expires: new Date(Date.now + 25892000000),
    //   httpOnly: true,
    // });
    console.log(userToken);
    if (!isMatch) {
      res.status(422).send('please provide correct password and email');
    } else {
      res.json({message: 'user login successfully'});
    }
  } else {
    res.status(422).send('please provide correct password and email');
  }
});

module.exports = router;
