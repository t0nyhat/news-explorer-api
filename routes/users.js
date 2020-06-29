const router = require('express').Router();

const { getUsersById } = require('../controllers/users');

router.get('/me', getUsersById);

module.exports = router;
