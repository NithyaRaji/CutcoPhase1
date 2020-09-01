var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var paymentobj = require('../com.sirius.pageObjects/paymentPage_po.js');
var promoPage = require('../com.sirius.reusables/promoPage.js');

describe('Verify whether Spread Pay & Tax Exemption option is not available for Promotional orders', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2966 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        promoPage.verifyPromoPage();
        browser.refresh();
        promoPage.verifyPromoPage();
        
        

        utilities.pageWaitSec(10);

       
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2966 - Context Switcher - Vector CA', function () {

        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        promoPage.verifyPromoPage();
        browser.refresh();
        promoPage.verifyPromoPage();
        
        

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2966 - Context Switcher - Cutco US', function () {

        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        promoPage.verifyPromoPage();
        browser.refresh();
        promoPage.verifyPromoPage();
        


       
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    
    

    

});