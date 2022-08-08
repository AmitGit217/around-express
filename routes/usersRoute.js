const router = require('express').Router();
const { getUsers, getUserId } = require('../controllers/controlUsers');

router.get('/users', getUsers);

router.get('/users/:_id', getUserId);

module.exports = router;
