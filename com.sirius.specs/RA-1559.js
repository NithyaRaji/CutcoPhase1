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


    describe("RA- 1556 - Within the Feedback form page that opens up when Rep clicks on the left nav menu’s ‘Feedback’ link, ensure Instructional text, Feedback Type, Problem Severity, Contact Information, Cancel Button & Send Feedback button", function () {

        beforeEach(function () {
            launcher.launchApplication();
        })

    it('RA-1556 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        feedbackPage.openHamburgerMenu();
        feedbackPage.createAnotherVerification();
        reportInfo.log('Script completed');
        }, testInputs.scriptTimeOut)

    it('RA-1556 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        feedbackPage.openHamburgerMenu();
        feedbackPage.createAnotherVerification();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-1556 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        feedbackPage.openHamburgerMenu();
        feedbackPage.createAnotherVerification();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut) 

});