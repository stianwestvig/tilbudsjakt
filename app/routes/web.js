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

module.exports = router;
