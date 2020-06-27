const mongoose = require('mongoose');
const { BadRequestError, ConflictError } = require('../errors/index');

const { NOT_UNIQUE_EMAIL, VALIDATION_ERROR } = require('../constants/constants');

const errorTypeChecker = (err, req, res, next) => {
  let outError = err;
  if (err instanceof mongoose.Error.ValidationError || err instanceof mongoose.Error.CastError) {
    outError = new BadRequestError(VALIDATION_ERROR);
  }
  if (err.code === 11000) {
    outError = new ConflictError(NOT_UNIQUE_EMAIL);
  }
  next(outError);
};
module.exports = { errorTypeChecker };
