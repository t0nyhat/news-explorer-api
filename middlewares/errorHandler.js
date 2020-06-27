const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const { message } = err;
  res.status(status).json({ ошибка: message || 'Произошла ошибка на сервере' });
  next();
};
module.exports = { errorHandler };
