/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
const Card = require('../models/cardModel');

const getCards = (req, res) =>
  Card.find({})
    .then((cards) => res.send(cards))
    .catch((err) => res.status(500).send(err));

const postCard = (req, res) => {
  Card.create({ ...req.body, owner: req.user._id })
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

const likeCard = (req, res) => {
  const cardId = req.params._id;
  const userId = req.user._id;
  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: userId } },
    { new: true }
  )
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res.status(404).send({ Error: err.message });
      } else {
        res.status(500).send({ Error: err.message });
      }
    });
};

const disLikeCard = (req, res) => {
  const cardId = req.params._id;
  const userId = req.user._id;
  Card.findByIdAndUpdate(cardId, { $pull: { likes: userId } }, { new: true })
    .orFail()
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res.status(404).send({ Error: err.message });
      } else {
        res.status(500).send({ Error: err.message });
      }
    });
};

module.exports = { getCards, postCard, deleteCardById, likeCard, disLikeCard };
