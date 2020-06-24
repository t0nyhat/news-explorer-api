const router = require('express').Router();
const users = require('./users');
const articles = require('./articles');
const { createUser, login } = require('../controllers/users');

router.post('/signin', login);
router.post('/signup', createUser);

router.use('/articles', articles);
router.use('/users', users);

module.exports = router;
