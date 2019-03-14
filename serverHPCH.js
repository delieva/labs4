const util = require('util');
const http = require('http');
const url = require('url');
//
// http.createServer(function(b_req, b_res){
// 	let b_url = url.parse(b_req.url, true)
// })


http.createServer(onRequest).listen(3000);

function onRequest(client_req, client_res) {
	console.log('serve: ' + client_req.url);
	
	var options = {
		hostname: 'www.google.com',
		port: 80,
		path: client_req.url,
		method: client_req.method,
		headers: client_req.headers
	};
	
	var proxy = http.request(options, function (res) {
		client_res.writeHead(res.statusCode, res.headers);
		res.pipe(client_res, {
			end: true
		});
	});
	
	client_req.pipe(proxy, {
		end: true
	});
}