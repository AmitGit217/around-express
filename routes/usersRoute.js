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
    res.send(JSON.parse(data));
  });
});

router.get('/users/:_id', (req, res) => {
  const { _id } = req.params;
  const usersDataFile = path.join(__dirname, '..', 'data', 'usersData.json');
  fs.readFile(usersDataFile, { encoding: 'utf8' }, (err, data) => {
    const userId = JSON.parse(data).find((user) => user._id === _id);
    res.send(userId);
  });
});

module.exports = router;
