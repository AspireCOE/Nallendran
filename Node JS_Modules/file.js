const fs = require("fs");
const path = require("path");

//reading a file
fs.readFile(path.join(__dirname,'input.txt'), 'utf8',function (err, data) { //use this for path(better way)
	if (err) throw(err);
	console.log(data);         //if encoding(utf8)is mentioned no need .toString 
});

//writing a file
fs.writeFile(path.join(__dirname,'write.txt'), 'writing a text in new file',function (err) {  
	if (err) throw(err);
	console.log('new file created')
	fs.appendFile(path.join(__dirname,'write.txt'), ' updating a text in new file',function (err) {   //append
		if (err) throw(err);
		console.log('new file updated');          
	});         
});

