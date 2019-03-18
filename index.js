'use strict';

let a = 5;
console.log('**************************s'+a + '\n');


const http = require('http');
const url = require('url');


http.createServer(function(clientReq, clientRes){
	const clientUrl = url.parse(clientReq.url);
	console.log(clientReq.url);
	
	const options = {
		hostname: clientUrl.host,
		path: clientUrl.path,
		method: clientReq.method
	};
	
	const proxyReq = http.request(options, (proxyRes) => {
		proxyRes.url = clientUrl.href;
		proxyRes.headers=clientRes.headers;
		proxyRes.pipe(clientRes);
	});
	proxyReq.end();
}).listen(8080);
