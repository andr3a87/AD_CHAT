var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
	host: '0.0.0.0',
	port: 8080
});
server.register(require('inert'), function () {

	server.route([
	  { method: 'GET', path: '/', handler: { file: "index.html" } },
		// switch these two routes for a /static handler?
	  { method: 'GET', path: '/client.js', handler: { file: './client.js' } },
	  { method: 'GET', path: '/style.css', handler: { file: './style.css' } },
	  { method: 'GET', path: '/bootstrap.min.css', handler: { file: './assets/css/bootstrap.min.css' } },
	  { method: 'GET', path: '/site.css', handler: { file: './assets/css/site.css' } },
	  { method: 'GET', path: '/bootstrap.min.js', handler: { file: './assets/js/bootstrap.min.js' } },
	  { method: 'GET', path: '/load',      handler: require('./lib/load_messages').load }
	]);

	server.start(function () {
		require('./lib/chat').init(server.listener, function(){
			// console.log('REDISCLOUD_URL:', process.env.REDISCLOUD_URL);
			console.log('Feeling Chatty?', 'listening on: http://127.0.0.1:'+process.env.PORT);
		});
	});
	
});
module.exports = server;
