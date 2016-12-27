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

var copyFile = function(copypath, newpath){
	 fs.createReadStream(copypath).pipe(fs.createWriteStream(newpath))
}

var textAdder= function(path, contents){
	fs.appendFileSync(path, contents);
}
outMostDir="./"+program.name
makeDirectory(outMostDir)

copyFile('./hold/.gitignore',"./"+program.name+"/.gitignore")


copyFile('./hold/Procfile',"./"+program.name+"/Procfile")


copyFile('./hold/README.md',"./"+program.name+"/README.md")


makeDirectory(outMostDir+'/client');


copyFile('./hold/gruntFile.js',"./"+program.name+"/gruntFile.js")


copyFile('./hold/package.json',"./"+program.name+"/package.json")


makeDirectory(outMostDir+'/server');


makeDirectory(outMostDir+'/client/scripts');


makeDirectory(outMostDir+'/client/styles');


makeDirectory(outMostDir+'/client/views');


copyFile('./hold/server/app.js',"./"+program.name+"/server/app.js")


makeDirectory(outMostDir+'/server/models');


makeDirectory(outMostDir+'/server/public');


makeDirectory(outMostDir+'/server/routes');


makeDirectory(outMostDir+'/server/utils');


copyFile('./hold/client/scripts/app.js',"./"+program.name+"/client/scripts/app.js")


makeDirectory(outMostDir+'/client/scripts/controllers');


makeDirectory(outMostDir+'/client/scripts/factories');


copyFile('./hold/client/styles/style.css',"./"+program.name+"/client/styles/style.css")


copyFile('./hold/client/views/admin.html',"./"+program.name+"/client/views/admin.html")


copyFile('./hold/client/views/index.html',"./"+program.name+"/client/views/index.html")


copyFile('./hold/client/views/login.html',"./"+program.name+"/client/views/login.html")


makeDirectory(outMostDir+'/client/views/partials');


copyFile('./hold/client/views/registration.html',"./"+program.name+"/client/views/registration.html")


copyFile('./hold/server/models/admin.js',"./"+program.name+"/server/models/admin.js")


copyFile('./hold/server/models/contact.js',"./"+program.name+"/server/models/contact.js")


copyFile('./hold/server/models/default.js',"./"+program.name+"/server/models/default.js")


makeDirectory(outMostDir+'/server/public/scripts');


makeDirectory(outMostDir+'/server/public/styles');


makeDirectory(outMostDir+'/server/public/vendors');


makeDirectory(outMostDir+'/server/public/views');


copyFile('./hold/server/routes/admin.js',"./"+program.name+"/server/routes/admin.js")


copyFile('./hold/server/routes/default.js',"./"+program.name+"/server/routes/default.js")


copyFile('./hold/server/routes/index.js',"./"+program.name+"/server/routes/index.js")


copyFile('./hold/server/routes/register.js',"./"+program.name+"/server/routes/register.js")


copyFile('./hold/server/routes/submit.js',"./"+program.name+"/server/routes/submit.js")


copyFile('./hold/server/utils/db.js',"./"+program.name+"/server/utils/db.js")


copyFile('./hold/server/utils/passport.js',"./"+program.name+"/server/utils/passport.js")


copyFile('./hold/client/scripts/controllers/admincontrol.js',"./"+program.name+"/client/scripts/controllers/admincontrol.js")


copyFile('./hold/client/scripts/controllers/inputcontrol.js',"./"+program.name+"/client/scripts/controllers/inputcontrol.js")


copyFile('./hold/client/scripts/controllers/logincontrol.js',"./"+program.name+"/client/scripts/controllers/logincontrol.js")


copyFile('./hold/client/scripts/controllers/registrationcontrol.js',"./"+program.name+"/client/scripts/controllers/registrationcontrol.js")


copyFile('./hold/client/scripts/factories/adminservice.js',"./"+program.name+"/client/scripts/factories/adminservice.js")


copyFile('./hold/client/scripts/factories/clientservice.js',"./"+program.name+"/client/scripts/factories/clientservice.js")


copyFile('./hold/client/scripts/factories/registrationfactory.js',"./"+program.name+"/client/scripts/factories/registrationfactory.js")


copyFile('./hold/client/views/partials/emailList.html',"./"+program.name+"/client/views/partials/emailList.html")


copyFile('./hold/client/views/partials/graphimg.jpg',"./"+program.name+"/client/views/partials/graphimg.jpg")


copyFile('./hold/client/views/partials/input.html',"./"+program.name+"/client/views/partials/input.html")


