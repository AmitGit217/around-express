const router = require('express').Router();
const path = require('path');
const fs = require('fs').promises;

router.get('/cards', (req, res) => {
  const cardsDataFile = path.join(__dirname, '..', 'data', 'cardsData.json');
  fs.readFile(cardsDataFile, { encoding: 'utf8' })
    .then((data) => res.send(JSON.parse(data)))
    .catch((err) => res.send(err.message));
});

module.exports = router;
