/* eslint-disable comma-dangle */
const User = require('../models/userModel');
const {
  NOT_FOUND,
  INVALID_DATA,
  DEFAULT_ERROR,
  CREATE,
} = require('../lib/consts');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => res.status(DEFAULT_ERROR).send(err));
};

const getUserById = (req, res) => {
  const { _id } = req.params;
  User.findById(_id)
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res.status(NOT_FOUND).send({ Error: err.message });
      } else {
        res.status(DEFAULT_ERROR).send({ Error: err.message });
      }
    });
};

const postUser = (req, res) => {
  User.create(req.body)
    .then((user) => res.status(CREATE).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(INVALID_DATA).send({ Error: err.message });
      } else {
        res.status(DEFAULT_ERROR).send({ Error: err.message });
      }
    });
};

const updateUser = (req, res) => {
  const { _id } = req.user;
  User.findByIdAndUpdate(
    _id,
    { name: req.body.name, about: req.body.about },
    { runValidators: true }
  )
    .orFail()
    .then(() => res.send(req.body))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(INVALID_DATA).send({ Error: err.message });
      } else {
        res.status(DEFAULT_ERROR).send({ Error: err.message });
      }
    });
};

const updateAvatar = (req, res) => {
  const { _id } = req.user;
  User.findByIdAndUpdate(
    _id,
    { avatar: req.body.avatar },
    { runValidators: true }
  )
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(INVALID_DATA).send({ Error: err.message });
      } else {
        res.status(DEFAULT_ERROR).send({ Error: err.message });
      }
    });
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  updateUser,
  updateAvatar,
};
