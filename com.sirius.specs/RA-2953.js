var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var promoPage = require('../com.sirius.reusables/promoPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('Verify whether the shop view is different for Promotional order from Regular order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2953 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        promoPage.verifyPromoPage();

        

        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-2953 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        promoPage.verifyPromoPage();
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2953 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        promoPage.verifyPromoPage();

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});

