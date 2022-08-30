const router = require('express').Router();
const { getCards, postCard } = require('../controllers/controlCards');

router.get('/cards', getCards);
router.post('/cards', postCard);

module.exports = router;
