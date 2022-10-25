var express = require('express');
var router = express.Router();
const api = require('./api')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  next();
});

router.use("/api",api)

module.exports = router;
