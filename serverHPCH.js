const util = require('util');
const http = require('http');
const url = require('url');

function notFound(res){
	res.writeHead(404, 'text/plain');
	res.end('404: Not found');
}

http.createServer(function(req, res){
	console.log(req);
	
	
	
	const options = {
		host: req.headers.host,
		// headers: req.headers,
		port: 80,
		method: req.method
	};
	
	const p_req = http.request(options, res1 => {
		console.log('\nhello honey ');
		// res1.on('data', (chunk) => {
		// 	res.write(chunk);
		// 	console.log("hi, kitty")
		// });
		// res1.on('end', () => {
		// 	res.end();
		// })
		res1.pipe(res);
	});
	p_req.end();
}).listen(8080);






//
//
// http.createServer(onRequest).listen(3000);
//
// function onRequest(client_req, client_res) {
// 	console.log('serve: ' + client_req.url);
//
// 	var options = {
// 		hostname: 'www.google.com',
// 		port: 80,
// 		path: client_req.url,
// 		method: client_req.method,
// 		headers: client_req.headers
// 	};
//
// 	var proxy = http.request(options, function (res) {
// 		client_res.writeHead(res.statusCode, res.headers);
// 		res.pipe(client_res, {
// 			end: true
// 		});
// 	});
//
// 	client_req.pipe(proxy, {
// 		end: true
// 	});
// }


// const http = require('http');
// const request = require('request');
//
// http.createServer((req, res) => {
// 	console.log(req);
//
// 	if (req.method === 'GET'){
// 		request({
// 			method: req.method,
// 			url: req.url,
// 			headers: req.headers
// 		}, (err, resp, body) => {
// 			res.end(body)
// 		})
// 	}
//
// 	console.log(req.body);
// 	if (req.method === 'POST'){
// 		request({
// 			method: req.method,
// 			url: req.url,
// 			headers: req.headers,
// 			form: req.form,
// 		}, (err, resp, body) => {
// 			res.end(body)
// 		})
// 	}
//
// }).listen(8080);


