var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('RA-547 - Verify whether Rep is able to Logout using the left menu option (Mobile) and click on the user icon present in the right top (Desktop) & verify that user is logged out & shown Login. Check this flow from different screens including checkout screens', function () {
    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-547 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.logout();
        loginApp.loginAppDefault();
        homePage.verfiyReturnHomePage();
        browser.sleep(5000);
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        homePage.logout();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-547 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.logout();
        loginApp.loginAppDefault();
        homePage.verfiyReturnHomePage();
        browser.sleep(5000);
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        homePage.logout();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-547 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.logout();
        loginApp.loginAppDefault();
        homePage.verfiyReturnHomePage();
        browser.sleep(5000);
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        homePage.logout();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});