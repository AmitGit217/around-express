const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const { PORT = 3000 } = process.env;
const helmet = require('helmet');

const { MONGO_DB } = require('./lib/consts');
mongoose.connect(MONGO_DB);

const router = require('./routes/index');
const nonExistRoute = require('./routes/nonExistRoute');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '630ef8d10a8fc9e2a454474e',
  };
  next();
});

app.use(helmet());
app.use(limiter);
app.use(router);
app.use('*', nonExistRoute);

app.listen(PORT);
