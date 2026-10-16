const router = require('express').Router();

const path = require('path');

const datapath = path.join(__dirname, '../data/cards.json');

const fs = require('fs');

router.get('/cards', (req, res) => {
  fs.readFile(datapath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500);
      res.send('Internal Server Error');
      return;
    }
    const cards = JSON.parse(data);
    res.send(cards);
  });
});

module.exports = router;
