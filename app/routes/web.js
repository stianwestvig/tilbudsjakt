const express = require('express');
const router = express.Router();
const offers = require('../data/offers');

router.get('/', (req, res) => {
  res.render('home', { offers });
});

router.get('/del', (req, res) => {
  res.render('form', context);
});

router.get('/tilbud/:offerId', (req, res) => {
  const { offerId = null } = req.params;

  const offer = offers.find(item => {
    return item.id === offerId;
  });

  console.log('rendering offer', offer);

  res.render('offer', offer);
});

module.exports = router;
