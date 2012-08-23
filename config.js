// Don't commit changes to this file
// Use: git update-index --assume-unchanged config.js

var _ = require('lodash');

_.extend(exports, {

	credentials: {
		mongodb: 'mongodb://admin:secret@localhost:27017/api-boilerplate'
	},

	rest: {
		name: 'API Boilerplate',
		version: '1.0.0',
		host: 'localhost',
		port: 3000
	}

});
