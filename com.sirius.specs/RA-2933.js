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
const { selectTaxExemptCheckout } = require('../com.sirius.reusables/paymentPage.js');



describe('RA-2933- Verify whether Email Configuration option is not available for LIT orders and only one receipt download option titled “Download Receipt” is preset to download the receipt', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2933 - Context Switcher - Vector US', function () {
        loginApp.LoginAppAccType("psm");
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L15");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton1();
        paymentpage.clickNextButton();
        paymentpage.cardDetailsCheckout1(testInputs.MasterCard);
        paymentpage.SignAuthorize();
        paymentpage.PlaceOrderButtonClick();
        
        expect(element(by.css("#btn_configureMail_ocp")).isPresent()).toBeFalsy();
        expect(element(by.css("#btn_customerReceipt_ocp")).isPresent()).toBeFalsy();
        expect(element(by.css("#btn_myReceipt_ocp")).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-2933 - Context Switcher - Vector CA', function () {
        loginApp.LoginAppAccType("psm");
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L15");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton1();
        paymentpage.clickNextButton();
        paymentpage.cardDetailsCheckout1(testInputs.MasterCard);
        paymentpage.SignAuthorize();
        paymentpage.PlaceOrderButtonClick();
        
        expect(element(by.css("#btn_configureMail_ocp")).isPresent()).toBeFalsy();
        expect(element(by.css("#btn_customerReceipt_ocp")).isPresent()).toBeFalsy();
        expect(element(by.css("#btn_myReceipt_ocp")).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    
   

});