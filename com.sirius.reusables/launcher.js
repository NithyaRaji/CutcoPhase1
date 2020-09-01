var browserDetails = require('./browserDetails.js');
var testInputs = require('../com.sirius.testData/data.json');
var utilities = require('../com.sirius.reusables/utilities.js');

let launcher = function () {

	this.launchApplication = function () {
		var currentBrowserName = browserDetails.browserName;
		var currentDeviceName = browserDetails.executionName;
		// console.log("currentBrowserName : ", currentBrowserName);
		// console.log("currentDeviceName : ", currentDeviceName);
		switch (currentBrowserName) {
			case 'chrome':
				browser.driver.manage().window().maximize();
				browser.driver.get(testInputs.baseUrl);
				//browser.waitForAngularEnabled(false);
				allure.addArgument("Browser Name ", currentBrowserName);
				allure.epic(currentBrowserName);
				break;
			case 'Safari':
				browser.driver.manage().window().maximize();
				//browser.waitForAngularEnabled(false);
				browser.driver.get(testInputs.baseUrl);
				allure.addArgument("Browser Name ", currentBrowserName);
				allure.epic(currentBrowserName);
				break;
			case 'firefox':
				browser.driver.manage().window().maximize();
				//browser.waitForAngularEnabled(false);
				browser.driver.get(testInputs.baseUrl);
				allure.addArgument("Browser Name ", currentBrowserName);
				allure.epic(currentBrowserName);
				break;
			case 'edge':
				browser.driver.manage().window().maximize();
				//browser.waitForAngularEnabled(false);
				browser.driver.get(testInputs.baseUrl);
				allure.addArgument("Browser Name ", currentBrowserName);
				allure.epic(currentBrowserName);
				break;
			case '':
				if (currentDeviceName == 'iphone') {
					browser.waitForAngularEnabled(false);
					allure.addArgument("Browser Name ", currentDeviceName);
					allure.epic(currentDeviceName);
				} else if (currentDeviceName == 'ipad') {
					utilities.log('iPad Execution');
					browser.waitForAngularEnabled(false);
					allure.addArgument("Browser Name ", currentDeviceName);
					allure.epic(currentDeviceName);
				} else { }
				break;
			case 'android':
				browser.waitForAngularEnabled(false);
				allure.addArgument("Browser Name ", currentDeviceName);
				allure.epic(currentDeviceName);
			default:
				break;
		}
	}
};

function switchAppContext(context) {
	browser.driver.getCurrentContext().then(function (currentContext) {
		// console.log("Current context is: " + currentContext);
	});
	browser.driver.selectContext(context).then(function () {
		browser.driver.getCurrentContext().then(function (newContext) {
			// console.log("Switched context to: " + newContext);
			return newContext;
		});
	});
}



module.exports = new launcher();