import { element, by } from "protractor";

describe(
		"way2automation",
		function() {
			it(
					"registration should  be done",
					function() {
						// return;
						browser.manage().window().maximize();
						browser
								.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
						element(by.model("Auth.user.name")).sendKeys("angular");
						element(by.model("Auth.user.password")).sendKeys(
								"password");

						element(by.model("model[options.key]")).sendKeys(
								"angular");
						$('[ng-click="Auth.login()"]').click();
						browser.sleep(3000);
						element(by.linkText("Logout")).click();

						browser.sleep(3000);
						

					})
			it(
					"multiform",
					function() {
						return;
						browser
								.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile");
						element(by.model("formData.name")).sendKeys("rakesh");
						element(by.model("formData.email")).sendKeys(
								"rakeshadupa@gmail.com");
						element(by.partialLinkText("Next Section")).click();
						$('[value="ps"]').click();
						element(by.partialLinkText("Next Section")).click();
						element(by.buttonText("Submit")).click();
						browser.switchTo().alert().accept();

					})
			
					it("checkboxes", function() {
						
						
						element(by.model("data.root")).cl
						
						
						
						
						
						
					})

		})
