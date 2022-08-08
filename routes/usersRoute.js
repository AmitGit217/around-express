const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const usersDataFile = path.join(__dirname, '..', 'data', 'usersData.json');

router.get('/users', (req, res) => {
  fs.readFile(usersDataFile, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
  });
});

module.exports = router;
