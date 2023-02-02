const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3002;
// const cookieParser = require('cookieParser')

const RequireToken = require('./middelware/RequireToken');

const AuthRouter = require('./router/AuthRouter');

const StudentRoute = require('./router/StudentRoute');

const AvatarRouter = require('./router/AvatarRouter');

const Product = require('./router/ProductRoute');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(AuthRouter);
app.use(StudentRoute);
app.use(AvatarRouter);
app.use(Product);

mongoose.connect(
  'mongodb+srv://pooja:pooja123@cluster0.qccjnax.mongodb.net/?retryWrites=true&w=majority',
);

mongoose.set('strictQuery', false);

mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});

mongoose.connection.on('error', e => {
  console.log('mongoDb connection error', e);
});

app.get('/token', RequireToken, (req, res) => {
  res.send('token require ' + req.user.email);
});

// app.get('/hello', (req, res) => {
//   res.send('hello')
// })

app.listen(PORT, () => {
  console.log('server is running');
});
