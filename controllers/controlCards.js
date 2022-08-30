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
    .catch((err) => res.send(err));
};

module.exports = { getCards, postCard };
