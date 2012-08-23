var mongoose = require('mongoose'),
	app = require('./app'),
	models = require('./models');

app.server.get('/user/:id', function (req, res, next) {
	res.send({
		id: req.params.id
	});
	return next();
});
