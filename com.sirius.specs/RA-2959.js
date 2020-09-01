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
describe('Verify whether "Credit Card" and "Your Commission" are only payment options present for Promotional order, Check whether the selected payment methods are retained while retrieving the pending order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2959 - Context Switcher - Vector US', function () {
       
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
        payment.promoBillingSaveUS();

        homePage.selectPendingOrder();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressContinue();

        var paymentPO = new paymentobj();

        expect(paymentPO.creditCardPayment.isSelected());
        expect(paymentPO.groundShippingMethod);
        expect(paymentPO.twoDayShippingMethod.isSelected());


        utilities.pageWaitSec(10);

        // homePage.selectPendingOrder();
        // shoppingCartPage.ShoppingCartCheckout();
        // addressPage.nextButtonCheckout();
        // addressPage.standardizationAddressContinue();

        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2959 - Context Switcher - Vector CA', function () {

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
        payment.promoBillingSaveCA();

        homePage.selectPendingOrder();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout1();
        addressPage.standardizationAddressContinue();

        var paymentPO = new paymentobj();

        expect(paymentPO.creditCardPayment.isSelected());
        expect(paymentPO.groundShippingMethod);
        expect(paymentPO.expressShippingMethod.isSelected());


        utilities.pageWaitSec(10);
       
        

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2959 - Context Switcher - Cutco US', function () {

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
        payment.promoBillingSaveUS();

        homePage.selectPendingOrder();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressContinue();

        var paymentPO = new paymentobj();

        expect(paymentPO.creditCardPayment.isSelected());
        expect(paymentPO.groundShippingMethod);
        expect(paymentPO.twoDayShippingMethod.isSelected());


        utilities.pageWaitSec(10);
       
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    
    

    

});