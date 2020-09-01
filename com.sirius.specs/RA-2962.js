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


describe('RA-2962 - Verify whether Order Adjustment, Round up for Charity, Customer not present checkbox, Terms & conditions link and "Bonus Saving" word not present in Order review page for Promo orders', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2962 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
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
 
    it('RA-2962 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
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


    it('RA-2962 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
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
    


});