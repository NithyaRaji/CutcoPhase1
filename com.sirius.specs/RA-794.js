var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-794 - When Rep has >1 contexts mapped with profile, Rep attempts to switch Context; in Change Context modal, Rep selects new context, verify that the Rep is taken to new context Home page', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-794 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.checkCompanyNameSelected();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-794 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.checkCompanyNameSelected();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)
    
    it('RA-794 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.checkCompanyNameSelected();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});