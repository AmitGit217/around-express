const router = require('express').Router();
const { getUsers, getUserById } = require('../controllers/controlUsers');

router.get('/users', getUsers);

router.get('/users/:_id', getUserById);

module.exports = router;
