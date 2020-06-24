const router = require('express').Router();
const users = require('./users');
const articles = require('./articles');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post('/signin', login);
router.post('/signup', createUser);

router.use(auth);

router.use('/articles', articles);
router.use('/users', users);

module.exports = router;
