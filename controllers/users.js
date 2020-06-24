const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');

const getUsersById = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(new NotFoundError(`Пользователя с id : ${req.params.userId} не существует!`))
    .then((user) => {
      if (!user) {
        throw new NotFoundError(`Пользователя с id : ${req.params.userId} не существует!`);
      }
      res.send({ user });
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({
      name, email, password: hash,
    }))
    .then((user) => res.status(201).send({ user: user.omitPrivate() }))
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY || 'dev-secret', {
        expiresIn: '7d',
      });
      res
        .cookie('jwt', token, {
          maxAge: 360000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        })
        .end();
    })

    .catch(next);
};

module.exports = { getUsersById, createUser, login };
