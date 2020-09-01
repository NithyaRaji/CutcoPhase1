
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage =  require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-543 - In mobile & Ipad (Portrait) verify that Left menu options display in correct order when Rep clicks Left Hamburger from dashboard screen. Also in desktop, Ipad (Landscape), ensure that menu options are by default displayed in left panel in correct order', function () {
    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-543 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.LeftNavigationMenuValidation();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

    it('RA-543 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.LeftNavigationMenuValidation();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

    it('RA-543 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.LeftNavigationMenuValidation();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)
    
});