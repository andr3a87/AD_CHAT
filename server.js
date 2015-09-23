/* server/chat.js
 * Main Server File
*/

var express = require('express');
var app = express();

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port,ip);
console.log('Server running at http://%s:%d',ip,port);

app.get('/',function(req,res){
	res.send('Hello Andrea!!');
});

var hostRedis = process.env.OPENSHIFT_REDIS_HOST || '127.0.0.1';
var portRedis = process.env.OPENSHIFT_REDIS_PORT || 6379;

//var redis = require('redis');
//var client = redis.createClient(portRedis, hostRedis);

console.log('Redis running at http://%s:%d',hostRedis,portRedis);