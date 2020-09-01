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



describe('RA-2931- For LIT Orders, When commission payment is selected in Shipping and Payment page, Verify whether in order review page "This order will be charged to your commission" wording is present', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2931 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L216");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.configSelect();
        shoppingCartPage.selectCommissionConfig();
        shoppingCartPage.configUpdate();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();
        paymentpage.clickNextButton1();
        expect(element(by.xpath("//span[contains(text(),'*')]/ancestor::p")).isDisplayed());

        
        //expect(by.xpath().isPresent()).toBeFalsy();

        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-2931 - Context Switcher - Vector CA', function () {
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
        paymentpage.selectYourCommission();
        paymentpage.clickNextButton1();
        expect(element(by.xpath("//span[contains(text(),'*')]/ancestor::p")).isDisplayed());
         
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    
   

});