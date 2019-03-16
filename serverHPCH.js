const util = require('util');
const http = require('http');
const url = require('url');


http.createServer(function(clientReq, clientRes){
	// console.log(clientReq);
	console.log(clientReq.url);
	
	
	
	const options = {
		method: clientReq.method
	};
	
	const proxyReq = http.request(clientReq.url, proxyRes => {
		proxyRes.headers=clientRes.headers;
		proxyRes.pipe(clientRes);
	});
	proxyReq.end();
}).listen(8080);


