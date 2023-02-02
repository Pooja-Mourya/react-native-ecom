const sendJWTToken = (user, statusCode, res) => {
  const token = user.jwtTokenGenerator();
  console.log('token', token);
  const options = {
    expires: new Date(Date.now('6d' + 24 * 60 * 60 * 1000)),
    httpOnly: true,
  };

  res.status(statusCode).cookies('token', token, options).json({
    success: true,
    user,
    token,
  });
};
