const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(cookieParser());

mongoose.set('strictQuery', false);
mongoose.connect(
  'mongodb+srv://pujamourya575:Bhopal***123456@cluster0.sqlsueq.mongodb.net/?retryWrites=true&w=majority',
);

mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});

mongoose.connection.on('error', e => {
  console.log('mongoDb connection error', e);
});

app.listen(PORT, () => {
  console.log('server is running');
});
