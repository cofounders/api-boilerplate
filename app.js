var _ = require('lodash'),
	config = require('./config'),
	everyauth = require('everyauth'),
	express = require('express'),
	mongoose = require('mongoose');

var db = mongoose.connect(config.credentials.mongodb);

var server = express.createServer();

server.use(function (req, res, next) {
	res.header('Server', config.rest.name);
	res.header('Accept-Version', config.rest.version);
	next();
});

server.listen(config.rest.port, config.rest.host, function () {
	console.log(
		'%s (version %s) listening at %s:%s',
		config.rest.name,
		config.rest.version,
		config.rest.host,
		config.rest.port
	);
});

_.extend(exports, {
	server: server,
	db: db
});
