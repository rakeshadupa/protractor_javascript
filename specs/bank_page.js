
var bank_page = function() {

	this.customerLoginButton = element(by.buttonText("Customer Login"));
	this.branchManagerLogin = element(by.buttonText("Bank Manager Login"));
	this.addCustomer=$('[ng-click="addCust()"]');
	this.firstName=element(by.model("fName"));
	this.lastName=element(by.model("lName"));
	this.postCode=element(by.model("postCd"));
	this.submitAddCustomer=element.all(by.buttonText("Add Customer"));
	
	

	this.clickCustomerLogin = function() {
		this.customerLoginButton.click();
	};
	this.clickBranchManager = function() {
		this.branchManagerLogin.click();

	};
	this.get=function()
	{
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		browser.manage().window().maximize();
	};
	this.clickAddCustomer=function()
	{
		this.addCustomer.click();
		
	};
	this.enterFirstName=function(firstName)
	{
		this.firstName.sendKeys(firstName);
	};
	this.enterLastName=function(lastName)
	{
		this.lastName.sendKeys(lastName);
	};
	this.enterPostCode=function(postCode)
	{
		this.postCode.sendKeys(postCode);
	};
	this.clickSubmitAddcustomer=function()
	{
		this.submitAddCustomer.get(1).click();
	};
	
	
	


};
module.exports = new bank_page();
