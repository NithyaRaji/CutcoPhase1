var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
const homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
const browserDetails = require('../com.sirius.reusables/browserDetails.js');
const paymentPage = require('../com.sirius.reusables/paymentPage.js');
var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');
const feedbackPage = require('../com.sirius.reusables/feedbackPage.js');
const { submitProblemContactHighSeverity } = require('../com.sirius.reusables/feedbackPage.js');


describe("RA- 570 - When user clicks on the Feedback link from left nav, ensure that appropriate screen is displayed to Rep. Also ensure appropriate functionality is present on feedback and make sure that Rep is able to submit feedback", function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-570 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        feedbackPage.openHamburgerMenu();
        feedbackPage.problemSeverityLowSelect();
        feedbackPage.submitProblemContactLowSeverity();
        feedbackPage.openHamburgerMenu();
        feedbackPage.problemSeverityMediumSelect();
        feedbackPage.submitProblemContactMediumSeverity();
        feedbackPage.openHamburgerMenu();
        feedbackPage.problemSeverityHighSelect();
        feedbackPage.submitProblemContactHighSeverity();
        feedbackPage.openHamburgerMenu();
        feedbackPage.contactSuggestionSelect();
        feedbackPage.submitSuggestionContact();
        feedbackPage.openHamburgerMenu();
        feedbackPage.needHelpWithAnOrderSelect();
        feedbackPage.submitNeedHelpWithAnOrder();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-570 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        feedbackPage.openHamburgerMenu();
        feedbackPage.problemSeverityLowSelect();
        feedbackPage.submitProblemContactLowSeverity();
        feedbackPage.openHamburgerMenu();
        feedbackPage.problemSeverityMediumSelect();
        feedbackPage.submitProblemContactMediumSeverity();
        feedbackPage.openHamburgerMenu();
        feedbackPage.problemSeverityHighSelect();
        feedbackPage.submitProblemContactHighSeverity();
        feedbackPage.openHamburgerMenu();
        feedbackPage.contactSuggestionSelect();
        feedbackPage.submitSuggestionContact();
        feedbackPage.openHamburgerMenu();
        feedbackPage.needHelpWithAnOrderSelect();
        feedbackPage.submitNeedHelpWithAnOrder();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-570 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        feedbackPage.openHamburgerMenu();
        feedbackPage.problemSeverityLowSelect();
        feedbackPage.submitProblemContactLowSeverity();
        feedbackPage.openHamburgerMenu();
        feedbackPage.problemSeverityMediumSelect();
        feedbackPage.submitProblemContactMediumSeverity();
        feedbackPage.openHamburgerMenu();
        feedbackPage.problemSeverityHighSelect();
        feedbackPage.submitProblemContactHighSeverity();
        feedbackPage.openHamburgerMenu();
        feedbackPage.contactSuggestionSelect();
        feedbackPage.submitSuggestionContact();
        feedbackPage.openHamburgerMenu();
        feedbackPage.needHelpWithAnOrderSelect();
        feedbackPage.submitNeedHelpWithAnOrder();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

});