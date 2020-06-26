const router = require('express').Router();
const users = require('./users');
const articles = require('./articles');
const sign = require('./sign');
const auth = require('../middlewares/auth');
const all = require('./all');

router.use('/', sign);

router.use(auth);

router.use('/articles', articles);
router.use('/users', users);
router.use(all);

module.exports = router;
