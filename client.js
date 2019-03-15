const request = require('request');

const formData = {
	// Pass a simple key-value pair
	my_field: 'my_value',
	// Pass data via Buffers
	my_buffer: Buffer.from([1, 2, 3]),
};

request.post({
	url: 'http://google.com',
	proxy: 'http://localhost:8080',
	formData
}, (err, res, body) => {
	console.log(err);
	console.log(res);
	console.log(body)
});
