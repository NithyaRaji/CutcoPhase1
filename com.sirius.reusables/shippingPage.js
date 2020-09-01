var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('./utilities.js');
var shippingPageObj = require('../com.sirius.pageObjects/shippingPage_po.js');
var testInputs = require('../com.sirius.testData/data.json');
var paymentPageObj = require('../com.sirius.pageObjects/paymentPage_po.js');

// const {
//     expect
// } = require("chai");
// const {
//     assert
// } = require("chai");
var EC = protractor.ExpectedConditions;
var waitTimeout = 200000;

let shippingPage = function () {

    this.shippingpageNextButton = function () {
        var shippingPagePO = new shippingPageObj();
        var paymentPagePO = new paymentPageObj();
        // utilities.waitForElement(paymentPagePO.groundShippingMethod, waitTimeout);
        // utilities.HighlightElement(paymentPagePO.groundShippingMethod);
        utilities.waitForElement(shippingPagePO.nextButton, waitTimeout);
        utilities.scrollTo(shippingPagePO.nextButton);
        utilities.HighlightElement(shippingPagePO.nextButton);
        shippingPagePO.nextButton.click();
        // browser.executeScript("document.getElementById('btn_next_sp').click()");
        utilities.pageWaitSec(5);
        utilities.scrollTo(paymentPagePO.billingAddressSection);
        utilities.waitUtilElementPresent(paymentPagePO.billingAddressSection, waitTimeout);
        browser.sleep(5000);
        reportInfo.log("Next button is clicked in the shipping page")
        utilities.HighlightElement(paymentPagePO.billingAddressSection);
    }
}
module.exports = new shippingPage();