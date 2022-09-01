const { NOT_FOUND } = require('../lib/consts');

const norExistRoute = (req, res) => {
  res.status(NOT_FOUND).send({ message: 'Requested resource not found' });
};

module.exports = norExistRoute;
