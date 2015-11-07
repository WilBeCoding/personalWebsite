var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jadedex');
});

router.get('/about', function(req, res, next) {
    res.render('about');
});

router.get('/blog', function(req, res, next) {
    res.render('blog');
})

router.get('/music', function(req, res, next) {
    res.render('music');
})

module.exports = router;
