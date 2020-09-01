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



describe('RA-2927- Verify whether Order Adjustment, Round up for Charity, Customer not present checkbox, Terms & conditions link options are not present in Order review page and "Bonus Saving" word not present in Order review page for LIT orders', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2927 - Context Switcher - Vector US', function () {
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
        paymentpage.clickNextButton1();

        expect(element(by.xpath("//ion-label[contains(text(),'Adjust Total')]/ancestor::ion-item//ion-checkbox")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//ion-label[contains(text(),'Round Up')]/ancestor::ion-item//ion-checkbox")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//ion-label[contains(text(),'Customer not present')]/ancestor::ion-item//ion-checkbox")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'Bonus Savings')]")).isPresent()).toBeFalsy();
        //expect(by.xpath().isPresent()).toBeFalsy();

        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
/*

    it('RA-2927 - Context Switcher - Vector CA', function () {
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
        paymentpage.clickNextButton1();

        expect(element(by.xpath("//ion-label[contains(text(),'Adjust Total')]/ancestor::ion-item//ion-checkbox")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//ion-label[contains(text(),'Round Up')]/ancestor::ion-item//ion-checkbox")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//ion-label[contains(text(),'Customer not present')]/ancestor::ion-item//ion-checkbox")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'Bonus Savings')]")).isPresent()).toBeFalsy();
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-2927 - Context Switcher - Cutco US', function () {
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
        paymentpage.clickNextButton1();

        expect(element(by.xpath("//ion-label[contains(text(),'Adjust Total')]/ancestor::ion-item//ion-checkbox")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//ion-label[contains(text(),'Round Up')]/ancestor::ion-item//ion-checkbox")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//ion-label[contains(text(),'Customer not present')]/ancestor::ion-item//ion-checkbox")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'Bonus Savings')]")).isPresent()).toBeFalsy();
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
   */

});