#!/usr/bin/env node
var program=require('commander');
var fs = require('fs');
var path=require('path')
var homedir= require('homedir')



//made vars
home=homedir();


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
  //set reader to variable, set var=fileContents(path) for complete thing
var fileContents= function(path){
  newVar=fs.readFileSync(home+path, "utf-8", function(err, data){
    if (err){
      console.log(err)
    } else {
      return data
    }
  })
  return newVar
}

//make out directory
outMostDir="./"+program.name
indexjs=outMostDir+"/index.js"
contents="#!/usr/bin/env node"
makeDirectory(outMostDir)
makeFile(indexjs)
textAdder(indexjs, contents)

//making variables to be added to index.js in the -n directory
  //putting requirements in
  commanderFs = "\nvar program = require('commander');\nvar fs = require('fs')"
  //setting commander program
  programText= "\n\n program\n\t.version('0.0.1')\n\t.option('-n, --name [type]','put in name [madeProg]', 'madeProg')\n\t.parse(process.argv);"
  //if no name input
  programNameIf= "\n\n if (!program.name){\n\t\t console.log(\"since you didnt give a name we set it as: madeProg\")\n\t}else{\n\t\tconsole.log(\"Your new Program Writer is called: \", program.name)\n\t}"
  //makes the make "makeDirectory" function
  makeDirectoryText="\n\nvar makeDirectory= function(dirpath){\n\tif(!fs.existsSync(dirpath)){\n\t\tfs.mkdirSync(dirpath)\n\t}\n}"

//creates outermost path of files copied
absPath=home+program.path
console.log(absPath)
fs.readdir(absPath, (err,files)=>{
  console.log(absPath)
  files.forEach(file=>{
    console.log(file)
  })
})

//actually adding the text
textAdder(indexjs, commanderFs)
textAdder(indexjs, programText)
textAdder(indexjs, programNameIf)
textAdder(indexjs, makeDirectoryText)
