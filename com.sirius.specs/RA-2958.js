var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var addressValidation = require('../com.sirius.reusables/addressValidation.js')
var searchPage = require('../com.sirius.reusables/search.js');
var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('Verify whether Engraving Location is the only order config category available for promotional orders', function () {

    beforeEach(function () {
       // protractor.browser.restart();
        launcher.launchApplication();
    })

    it('RA-2958 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        
        shoppingCartPage.configSelect();
        shoppingCartPage.verifyPromoConfigVectorUS();
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-2958 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
        utilities.pageWaitSec(3);
        shoppingCartPage.verifyPromoConfigVectorCA();

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2958 - Context Switcher - Cutco at Home US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();

        shoppingCartPage.configSelect();
        utilities.pageWaitSec(3);
        shoppingCartPage.verifyPromoConfigCutcoUS();
        
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    

    

});