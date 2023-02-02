const express = require('express');
const mongoose = require('mongoose');
const ErrorHandler = require('../utils/ErrorHandler');
const sendMail = require('../utils/SendMail.js');
const crypto = require('crypto');

const router = express.Router();
const User = mongoose.model('UserAndroid');

router.post('/registration', async (req, res) => {
  const {name, email, password} = req.body;
  try {
    const user = User({
      name,
      email,
      password,
      avatar: {
        public_id: 'http://localhost:3002',
        url: 'http://localhost:3002',
      },
    });
    const token = user.jwtTokenGenerator();
    // console.log('token', token);
    user.save(),
      res.status(201).json({
        success: true,
        token,
      });
    // sendJWTToken(user, 200, res)
  } catch (error) {}
});

router.post('/userLogin', async (req, res, next) => {
  const {email, password} = req.body;
  //   res.send('kfhln');
  if (!email || !password) {
    return next(new ErrorHandler('please enter your email & password', 400));
  }

  const user = await User.findOne({email}).select('+password');

  if (!user) {
    return next(new ErrorHandler('please enter your email & password', 401));
    // res.send('user not here');
  }

  const isPasswordMatch = await user.comparePassword(password);

  console.log(isPasswordMatch);
  if (!isPasswordMatch) {
    return next(new ErrorHandler('please enter your email & password', 401));
    // res.send('user not here');
  }
  const token = user.jwtTokenGenerator();
  //   console.log('token', token);
  user.save(),
    res.status(201).cookie('token', token).json({
      success: true,
      token,
    });

  //   return sendJWTToken(user, 201, res);
});

router.get('/logout', (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: 'user successfully logout',
  });
});

// router.post('/forgot/Password', async (req, res, next) => {
//   const user = await User.findOne({email: req.body.email});
//   if (!user) {
//     return next(new ErrorHandler('user not found with this email', 404));
//   }
//   const resetToken = user.getResetToken();
//   await user.save({
//     validateBeforeSave: false,
//   });
//   const resetPasswordUrl = `${req.protocol}://${req.get(
//     'host',
//   )}/reset/password${resetToken}`;
//   const message = `your reset password successfully \n\n ${resetPasswordUrl}`;
//   try {
//     await sendMail({
//       email: user.email,
//       subject: 'Ecommerce password recovery',
//       message,
//     });

//     res.status(200).json({
//       success: true,
//       message: `email send to ${user.email} successfully `,
//     });
//   } catch (error) {
//     (user.resetPasswordToken = undefined),
//       (user.resetPasswordTime = undefined),
//       await user.save({
//         validateBeforeSave: false,
//       });

//     return next(new ErrorHandler(error.message));
//   }
// });

// router.put('/reset/Password', async (req, res, next) => {
//   const resetPasswordToken = crypto
//     .createHash('sha256')
//     .update(req.params.token)
//     .digest('hex');

//   const user = await User.findOne({
//     resetPasswordToken,
//     resetPasswordTime: {$gt: Date.now()},
//   });

//   if (!user) {
//     return next(
//       new ErrorHandler(
//         'Reset password url is invalid or has been expired',
//         400,
//       ),
//     );
//   }

//   if (req.body.password !== req.body.confirmPassword) {
//     return next(
//       new ErrorHandler('Password is not matched with the new password', 400),
//     );
//   }

//   user.password = req.body.password;

//   user.resetPasswordToken = undefined;
//   user.resetPasswordTime = undefined;

//   await user.save();

//   sendToken(user, 200, res);
// });
// router.post('/signupAndroid', async (req, res) => {
//   const {email, password, cPassword} = req.body;
//   console.log(req.body);
//   if (!email || !password || !cPassword)
//     // return res.status(422).json({message: 'plz fill all field'});
//     res.status(422).send('plz fill all field');
//   try {
//     const existUser = await User.findOne({email: email});

//     if (existUser)
//       return res.status(422).json({message: 'this email is already exist'});

//     if (password !== cPassword) {
//       // .json({message: 'password & confirm password must be same'});
//       res.status(422).send('password & confirm password must be same');
//     } else {
//       const user = await new User({email, password, cPassword});
//       user.save();
//       return res.status(201).json({message: 'user register successfully'});
//     }
//   } catch (error) {
//     // res.status(422).json({error: 'invalid registration'});
//     res.status(422).send('invalid registration');
//   }
// });

// router.post('/signInAndroid', async (req, res) => {
//   const {email, password} = req.body;
//   if (!email || !password) {
//     res.status(422).send('please provide correct password and email');
//   }

//   const user = await User.findOne({email: email});

//   if (user) {
//     const isMatch = await bcrypt.compare(password, user.password);
//     const userToken = await user.generateAuthToken();
//     // const userToken = jwt.sign({token: 'token'}, 'tokens');
//     // let data = new Object();
//     // data.id = userToken.id;
//     // data.email = userToken.email;
//     // data.token = userToken.token;
//     // res.status(201).send(data);
//     // res.cookie('jwtToken', userToken, {
//     //   expires: new Date(Date.now + 25892000000),
//     //   httpOnly: true,
//     // });
//     console.log(userToken);

//     if (!isMatch) {
//       res.status(422).send('please provide correct password and email');
//     } else {
//       //   res.json({message: 'user login successfully'});
//       res.send('user login successfully ');
//     }
//   } else {
//     res.status(422).send('please provide correct password and email');
//   }
// });

module.exports = router;

//what is redux
