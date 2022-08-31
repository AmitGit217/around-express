const router = require('express').Router();
const {
  getCards,
  postCard,
  deleteCardById,
  likeCard,
} = require('../controllers/controlCards');

router.get('/cards', getCards);
router.post('/cards', postCard);
router.delete('/cards/:_id', deleteCardById);
router.put('/cards/:_id/likes', likeCard);

module.exports = router;
