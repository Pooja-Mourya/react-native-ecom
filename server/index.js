const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3002;
// const cookieParser = require('cookieParser')

const UserRouter = require('./router/UserRouter');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(UserRouter);

mongoose.set('strictQuery', false);
mongoose.connect(
  'mongodb+srv://pooja:pooja123@cluster0.qccjnax.mongodb.net/?retryWrites=true&w=majority',
);

mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});

mongoose.connection.on('error', e => {
  console.log('mongoDb connection error', e);
});

// app.get('/hello', (req, res) => {
//   res.send('hello')
// })

app.listen(PORT, () => {
  console.log('server is running');
});
