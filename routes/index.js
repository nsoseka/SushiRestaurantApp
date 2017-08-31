var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");
var _ = require("underscore");

var file_path = path.resolve(path.dirname(__dirname), "data/sushi_types.json");
var items = JSON.parse(fs.readFileSync(file_path, "utf8"));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	items: items
  });
});
router.get('/checkout', function(req, res, next) {
  res.render('users', {
  	items: items
  });
});
router.get('/:item', function(req, res, next) {
	res.render('users', {
		items: items
	})
});

module.exports = router;
