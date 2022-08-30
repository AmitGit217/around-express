const router = require('express').Router();
const {
  getCards,
  postCard,
  deleteCardById,
} = require('../controllers/controlCards');

router.get('/cards', getCards);
router.post('/cards', postCard);
router.delete('/cards/:_id', deleteCardById);

module.exports = router;
