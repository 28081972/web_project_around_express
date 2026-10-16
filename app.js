const express = require('express');

const app = express();
const routerUsers = require('./routes/users');
const routerCards = require('./routes/cards');
const routerUsersId = require('./routes/users');

app.use('/', routerUsers);
app.use('/', routerCards);
app.use((req, res) => {
  res.status(404);
  res.send({ message: 'Recurso solicitado no encontrado' });
});
app.use('/', routerUsersId);

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`La aplicación está detectando el puerto: ${PORT}`);
});
