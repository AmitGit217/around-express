const express = require('express');

const { PORT = 3000 } = process.env;
const helmet = require('helmet');

const usersRoute = require('./routes/usersRoute');
const cardsRoute = require('./routes/cardsRoute');
const nonExistRoute = require('./routes/nonExistRoute');

const app = express();
app.use(helmet());
app.use('/', usersRoute);
app.use('/', cardsRoute);
app.use('*', nonExistRoute);

app.listen(PORT);
