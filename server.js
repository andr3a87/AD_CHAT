/* server/chat.js
 * Main Server File
*/

var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello World!!');
})

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port,ip);
console.log('Server running at http://%s:%d',ip,port);