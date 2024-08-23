const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/shop');
});

router.get('/users', (req, res, next) => {
  const userList = [];

  for (let index = 0; index < 10; index++) {
    var nameList = [
      'Time',
      'Past',
      'Future',
      'Dev',
      'Fly',
      'Flying',
      'Soar',
      'Soaring',
      'Game',
      'Donkey',
      'Mule',
      'Colt',
      'Cult',
      'Cultist',
      'Magnum',
      'Girl',
      'Vortex',
      'Paradox',
    ];
    const randomName = nameList[Math.floor(Math.random() * nameList.length)];

    userList.push({ id: 0 + 1, name: randomName });
  }

  res.status(200).send(userList);
});

module.exports = router;
