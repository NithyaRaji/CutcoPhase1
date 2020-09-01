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



describe('RA-2920 - Verify whether shopping cart functionality Save Order, Checkout follows, Empty Cart remains same for both literature and regular order', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2920 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L216");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.clickEmptyCartLink();
        shoppingCartPage.EmptyCartSavethisOrderYes();
        shoppingCartPage.emptycartsaveOrder();

        searchPage.searchWithSkuID("L216");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();

        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L216");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();
        shippingPage.shippingpageNextButton();
        paymentpage.saveOrderBillingPage();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
/*
    it('RA-2920 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L49");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.clickEmptyCartLink();
        shoppingCartPage.EmptyCartSavethisOrderYes();
        shoppingCartPage.emptycartsaveOrder();

        searchPage.searchWithSkuID("L49");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();

        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L49");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();
        shippingPage.shippingpageNextButton();
        paymentpage.saveOrderBillingPage();


        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2920 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L617");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.clickEmptyCartLink();
        shoppingCartPage.EmptyCartSavethisOrderYes();
        shoppingCartPage.emptycartsaveOrder();

        searchPage.searchWithSkuID("L617");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();

        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L617");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();
        shippingPage.shippingpageNextButton();
        paymentpage.saveOrderBillingPage();


        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

   */

});