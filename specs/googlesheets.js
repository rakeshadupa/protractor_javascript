var a=require('./index.js')
// import { element, by } from "protractor";

var data=function(){
        return new Promise(function(resolve){
            a.demo(function(response){
                  var myJSON = JSON.stringify(response[0]);
                  var first=response[0];
                  // console.log(typeof(response));
                  // console.log(typeof(response[0]));
                  // console.log(typeof(response[0][0]));
            return resolve(response);
            });
        });
   

}

describe('Name of the group', function() {
      var obj={};
it('sadcfasdf',  async function() {
      var sheetData=await data();
    
      for (let i = 0;i < sheetData[0].length; i++) 
      {
            // console.log('key== ',sheetData[0][i]);
            obj[sheetData[0][i]]=sheetData[1][i]
      
      }
      // console.log(obj);
      
});

          
          it('testGoogleSheetData',  function() {
                console.log(obj);
                
            

                browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
                
                  
                  
                  element(by.model('Auth.user.name')).sendKeys(obj.service);
                  element(by.id('formly_1_input_username_0')).sendKeys(obj.category);



                browser.sleep(3000);
          });
                  
});

  

