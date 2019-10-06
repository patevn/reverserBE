var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { query } = req;
  const param = Object.keys(query);
  res.send(reverse(param[0]));
});

const reverse = str => {
  return str
    .split('')
    .reverse()
    .join('');
};

module.exports = router;
