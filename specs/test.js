// import { element, browser } from "protractor";
var fs=require('fs');


describe('angularjs homepage todo list', function() {

	it('should add a todo', function() {
		 browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		 browser.takeScreenshot().then(function (png) {
			 
			// create stream for writing the image
			var stream = fs.createWriteStream("exception.png");
			// write the stream to local file
			stream.write(new Buffer.from(png, 'base64'));
			// close the stream
			stream.end();
		});
		 
		

	/*	  
		  
		    // abstract writing screen shot to a file
		    function writeScreenShot(data, filename) {
		        var stream = fs.createWriteStream(filename);
		        stream.write(new Buffer(data, 'base64'));
		        stream.end();
		    }
		 
		    // ...
		 
		    // within a test:
		    browser.takeScreenshot().then(function (png) {
		        writeScreenShot(png, 'exception.png');
		    });*/
		 
		//  var sc=browser.takeScreenshot();
		//  console.log(typeof(sc),"********************")
		//  Element(by.mo)
		 
		 		
	});
});
