const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/cards', (req, res) => {
  const cardsDataFile = path.join(__dirname, '..', 'data', 'cardsData.json');
  fs.readFile(cardsDataFile, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(data);
  });
});

module.exports = router;
