const util = require('util');
const http = require('http');
const url = require('url');

function notFound(res){
	res.writeHead(404, 'text/plain');
	res.end('404: Not found');
}

http.createServer(function(b_req, b_res){
	let b_url = url.parse(b_req.url, true);

	if(!b_url.query || !b_url.query.url){
		return notFound(b_res)
	}

	let p_url = url.parse(b_url.query.url)
	
	//console.log(b_req.url);
	
	const options = {
		host: p_url.hostname,
		port: 80,
		method: b_req.method
	}
	//console.log(options);
	
	const p_req = http.request(options, res1 => {
		console.log('\nhello honey ');
	});
	p_req.end();
	
	p_req.addListener('response', (p_res) => {
		b_res.writeHead(b_res.statusCode, p_res.headers);
		p_res.on('data', (chunk) => {
			b_res.write(chunk);
		});

		p_res.on('end', () => {
			b_res.end();
		})
		// p_req.addListener("data", (chunk) => {
		// 	b_res.write(chunk);
		// 	console.log("FUCK");
		// });
		//
		// p_req.addListener("end", function() {
		// 	b_res.end();
		// });
	})
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


