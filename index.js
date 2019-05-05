'use strict';

let a = 5;
console.log('**************************s'+a + '\n');


const http = require('http');
const url = require('url');

let proxyServerFunc = function(clientReq, clientRes){
	if(clientReq.url === "/"){
		clientReq.url = "http://www.example.com/favicon.ico";
	}
	const clientUrl = url.parse(clientReq.url);
	console.log(clientReq.url);
	
	
	const options = {
		hostname: clientUrl.host,
		path: clientUrl.path,
		method: clientReq.method,
	};
	
	const proxyReq = http.request(options, (proxyRes) => {
		proxyRes.url = clientUrl.href;
		proxyRes.headers=clientRes.headers;
		proxyRes.pipe(clientRes);
	});
	proxyReq.end();
}

http.createServer((clientReq, clientRes) =>{proxyServerFunc(clientReq, clientRes)}).listen(8080);

module.exports = proxyServerFunc;
