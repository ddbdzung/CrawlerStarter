var express = require('express');
var router = express.Router();
const demoCrawl = require('../crawler/demo')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const x = await demoCrawl()
  return res.send('helo')
});

module.exports = router;
