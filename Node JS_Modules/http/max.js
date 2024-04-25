const http = require('http');

// Create a server
http.createServer((request, response) => {
 
	response.write('Hello World!');
 
	response.end();
}).listen(3000); // Server listening on port 3000

console.log("Server started on port 3000");
