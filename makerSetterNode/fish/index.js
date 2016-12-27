#!/usr/bin/env node
var program = require('commander');
var fs = require('fs');
var path=require('path');
var homedir=require('homedir');

var home=homedir()

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

var makeFile= function(filepath){
	fs.closeSync(fs.openSync(filepath, 'w'))
}

var copyFile = function(indexjs, copypath, newpath){
	 fs.createReadStream(copypath).pipe(fs.createWriteStream(newpath))
}

var textAdder= function(path, contents){
	fs.appendFileSync(path, contents);
}
outMostDir="./"+program.name
makeDirectory(outMostDir)

// fs.createReadStream('/Users/thomaschester/Desktop/duplexChicks-master/server/public/views/partials/results.html').pipe(fs.createWriteStream('/Users/thomaschester/Desktop/collectiveMakerSetter/results.html'))
copyFile('/Users/thomaschester/Desktop/duplexChicks-master/server/public/views/partials/results.html','/Users/thomaschester/Desktop/collectiveMakerSetter/results.html')