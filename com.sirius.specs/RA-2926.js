var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');



describe('RA-2926- Verify whether Tax Exemption option is not available for LIT orders and Number of Payment option is restricted to 1 Payment in Shipping and Payment page', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2926 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L216");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();

        expect(element(by.xpath("//ion-text[contains(text(),'1 Payment')]")).isDisplayed());
        expect(element(by.xpath("//ion-text[contains(text(),'2 Payment')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//ion-text[contains(text(),'3 Payment')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath(".//*[@id='radio_taxableStatus_sp']//ion-item[contains(.,'Tax Exempt')]")).isPresent()).toBeFalsy();

        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-2926 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L49");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();

        expect(element(by.xpath("//ion-text[contains(text(),'1 Payment')]")).isDisplayed());
        expect(element(by.xpath("//ion-text[contains(text(),'2 Payment')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//ion-text[contains(text(),'3 Payment')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath(".//*[@id='radio_taxableStatus_sp']//ion-item[contains(.,'Tax Exempt')]")).isPresent()).toBeFalsy();

        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-2926 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L626");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();

        expect(element(by.xpath("//ion-text[contains(text(),'1 Payment')]")).isDisplayed());
        expect(element(by.xpath("//ion-text[contains(text(),'2 Payment')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//ion-text[contains(text(),'3 Payment')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath(".//*[@id='radio_taxableStatus_sp']//ion-item[contains(.,'Tax Exempt')]")).isPresent()).toBeFalsy();

        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
   

});