var express = require('express');
var router = express.Router();

var db = require('../models');

router.get('/dashbord', function(req, res){
	console.log("here in dashbord-routes");
	res.render('dashbord');
});

module.exports = router;