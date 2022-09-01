const Card = require('../models/cardModel');
const {
  NOT_FOUND,
  INVALID_DATA,
  DEFAULT_ERROR,
  CREATE,
} = require('../lib/consts');

const getCards = (req, res) =>
  Card.find({})
    .then((cards) => res.send(cards))
    .catch((err) => res.status(DEFAULT_ERROR).send(err));

const postCard = (req, res) => {
  Card.create({ ...req.body, owner: req.user._id })
    .then((card) => res.status(CREATE).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(INVALID_DATA).send({ Error: err.message });
      } else {
        res.status(DEFAULT_ERROR).send({ Error: err.message });
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
        res.status(NOT_FOUND).send({ Error: err.message });
      } else if (err.name === 'CastError') {
        res.status(INVALID_DATA).send({ Error: err.message });
      } else {
        res.status(DEFAULT_ERROR).send({ Error: err.message });
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
    .orFail()
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res
          .status(NOT_FOUND)
          .send({ Error: 'Card with this ID has not been found' });
      } else if (err.name === 'CastError') {
        res
          .status(INVALID_DATA)
          .send({ Error: 'Your input is not a valid data' });
      } else {
        res
          .status(DEFAULT_ERROR)
          .send({ Error: 'Something went wrong with the server' });
      }
    });
};

const disLikeCard = (req, res) => {
  const cardId = req.params._id;
  const userId = req.user._id;
  Card.findByIdAndUpdate(cardId, { $pull: { likes: userId } }, { new: true })
    .orFail()
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res
          .status(NOT_FOUND)
          .send({ Error: 'Card with this ID has not been found' });
      } else if (err.name === 'CastError') {
        res
          .status(INVALID_DATA)
          .send({ Error: 'Your input is not a valid data' });
      } else {
        res
          .status(DEFAULT_ERROR)
          .send({ Error: 'Something went wrong with the server' });
      }
    });
};

module.exports = { getCards, postCard, deleteCardById, likeCard, disLikeCard };
