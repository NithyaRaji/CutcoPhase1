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



describe('RA-2967- Verify whether "Email Configuration" option is not available for Promo orders and only one receipt download option titled “Download Receipt” is preset to download the receipt in the Order confirmation page', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2967 - Context Switcher - Vector US', function () {
        loginApp.LoginAppAccType("fs");
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
        paymentpage.cardDetailsCheckout1(testInputs.MasterCard);
        paymentpage.SignAuthorize();
        paymentpage.PlaceOrderButtonClick();
        
        expect(element(by.css("#btn_configureMail_ocp")).isPresent()).toBeFalsy();
        expect(element(by.css("#btn_customerReceipt_ocp")).isPresent()).toBeFalsy();
        expect(element(by.css("#btn_myReceipt_ocp")).isDisplayed());
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-2967 - Context Switcher - Vector CA', function () {
        loginApp.LoginAppAccType("fs");;
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
        paymentpage.cardDetailsCheckout1(testInputs.MasterCard);
        paymentpage.SignAuthorize();
        paymentpage.PlaceOrderButtonClick();
        
        expect(element(by.css("#btn_configureMail_ocp")).isPresent()).toBeFalsy();
        expect(element(by.css("#btn_customerReceipt_ocp")).isPresent()).toBeFalsy();
        expect(element(by.css("#btn_myReceipt_ocp")).isDisplayed());
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-2967 - Context Switcher - Cutco US', function () {
        loginApp.LoginAppAccType("fs");;
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
        paymentpage.cardDetailsCheckout1(testInputs.MasterCard);
        paymentpage.SignAuthorize();
        paymentpage.PlaceOrderButtonClick();
        
        expect(element(by.css("#btn_configureMail_ocp")).isPresent()).toBeFalsy();
        expect(element(by.css("#btn_customerReceipt_ocp")).isPresent()).toBeFalsy();
        expect(element(by.css("#btn_myReceipt_ocp")).isDisplayed());
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
   

});