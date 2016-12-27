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
var triggerDir = function(indexjs,dirpath){
  var text = "\n\nmakeDirectory("+dirpath+");"
  textAdder(indexjs,text+"\n")
}

var triggerFile = function(indexjs, dirpath){
  var text = "\n\nmakeFile("+dirpath+");"
  textAdder(indexjs,text+"\n")
}

var setData = function(inputfile){
  var hold=fs.readFileSync(inputfile, 'utf-8',  function read(err, data){
    if(err){
      throw err;
    }
    content = data
    return content
  })
  return hold
}
var copyFile= function(copypath, newpath){
  fs.createReadStream(copypath).pipe(fs.createWriteStream(newpath))
}
var triggerCopyFile = function(indexjs, copypath, newpath){
  var text = "\n\ncopyFile("+copypath+","+newpath+")"
  textAdder(indexjs,text+"\n")
}


//make out directory
outMostDir="./"+program.name
indexjs=outMostDir+"/index.js"
packjs=outMostDir+"/package.json"
contents="#!/usr/bin/env node"
holdDir=outMostDir+"/hold"
makeDirectory(outMostDir)
makeDirectory(holdDir)
makeFile(indexjs)
makeFile(packjs)
textAdder(indexjs, contents)


//making variables to be added to index.js in the -n directory
  //putting requirements in
  commanderFs = "\nvar program = require('commander');\nvar fs = require('fs');\nvar path=require('path');\nvar homedir=require('homedir');"
  //setting commander program
  programText= "\n\n program\n\t.version('0.0.1')\n\t.option('-n, --name [type]','put in name [madeProg]', 'madeProg')\n\t.parse(process.argv);"
  //if no name input
  programNameIf= "\n\n if (!program.name){\n\t\t console.log(\"since you didnt give a name we set it as: madeProg\")\n\t}else{\n\t\tconsole.log(\"Your new Program Writer is called: \", program.name)\n\t}"
  //makes the make "makeDirectory" function
  makeDirectoryText="\n\nvar makeDirectory= function(dirpath){\n\tif(!fs.existsSync(dirpath)){\n\t\tfs.mkdirSync(dirpath)\n\t}\n}"
  //makes the make file function
  makeFileText="\n\nvar makeFile= function(filepath){\n\tfs.closeSync(fs.openSync(filepath, 'w'))\n}"

  makeCopyFileText = "\n\nvar copyFile = function(copypath, newpath){\n\t fs.createReadStream(copypath).pipe(fs.createWriteStream(newpath))\n}"



//creates outermost path of files copied
absPath=home+program.path
console.log(absPath)


var readDir= function(inputPath,absPath){
  fs.readdir(inputPath, (err,files)=>{
    files.forEach(file=>{
      if (file!="node_modules" && file.toString()!=".DS_STORE" ){
        if (fs.lstatSync(inputPath+"/"+file).isDirectory()==true){
          newPath=inputPath+"/"+file
          createPath=newPath.replace(absPath,'');
          triggerDir(indexjs,"outMostDir+'"+createPath+"'");
          makeDirectory(outMostDir+"/hold"+createPath)
          readDir(newPath,absPath)
        } else {
          newPath=inputPath+"/"+file
          createPath=newPath.replace(absPath,'');
          holdCreateFile=outMostDir+"/hold"+createPath
          holdCreateFileText="./hold"+createPath
          console.log("copyFile=(",newPath,",",holdCreateFile, ")")
          copyFile(newPath, holdCreateFile)
          // console.log(newPath, "newPath")
          // console.log(holdCreateFile, "createPathHold")
          holdCreateFile=holdCreateFile.replace("./fish", ".")
          newPlace=program.name
          newPlace=newPlace.toString()
          finals="\"./\"+"+"program.name+\""+createPath+"\""
          triggerCopyFile(indexjs,"'"+holdCreateFileText+"'",finals)
        }
      }
    })
  })
}


//actually adding the text
textAdder(indexjs, commanderFs)
textAdder(indexjs, "\n\nvar home=homedir()")
textAdder(indexjs, programText)
textAdder(indexjs, programNameIf)
textAdder(indexjs, makeDirectoryText)
textAdder(indexjs, makeFileText)
textAdder(indexjs, makeCopyFileText)
textAdder(indexjs, "\n\nvar textAdder= function(path, contents){\n\tfs.appendFileSync(path, contents);\n}")
textAdder(packjs, "{\n\"name\":\""+program.name+"\",\n\"version\":\"1.0.0\",\n\"description\":\"\",\n\"main\":\"index.js\",\n\"bin\":{\n\t\""+program.name+"\":\"./index.js\"\n},\n\"scripts\":{\n\t\"test\": \"echo\\\"Error: not test specified\\\" && exit 1\"\n},\n\"author\":\"yourname\",\n\"author\":\"\",\n\"liscense\":\"ISC\",\n\"dependencies\": {\n\t\"commander\":\"^2.9.0\",\n\t\"fs\":\"0.0.1-security\",\n\t\"homedir\":\"^0.6.0\",\n\t\"path\":\"^0.12.7\"\n\t}\n}")



textAdder(indexjs, "\noutMostDir=\"./\"+program.name")
textAdder(indexjs, "\nmakeDirectory(outMostDir)")
readDir(absPath, absPath)
