const router = require('express').Router();
const users = require('./users');
const articles = require('./articles');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { signupValidation, signinValidation } = require('../middlewares/validation');

router.post('/signin', signinValidation, login);
router.post('/signup', signupValidation, createUser);

router.use(auth);

router.use('/articles', articles);
router.use('/users', users);

module.exports = router;
