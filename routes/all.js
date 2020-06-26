const router = require('express').Router();
const { SOURCE_NOT_FOUND } = require('../constants/constants');
const NotFoundError = require('../errors/not-found-err');

const error = (req, res, next) => {
  next(new NotFoundError(SOURCE_NOT_FOUND));
};

router.use('*', error);
module.exports = router;
