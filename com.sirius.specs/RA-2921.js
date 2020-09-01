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



describe('RA-2921- Verify whether in Customer info page Customer Type, Marketing Method, Customer Search options are not present for LIT orders', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2921 - Context Switcher - Vector US', function () {
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
        shippingPage.shippingpageNextButton();

        expect(element(by.id("select_customerType")).isPresent()).toBeFalsy();
        expect(element(by.id("select_marketingMethod")).isPresent()).toBeFalsy();
        expect(element(by.xpath('//ion-input[@placeholder="Search Customers"]')).isPresent()).toBeFalsy();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2921 - Context Switcher - Vector CA', function () {
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
        shippingPage.shippingpageNextButton();

        expect(element(by.id("select_customerType")).isPresent()).toBeFalsy();
        expect(element(by.id("select_marketingMethod")).isPresent()).toBeFalsy();
        expect(element(by.xpath('//ion-input[@placeholder="Search Customers"]')).isPresent()).toBeFalsy();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2921 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L617");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();
        shippingPage.shippingpageNextButton();

        expect(element(by.id("select_customerType")).isPresent()).toBeFalsy();
        expect(element(by.id("select_marketingMethod")).isPresent()).toBeFalsy();
        expect(element(by.xpath('//ion-input[@placeholder="Search Customers"]')).isPresent()).toBeFalsy();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

   

});