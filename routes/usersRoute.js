const router = require('express').Router();

const path = require('path');
const fs = require('fs').promises;

router.get('/users', (req, res) => {
  const usersDataFile = path.join(__dirname, '..', 'data', 'usersData.json');
  fs.readFile(usersDataFile, { encoding: 'utf8' })
    .then((data) => res.send(JSON.parse(data)))
    .catch((err) => res.send(err.message));
});

router.get('/users/:_id', (req, res) => {
  const { _id } = req.params;
  const usersDataFile = path.join(__dirname, '..', 'data', 'usersData.json');
  fs.readFile(usersDataFile, { encoding: 'utf8' })
    .then((data) => {
      const userId = JSON.parse(data).find((user) => user._id === _id);
      if (userId) {
        res.send(userId);
        return;
      }
      res.send({ message: 'User ID not found' });
    })
    .catch((err) => res.send(err.message));
});

module.exports = router;
