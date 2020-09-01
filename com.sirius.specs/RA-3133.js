var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');


describe('RA-3133 - Verify whether Bonus Limit Configuration section is not added to the Order Configuration screen for LIT and PROMO orders', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3133 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
    
        expect(element(by.xpath('//ion-range')).isPresent()).toBeFalsy();
        shoppingCartPage.configCancel();

        homePage.selectLITFromLeftNavigation();
        shoppingCartPage.configSelect();
        expect(element(by.xpath('//ion-range')).isPresent()).toBeFalsy();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 
    it('RA-3133 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
    
        expect(element(by.xpath('//ion-range')).isPresent()).toBeFalsy();
        shoppingCartPage.configCancel();

        homePage.selectLITFromLeftNavigation();
        shoppingCartPage.configSelect();
        expect(element(by.xpath('//ion-range')).isPresent()).toBeFalsy();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3133 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
    
        expect(element(by.xpath('//ion-range')).isPresent()).toBeFalsy();
        shoppingCartPage.configCancel();

        homePage.selectLITFromLeftNavigation();
        shoppingCartPage.configSelect();
        expect(element(by.xpath('//ion-range')).isPresent()).toBeFalsy();
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    


});