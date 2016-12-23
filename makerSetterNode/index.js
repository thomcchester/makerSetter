#!/usr/bin/env node
var program=require('commander');
var fs = require('fs');
//making sure it is worth doing anything else.
program
  .version('0.0.1')
  .option('-p, --path [type]','[none]' )
  .option('-n, --name [type]', 'Put in the new name[madeSet]','madeSet')
  .parse(process.argv);

//make sure there is a path
if (!program.path){
  console.log( "you need to give a path name")
} else {
  console.log( "path = ", program.path)
}

//check if there is a name
if (!program.name){
  console.log( "since you didnt give a name we set it as: madeSet")
} else {
  console.log( "your new program writer name is: ", program.name)
}

//FUNCTIONS

  //Directory Maker
    //input types have to be './name'
var makeDirectory= function(dirpath){
  if(!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath)
  }
}

  //File Maker
    //input should be full path and everything
var makeFile= function(filepath){
  fs.closeSync(fs.openSync(filepath, 'w'))
}

  //Add text to file
var textAdder= function(path, contents){
  fs.appendFileSync(path, contents);
}

outMostDir="./"+program.name
indexjs=outMostDir+"/index.js"
contents="#!/usr/bin/env node"
console.log(indexjs)
console.log(contents)


makeDirectory(outMostDir)
makeFile(indexjs)
textAdder(indexjs, contents)

commanderFs = "\nvar program = require('commander');\nvar fs = require('fs')"

programText= "\n\n program\n\t.version('0.0.1')\n\t.option('-n, --name [type]','put in name [madeProg]', 'madeProg')\n\t.parse(process.argv);"

programNameIf= "\n\n if (!program.name){\n\t\t console.log(\"since you didnt give a name we set it as: madeProg\")\n\t}else{\n\t\tconsole.log(\"Your new Program Writer is called: \", program.name)\n\t}"

makeDirectoryText="\n\nvar makeDirectory= function(dirpath){\n\tif(!fs.existsSync(dirpath)){\n\t\tfs.mkdirSync(dirpath)\n\t}\n}"

textAdder(indexjs, commanderFs)
textAdder(indexjs, programText)
textAdder(indexjs, programNameIf)
textAdder(indexjs, makeDirectoryText)
