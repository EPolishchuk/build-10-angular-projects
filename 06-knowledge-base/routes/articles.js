var express = require('express');
var router = express.Router();

var Article = require('../models/article');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
  	if (err) {
  		console.log(err);
  		return (callback);
  	}
  	res.json(articles);
  });
});

module.exports = router;