copyFile('./hold/client/views/partials/loginForm.html',"./"+program.name+"/client/views/partials/loginForm.html")


copyFile('./hold/client/views/partials/newmain.html',"./"+program.name+"/client/views/partials/newmain.html")


copyFile('./hold/client/views/partials/registrationForm.html',"./"+program.name+"/client/views/partials/registrationForm.html")


copyFile('./hold/client/views/partials/results.html',"./"+program.name+"/client/views/partials/results.html")


copyFile('./hold/client/views/partials/setVariables.html',"./"+program.name+"/client/views/partials/setVariables.html")


copyFile('./hold/server/public/scripts/app.min.js',"./"+program.name+"/server/public/scripts/app.min.js")


copyFile('./hold/server/public/styles/style.css',"./"+program.name+"/server/public/styles/style.css")


makeDirectory(outMostDir+'/server/public/vendors/angular');


makeDirectory(outMostDir+'/server/public/vendors/angular-animate');


makeDirectory(outMostDir+'/server/public/vendors/angular-aria');


makeDirectory(outMostDir+'/server/public/vendors/angular-google-chart');


makeDirectory(outMostDir+'/server/public/vendors/angular-material');


makeDirectory(outMostDir+'/server/public/vendors/angular-messages');


makeDirectory(outMostDir+'/server/public/vendors/angular-route');


copyFile('./hold/server/public/views/admin.html',"./"+program.name+"/server/public/views/admin.html")


copyFile('./hold/server/public/views/index.html',"./"+program.name+"/server/public/views/index.html")


copyFile('./hold/server/public/views/login.html',"./"+program.name+"/server/public/views/login.html")


makeDirectory(outMostDir+'/server/public/views/partials');


copyFile('./hold/server/public/views/registration.html',"./"+program.name+"/server/public/views/registration.html")


copyFile('./hold/server/public/vendors/angular/LICENSE.md',"./"+program.name+"/server/public/vendors/angular/LICENSE.md")


copyFile('./hold/server/public/vendors/angular/README.md',"./"+program.name+"/server/public/vendors/angular/README.md")


copyFile('./hold/server/public/vendors/angular/angular-csp.css',"./"+program.name+"/server/public/vendors/angular/angular-csp.css")


copyFile('./hold/server/public/vendors/angular/angular.js',"./"+program.name+"/server/public/vendors/angular/angular.js")


copyFile('./hold/server/public/vendors/angular/angular.min.js',"./"+program.name+"/server/public/vendors/angular/angular.min.js")


copyFile('./hold/server/public/vendors/angular/angular.min.js.gzip',"./"+program.name+"/server/public/vendors/angular/angular.min.js.gzip")


copyFile('./hold/server/public/vendors/angular/angular.min.js.map',"./"+program.name+"/server/public/vendors/angular/angular.min.js.map")


copyFile('./hold/server/public/vendors/angular/bower.json',"./"+program.name+"/server/public/vendors/angular/bower.json")


copyFile('./hold/server/public/vendors/angular/index.js',"./"+program.name+"/server/public/vendors/angular/index.js")


copyFile('./hold/server/public/vendors/angular/package.json',"./"+program.name+"/server/public/vendors/angular/package.json")


copyFile('./hold/server/public/vendors/angular-animate/LICENSE.md',"./"+program.name+"/server/public/vendors/angular-animate/LICENSE.md")


copyFile('./hold/server/public/vendors/angular-animate/README.md',"./"+program.name+"/server/public/vendors/angular-animate/README.md")


copyFile('./hold/server/public/vendors/angular-animate/angular-animate.js',"./"+program.name+"/server/public/vendors/angular-animate/angular-animate.js")


copyFile('./hold/server/public/vendors/angular-animate/angular-animate.min.js',"./"+program.name+"/server/public/vendors/angular-animate/angular-animate.min.js")


copyFile('./hold/server/public/vendors/angular-animate/angular-animate.min.js.map',"./"+program.name+"/server/public/vendors/angular-animate/angular-animate.min.js.map")


copyFile('./hold/server/public/vendors/angular-animate/bower.json',"./"+program.name+"/server/public/vendors/angular-animate/bower.json")


copyFile('./hold/server/public/vendors/angular-animate/index.js',"./"+program.name+"/server/public/vendors/angular-animate/index.js")


copyFile('./hold/server/public/vendors/angular-animate/package.json',"./"+program.name+"/server/public/vendors/angular-animate/package.json")


copyFile('./hold/server/public/vendors/angular-aria/LICENSE.md',"./"+program.name+"/server/public/vendors/angular-aria/LICENSE.md")


