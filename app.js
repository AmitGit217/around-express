const express = require('express');

const { PORT = 3000 } = process.env;

const usersRoute = require('./routes/usersRoute');

const app = express();

app.use('/', usersRoute);

app.listen(PORT);
