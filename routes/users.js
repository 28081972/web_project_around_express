const router = require('express').Router();

const path = require('path');

const datapath = path.join(__dirname, '../data/users.json');

const fs = require('fs');

router.get('/users', (req, res) => {
  fs.readFile(datapath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500);
      res.send('Internal Server Error');
      return;
    }
    const users = JSON.parse(data);
    res.send(users);
  });
});

router.get('/users/:_id', (req, res) => {
  fs.readFile(datapath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500);
      res.send('Internal Server Error');
      return;
    }
    const users = JSON.parse(data);

    const validId = users.find((user) => user._id === req.params._id);

    if (!validId) {
      res.status(404);
      res.send({ message: 'ID de usuario no encontrado' });
      return;
    }
    res.send(validId);
  });
});

module.exports = router;
