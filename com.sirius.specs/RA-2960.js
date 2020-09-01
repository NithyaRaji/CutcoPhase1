var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var paymentobj = require('../com.sirius.pageObjects/paymentPage_po.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var payment = require('../com.sirius.reusables/paymentPage.js');


describe('Verify whether Address standardization is working for both shipping and billing address for Promo orders', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2960 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressNotSameAsShipping(testInputs.USAddress);
        addressPage.nextButton();
        addressPage.verifyStandardization();
        

        //utilities.pageWaitSec(5);

        
        
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2960 - Context Switcher - Vector CA', function () {

        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressNotSameAsShippingCA(testInputs.CAAddress);
        addressPage.nextButton();



        
        addressPage.verifyStandardization();
        
        

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2960 - Context Switcher - Cutco US', function () {
 
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressNotSameAsShipping(testInputs.USAddress);
        addressPage.nextButton();
        addressPage.verifyStandardization();

       
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    
    

    

});