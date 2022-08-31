const router = require('express').Router();
const {
  getUsers,
  getUserById,
  postUser,
  updateUser,
} = require('../controllers/controlUsers');

router.get('/users', getUsers);
router.post('/users', postUser);
router.patch('/users/me', updateUser);
router.get('/users/:_id', getUserById);

module.exports = router;
