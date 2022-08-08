const router = require('express').Router();
const getCards = require('../controllers/controlCards');

router.get('/cards', getCards);

module.exports = router;
