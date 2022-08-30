const User = require('../models/userModel');

const getUsers = (req, res) => {
  User.find({}).then((users) => res.send(users));
};

const getUserById = (req, res) => {
  const { _id } = req.params;
  User.findById(_id).then((user) => {
    if (user) {
      res.send(user);
    } else {
      res.status(404).send('No such data');
    }
  });
};

module.exports = { getUsers, getUserById };
