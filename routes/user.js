const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Subscribers route is alive');
});

module.exports = router;
