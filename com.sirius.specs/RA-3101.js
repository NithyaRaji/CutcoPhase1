var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var paymentobj = require('../com.sirius.pageObjects/paymentPage_po.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var payment = require('../com.sirius.reusables/paymentPage.js');
var addressPageObj = require('../com.sirius.pageObjects/addressesPage_po.js');


describe('Verify whether on saving an order with the Shipping address, on opening the order and on changing the order config, Check whether "shipping same as billing" option is not changed to "Yes" in the customer info page', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3101 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressNotSameAsShipping(testInputs.StandardizedUSAddress);
        addressPage.savebutton();

        homePage.selectPendingOrder();
        shoppingCartPage.ShoppingCartCheckout();
    
        var addressPO = new addressPageObj();
        expect(addressPO.shippingSameAsBillingYes.isSelected()).toBeFalsy();
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-3101 - Context Switcher - Vector CA', function () {

        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressNotSameAsShipping(testInputs.CAAddress);
        addressPage.savebutton();

        homePage.selectPendingOrder();
        shoppingCartPage.ShoppingCartCheckout();
    
        var addressPO = new addressPageObj();
        expect(addressPO.shippingSameAsBillingYes.isSelected()).toBeFalsy();
        

        utilities.pageWaitSec(10);
       
        

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-3101 - Context Switcher - Cutco US', function () {

        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressNotSameAsShipping(testInputs.StandardizedUSAddress);
        addressPage.savebutton();

        homePage.selectPendingOrder();
        shoppingCartPage.ShoppingCartCheckout();
    
        var addressPO = new addressPageObj();
        expect(addressPO.shippingSameAsBillingYes.isSelected()).toBeFalsy();
        

        utilities.pageWaitSec(10);
       
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    
    

    

});