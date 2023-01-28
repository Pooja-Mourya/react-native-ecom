const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/UserSchema')
// const { jwtKey } = require('../keys')

const jwtKey = 'shansprar'

module.exports = (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    res.status(401).send({ error: 'authorization error you have most login' })
  }

  const token = authorization.replace('token', '')
  jwt.verify(token, jwtKey, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'authorization error' })
    }
    const { userId } = payload
    const user = await User.findById(userId)
    req.User = user
    next()
  })
}