copyFile('./hold/server/public/vendors/angular-aria/README.md',"./"+program.name+"/server/public/vendors/angular-aria/README.md")


copyFile('./hold/server/public/vendors/angular-aria/angular-aria.js',"./"+program.name+"/server/public/vendors/angular-aria/angular-aria.js")


copyFile('./hold/server/public/vendors/angular-aria/angular-aria.min.js',"./"+program.name+"/server/public/vendors/angular-aria/angular-aria.min.js")


copyFile('./hold/server/public/vendors/angular-aria/angular-aria.min.js.map',"./"+program.name+"/server/public/vendors/angular-aria/angular-aria.min.js.map")


copyFile('./hold/server/public/vendors/angular-aria/bower.json',"./"+program.name+"/server/public/vendors/angular-aria/bower.json")


copyFile('./hold/server/public/vendors/angular-aria/index.js',"./"+program.name+"/server/public/vendors/angular-aria/index.js")


copyFile('./hold/server/public/vendors/angular-aria/package.json',"./"+program.name+"/server/public/vendors/angular-aria/package.json")


copyFile('./hold/server/public/vendors/angular-google-chart/CHANGELOG.md',"./"+program.name+"/server/public/vendors/angular-google-chart/CHANGELOG.md")


copyFile('./hold/server/public/vendors/angular-google-chart/CONTRIBUTING.md',"./"+program.name+"/server/public/vendors/angular-google-chart/CONTRIBUTING.md")


copyFile('./hold/server/public/vendors/angular-google-chart/Gruntfile.js',"./"+program.name+"/server/public/vendors/angular-google-chart/Gruntfile.js")


copyFile('./hold/server/public/vendors/angular-google-chart/README.md',"./"+program.name+"/server/public/vendors/angular-google-chart/README.md")


copyFile('./hold/server/public/vendors/angular-google-chart/bower.json',"./"+program.name+"/server/public/vendors/angular-google-chart/bower.json")


makeDirectory(outMostDir+'/server/public/vendors/angular-google-chart/images');


copyFile('./hold/server/public/vendors/angular-google-chart/index.html',"./"+program.name+"/server/public/vendors/angular-google-chart/index.html")


copyFile('./hold/server/public/vendors/angular-google-chart/karma.conf.js',"./"+program.name+"/server/public/vendors/angular-google-chart/karma.conf.js")


copyFile('./hold/server/public/vendors/angular-google-chart/ng-google-chart.js',"./"+program.name+"/server/public/vendors/angular-google-chart/ng-google-chart.js")


copyFile('./hold/server/public/vendors/angular-google-chart/ng-google-chart.min.js',"./"+program.name+"/server/public/vendors/angular-google-chart/ng-google-chart.min.js")


copyFile('./hold/server/public/vendors/angular-google-chart/package.json',"./"+program.name+"/server/public/vendors/angular-google-chart/package.json")


makeDirectory(outMostDir+'/server/public/vendors/angular-google-chart/partials');


copyFile('./hold/server/public/vendors/angular-google-chart/sample.js',"./"+program.name+"/server/public/vendors/angular-google-chart/sample.js")


makeDirectory(outMostDir+'/server/public/vendors/angular-google-chart/src');


copyFile('./hold/server/public/vendors/angular-google-chart/style.css',"./"+program.name+"/server/public/vendors/angular-google-chart/style.css")


makeDirectory(outMostDir+'/server/public/vendors/angular-google-chart/test');


copyFile('./hold/server/public/vendors/angular-material/CHANGELOG.md',"./"+program.name+"/server/public/vendors/angular-material/CHANGELOG.md")


copyFile('./hold/server/public/vendors/angular-material/LICENSE',"./"+program.name+"/server/public/vendors/angular-material/LICENSE")


copyFile('./hold/server/public/vendors/angular-material/README.md',"./"+program.name+"/server/public/vendors/angular-material/README.md")


copyFile('./hold/server/public/vendors/angular-material/angular-material-mocks.js',"./"+program.name+"/server/public/vendors/angular-material/angular-material-mocks.js")


copyFile('./hold/server/public/vendors/angular-material/angular-material.css',"./"+program.name+"/server/public/vendors/angular-material/angular-material.css")


copyFile('./hold/server/public/vendors/angular-material/angular-material.js',"./"+program.name+"/server/public/vendors/angular-material/angular-material.js")


copyFile('./hold/server/public/vendors/angular-material/angular-material.min.css',"./"+program.name+"/server/public/vendors/angular-material/angular-material.min.css")


