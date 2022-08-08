const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/users', (req, res) => {
  const usersDataFile = path.join(__dirname, '..', 'data', 'usersData.json');
  fs.readFile(usersDataFile, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(data);
  });
});

module.exports = router;
