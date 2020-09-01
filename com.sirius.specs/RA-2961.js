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


describe('Verify whether Spread Pay & Tax Exemption option is not available for Promotional orders', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2961 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressContinue();
        
        var paymentPO = new paymentobj();

        expect(paymentPO.taxExempt.isPresent()).toBeFalsy();
        expect(paymentPO.taxableTaxable.isPresent()).toBeFalsy();


        utilities.pageWaitSec(10);

       
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2961 - Context Switcher - Vector CA', function () {

        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressContinue();
        
        var paymentPO = new paymentobj();

        expect(paymentPO.taxExempt.isPresent()).toBeFalsy();
        expect(paymentPO.taxableTaxable.isPresent()).toBeFalsy();


        utilities.pageWaitSec(10);
        

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2961 - Context Switcher - Cutco US', function () {

        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressContinue();
        
        var paymentPO = new paymentobj();

        expect(paymentPO.taxExempt.isPresent()).toBeFalsy();
        expect(paymentPO.taxableTaxable.isPresent()).toBeFalsy();


        utilities.pageWaitSec(10);
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    
    

    

});