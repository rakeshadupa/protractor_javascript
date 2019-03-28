var hook = require('./bank_page.js');
describe("create customer", function() {

	it("customer shoould be created", function() {

		hook.get();
		hook.clickBranchManager();
		/*hook.clickAddCustomer();
		hook.enterFirstName("rakesh");
		hook.enterLastName("justin");
		hook.enterPostCode("12345");
		hook.clickSubmitAddcustomer();
		browser.switchTo().alert().accept();*/

		$('[ng-click="openAccount()"]').click();
		console.log('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
		var count =element.all(by.model("custId")).count();
		console.log(count);
		
		browser.sleep(3000)

	})
})