// MAKE SURE dev.js IN .gitignore
if (process.env.NODE_ENV === 'production') {

	// production - on heroku
	module.exports = require('./prod');

} else {
	// dev - on local
	module.exports = require('./dev');
}
