const router = require('express').Router();
const {
  getUsers,
  getUserById,
  postUser,
} = require('../controllers/controlUsers');

router.get('/users', getUsers);
router.post('/users', postUser);
router.get('/users/:_id', getUserById);

module.exports = router;
