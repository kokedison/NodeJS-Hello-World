var http = require('http');
var url = require('url');
var fs = require('fs');
const PORT = process.env.PORT || 8080;

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var fileName = '.' + q.pathname;

	if(fileName == './'){
		fileName = './index';
	}

	fileName = fileName + ".html";

	fs.readFile(fileName, function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log("...Incoming Request: " + req.url);
		return res.end();
	});
///Parse URL
	//res.writeHead(200, {'Content-Type': 'text/html'});
	//var q = url.parse(req.url, true).query;
	//var dates = q.year + ' ' + q.month;
	//res.write(JSON.stringify(q));
	//res.write(dates);
	//res.end();
}).listen(PORT);

console.log("Server Listengin on Port 8080...");