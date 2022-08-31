const User = require('../models/userModel');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(err));
};

const getUserById = (req, res) => {
  const { _id } = req.params;
  User.findById(_id)
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res.status(404).send({ Error: err.message });
      } else {
        res.status(500).send({ Error: err.message });
      }
    });
};

const postUser = (req, res) => {
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ Error: err.message });
      } else {
        res.status(500).send({ Error: err.message });
      }
    });
};

const updateUser = (req, res) => {
  const { _id } = req.user;
  User.findByIdAndUpdate(_id, req.body)
    .orFail()
    .then(() => res.status(200).send(req.body))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ Error: err.message });
      } else {
        res.status(500).send({ Error: err.message });
      }
    });
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  updateUser,
};
