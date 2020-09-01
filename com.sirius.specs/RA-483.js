var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('RA-483 - Ensure a logged in Rep is able to see number of read messages indicated within the notification icon & also ensure that when user clicks on notification icon the number of read messages displayed to rep matches the message count indicated on icon ', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-483 - Context Switcher - Cutco Home US', function () {

        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.verifyNotificationMessageCount(); 
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

   it('RA-483 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.verifyNotificationMessageCount();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-483 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.verifyNotificationMessageCount();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut) 
   
});