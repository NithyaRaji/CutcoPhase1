var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var promoPage = require('../com.sirius.reusables/promoPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');


describe('RA-1368 - Verify whether “View [customer first name] Inventory” and Customer Configuration options are not displayed for Promo and LIT orders', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1368 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        expect(element(by.css('.cart-view-customer-inventory.ng-star-inserted')).isPresent()).toBeFalsy();  
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 
    it('RA-1368 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        expect(element(by.css('.cart-view-customer-inventory.ng-star-inserted')).isPresent()).toBeFalsy();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1368 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        expect(element(by.css('.cart-view-customer-inventory.ng-star-inserted')).isPresent()).toBeFalsy();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    


});