copyFile('./hold/server/public/vendors/angular-material/angular-material.min.js',"./"+program.name+"/server/public/vendors/angular-material/angular-material.min.js")


copyFile('./hold/server/public/vendors/angular-material/angular-material.scss',"./"+program.name+"/server/public/vendors/angular-material/angular-material.scss")


copyFile('./hold/server/public/vendors/angular-material/bower.json',"./"+program.name+"/server/public/vendors/angular-material/bower.json")


copyFile('./hold/server/public/vendors/angular-material/index.js',"./"+program.name+"/server/public/vendors/angular-material/index.js")


makeDirectory(outMostDir+'/server/public/vendors/angular-material/layouts');


makeDirectory(outMostDir+'/server/public/vendors/angular-material/modules');


copyFile('./hold/server/public/vendors/angular-material/package.json',"./"+program.name+"/server/public/vendors/angular-material/package.json")


copyFile('./hold/server/public/vendors/angular-messages/LICENSE.md',"./"+program.name+"/server/public/vendors/angular-messages/LICENSE.md")


copyFile('./hold/server/public/vendors/angular-messages/README.md',"./"+program.name+"/server/public/vendors/angular-messages/README.md")


copyFile('./hold/server/public/vendors/angular-messages/angular-messages.js',"./"+program.name+"/server/public/vendors/angular-messages/angular-messages.js")


copyFile('./hold/server/public/vendors/angular-messages/angular-messages.min.js',"./"+program.name+"/server/public/vendors/angular-messages/angular-messages.min.js")


copyFile('./hold/server/public/vendors/angular-messages/angular-messages.min.js.map',"./"+program.name+"/server/public/vendors/angular-messages/angular-messages.min.js.map")


copyFile('./hold/server/public/vendors/angular-messages/bower.json',"./"+program.name+"/server/public/vendors/angular-messages/bower.json")


copyFile('./hold/server/public/vendors/angular-messages/index.js',"./"+program.name+"/server/public/vendors/angular-messages/index.js")


copyFile('./hold/server/public/vendors/angular-messages/package.json',"./"+program.name+"/server/public/vendors/angular-messages/package.json")


copyFile('./hold/server/public/vendors/angular-route/LICENSE.md',"./"+program.name+"/server/public/vendors/angular-route/LICENSE.md")


copyFile('./hold/server/public/vendors/angular-route/README.md',"./"+program.name+"/server/public/vendors/angular-route/README.md")


copyFile('./hold/server/public/vendors/angular-route/angular-route.js',"./"+program.name+"/server/public/vendors/angular-route/angular-route.js")


copyFile('./hold/server/public/vendors/angular-route/angular-route.min.js',"./"+program.name+"/server/public/vendors/angular-route/angular-route.min.js")


copyFile('./hold/server/public/vendors/angular-route/angular-route.min.js.map',"./"+program.name+"/server/public/vendors/angular-route/angular-route.min.js.map")


copyFile('./hold/server/public/vendors/angular-route/bower.json',"./"+program.name+"/server/public/vendors/angular-route/bower.json")


copyFile('./hold/server/public/vendors/angular-route/index.js',"./"+program.name+"/server/public/vendors/angular-route/index.js")


copyFile('./hold/server/public/vendors/angular-route/package.json',"./"+program.name+"/server/public/vendors/angular-route/package.json")


copyFile('./hold/server/public/views/partials/emailList.html',"./"+program.name+"/server/public/views/partials/emailList.html")


copyFile('./hold/server/public/views/partials/graphimg.jpg',"./"+program.name+"/server/public/views/partials/graphimg.jpg")


copyFile('./hold/server/public/views/partials/graphimg.tiff',"./"+program.name+"/server/public/views/partials/graphimg.tiff")


copyFile('./hold/server/public/views/partials/input.html',"./"+program.name+"/server/public/views/partials/input.html")


copyFile('./hold/server/public/views/partials/loginForm.html',"./"+program.name+"/server/public/views/partials/loginForm.html")


copyFile('./hold/server/public/views/partials/newmain.html',"./"+program.name+"/server/public/views/partials/newmain.html")


copyFile('./hold/server/public/views/partials/registrationForm.html',"./"+program.name+"/server/public/views/partials/registrationForm.html")


copyFile('./hold/server/public/views/partials/results.html',"./"+program.name+"/server/public/views/partials/results.html")


copyFile('./hold/server/public/views/partials/setVariables.html',"./"+program.name+"/server/public/views/partials/setVariables.html")
