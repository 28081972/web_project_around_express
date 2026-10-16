const router = require('express').Router();

const users = require('../data/users.json');

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:_id', (req, res) => {
  const validId = users.find((user) => user._id === req.params._id);

  if (!validId) {
    res.status(404);
    res.send({ message: 'ID de usuario no encontrado' });
    return;
  }
  res.send(validId);
});

module.exports = router;
