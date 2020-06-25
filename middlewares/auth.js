const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const UnauthorisedError = require('../errors/unauthorised-err');

const auth = (req, res, next) => {
  if ((!req.cookies.jwt)) {
    throw new UnauthorisedError('Необходима авторизация');
  }

  let payload;

  try {
    payload = jwt.verify(req.cookies.jwt, JWT_SECRET);
  } catch (err) {
    throw new UnauthorisedError('Необходима авторизация');
  }

  req.user = payload;

  next();
};
module.exports = auth;
