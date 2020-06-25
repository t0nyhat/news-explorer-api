const mongoose = require('mongoose');
const { NOT_UNIQUE_EMAIL, SERVER_ERROR, VALIDATION_ERROR } = require('../constants/constants');

const errorHandler = (err, req, res, next) => {
  let { statusCode = 500, message } = err;

  if (err instanceof mongoose.Error.ValidationError || err instanceof mongoose.Error.CastError) {
    message = `${VALIDATION_ERROR}  ${message}`;
    statusCode = 400;
  }
  if (message.includes('to be unique')) {
    message = NOT_UNIQUE_EMAIL;
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
