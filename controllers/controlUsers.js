const path = require('path');
const getDataFromFile = require('../helpers/files');

const usersPath = path.join(__dirname, '..', 'data', 'usersData.json');

const getUsers = (req, res) => {
  getDataFromFile(usersPath)
    .then((users) => res.send(users))
    .catch((err) => err);
};

const getUserId = (req, res) => {
  getDataFromFile(usersPath)
    .then((users) => users.find((user) => user._id === req.params._id))
    .then((user) => {
      if (user) {
        res.send(user);
        return;
      }
      res.status(404).send({ message: 'User ID not found' });
    });
};

module.exports = { getUsers, getUserId };