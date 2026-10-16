const express = require('express');

const app = express();
const routerUsers = require('./routes/users');
const routerCards = require('./routes/cards');

app.use('/', routerUsers);
app.use('/', routerCards);

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`La aplicación está detectando el puerto: ${PORT}`);
});
