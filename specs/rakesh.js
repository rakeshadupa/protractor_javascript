// var pr=require('protractor');
"use strict";

describe('testt', function() {
    
    it('testing', function() {
        
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
      var ele=  element(by.model('Auth.user.name'));
      
        setElement = function(value) {
            ele.sendKeys(value);
        };
        setElement('sdfasdf');
        browser.sleep(3000);
    
    this.clickelement = function(element) {
         element.click();
    };
    });
    
        
});
    




