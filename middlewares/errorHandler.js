const mongoose = require('mongoose');
const { NOT_UNIQUE_EMAIL, SERVER_ERROR } = require('../constants/constants');

const errorHandler = (err, req, res, next) => {
  let { statusCode = 500 } = err;
  const { message } = err;

  if (err instanceof mongoose.Error.ValidationError || err instanceof mongoose.Error.CastError) {
    statusCode = 400;
  }
  if (message.includes(NOT_UNIQUE_EMAIL)) {
    statusCode = 409;
  }

  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? SERVER_ERROR
        : message,
    });
  next();
};
module.exports = { errorHandler };
