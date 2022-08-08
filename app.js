const express = require('express');

const { PORT = 3000 } = process.env;

const usersRoute = require('./routes/usersRoute');
const cardsRoute = require('./routes/cardsRoute');

const app = express();

app.use('/', usersRoute);
app.use('/', cardsRoute);

app.listen(PORT);
