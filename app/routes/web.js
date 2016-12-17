const express = require('express');
const router = express.Router();

const context = {
  user: {
    name: "Stian"
  }
};

router.get('/', (req, res) => {
  res.render('home', context);
});

router.get('/del', (req, res) => {
  res.render('form', context);
});

router.get('/tilbud', (req, res) => {
  res.render('offer', context);
});

module.exports = router;
