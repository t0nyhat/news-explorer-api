const UnauthorisedError = require('./unauthorised-err');
const ForbidenError = require('./forbiden-err');
const NotFoundError = require('./not-found-err');
const BadRequestError = require('./bad-request-err');

module.exports = {
  UnauthorisedError, ForbidenError, NotFoundError, BadRequestError,
};
