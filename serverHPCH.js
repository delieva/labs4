const util = require('util');
const http = require('http');
const url = require('url');


http.createServer(function(clientReq, clientRes){
	console.log(clientReq);
	console.log(clientReq.headers.host);
	
	
	
	const options = {
		host: clientReq.headers.host,
		url: clientReq.url,
		method: clientReq.method
	};
	
	const proxyReq = http.request(options, proxyRes => {
		proxyRes.headers=clientRes.headers;
		proxyRes.pipe(clientRes);
	});
	proxyReq.end();
}).listen(8080);


