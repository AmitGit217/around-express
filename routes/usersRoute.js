const router = require('express').Router();
const {
  getUsers,
  getUserById,
  postUser,
  updateUser,
  updateAvatar,
} = require('../controllers/controlUsers');

router.get('/users', getUsers);
router.post('/users', postUser);
router.patch('/users/me', updateUser);
router.patch('/users/me/avatar', updateAvatar);
router.get('/users/:_id', getUserById);

module.exports = router;
