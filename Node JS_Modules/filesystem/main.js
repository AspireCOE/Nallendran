const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname,'input.txt'), 'utf8',function (err, data) { //use this for path(better way)
	if (err) throw(err);
	console.log(data);         //if encoding(utf8)is mentioned no need .toString 
});

fs.writeFile(path.join(__dirname,'output.txt'), 'writing a text in new file',function (err) {  
	if (err) throw(err);
	console.log('new file created');      
});
