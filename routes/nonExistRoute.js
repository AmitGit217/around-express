const { NOT_FOUND } = require('../lib/consts');

const nonExistRoute = (req, res) => {
  res.status(NOT_FOUND).send({ message: 'Requested resource still not found' });
};

module.exports = nonExistRoute;
