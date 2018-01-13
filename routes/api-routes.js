//these are just placeholders for the routing. Once we know what pages
//we have, we can update them here as well as the methods needed for each
var db = require("../models");

module.exports = function(app) {

	app.get('/', function (req, res) {
		res.send('Hello World!');
	});

	app.post('/', function (req, res) {
		res.send('Got a POST request');
	});

	app.put('/user', function (req, res) {
		res.send('Got a PUT request at /user');
	});

	app.delete('/user', function (req, res) {
		res.send('Got a DELETE request at /user');
	});
}