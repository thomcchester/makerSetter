#!/usr/bin/env node
var program = require('commander');
var fs = require('fs')

 program
	.version('0.0.1')
	.option('-n, --name [type]','put in name [madeProg]', 'madeProg')
	.parse(process.argv);

 if (!program.name){
		 console.log("since you didnt give a name we set it as: madeProg")
	}else{
		console.log("Your new Program Writer is called: ", program.name)
	}

var makeDirectory= function(dirpath){
	if(!fs.existsSync(dirpath)){
		fs.mkdirSync(dirpath)
	}
}