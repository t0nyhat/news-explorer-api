const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const { SOURCE_NOT_FOUND } = require('../constants/constants');
const { JWT_SECRET } = require('../config/config');

const getUsersById = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(new NotFoundError(SOURCE_NOT_FOUND))
    .then((user) => {
      if (!user) {
        throw new NotFoundError(SOURCE_NOT_FOUND);
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
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
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
