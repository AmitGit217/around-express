/* eslint-disable object-curly-newline */
const Card = require('../models/cardModel');

const getCards = (req, res) =>
  Card.find({})
    .then((cards) => res.send(cards))
    .catch((err) => res.status(500).send(err));

const postCard = (req, res) => {
  const { name, link, likes, createdAt } = req.body;
  Card.create({ name, link, owner: req.user._id, likes, createdAt })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ Error: err.message });
      } else {
        res.status(500).send({ Error: err.message });
      }
    });
};

const deleteCardById = (req, res) => {
  const { _id } = req.params;
  Card.findByIdAndRemove(_id)
    .orFail()
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res.status(404).send({ Error: err.message });
      } else {
        res.status(500).send({ Error: err.message });
      }
    });
};

module.exports = { getCards, postCard, deleteCardById };
