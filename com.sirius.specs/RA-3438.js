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
var promoPage = require('../com.sirius.reusables/promoPage.js');



describe('RA-3438 - In Promo and LIT orders, Verify whether the selected order config and Shipping address are persisted when the user navigates back from Checkout page to Home page', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3438 - Context Switcher - Vector US - LIT', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        shoppingCartPage.configSelect();
        shoppingCartPage.selectCommissionConfig();
        shoppingCartPage.configUpdate();
        searchPage.searchWithSkuID("L216");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressNotSameAsShipping(testInputs.USAddress);
       //
        addressPage.nextButtonCheckout();
        addressPage.standardizationSelectContinue();
        addressPage.standardizationSelectContinue();
        
        utilities.navigatepageBackDesktop();
        utilities.pageWaitSec(5);
        expect(element(by.id('input_firstName_shipping')).getAttribute('value')).toEqual('TestFirstName');
        expect(element(by.id('input_lastName_shipping')).getAttribute('value')).toEqual('TestLastName');
        expect(element(by.id('input_address1_shipping')).getAttribute('value')).toEqual('65TH HWY');
        expect(element(by.id('input_zipCode_shipping')).getAttribute('value')).toEqual('35764');
        
        utilities.navigatepageBackDesktop();
        shoppingCartPage.configSelect();
        expect(element(by.id('btn_pricing_REP_config')).isSelected());
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3438 - Context Switcher - Vector CA - LIT', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L49");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressNotSameAsShippingCA(testInputs.CAAddress);
    //
        addressPage.nextButtonCheckout();
        addressPage.standardizationSelectContinue();
        addressPage.standardizationSelectContinue();
        
        utilities.navigatepageBackDesktop();
        utilities.pageWaitSec(5);
        expect(element(by.id('input_firstName_shipping')).getAttribute('value')).toEqual('TestFirstName');
        expect(element(by.id('input_lastName_shipping')).getAttribute('value')).toEqual('TestLastName');
        expect(element(by.id('input_zipCode_shipping')).getAttribute('value')).toEqual('K1A 0G0');

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3438 - Context Switcher - Cutco US - LIT', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L626");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressNotSameAsShipping(testInputs.USAddress);
       //
        addressPage.nextButtonCheckout();
        addressPage.standardizationSelectContinue();
        addressPage.standardizationSelectContinue();
        
        utilities.navigatepageBackDesktop();
        utilities.pageWaitSec(5);
        expect(element(by.id('input_firstName_shipping')).getAttribute('value')).toEqual('TestFirstName');
        expect(element(by.id('input_lastName_shipping')).getAttribute('value')).toEqual('TestLastName');
        expect(element(by.id('input_address1_shipping')).getAttribute('value')).toEqual('65TH HWY');
        expect(element(by.id('input_zipCode_shipping')).getAttribute('value')).toEqual('35764');
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-3438 - Context Switcher - Vector US - Promo', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
        promoPage.selectBrandingTools();
        shoppingCartPage.configUpdate();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressNotSameAsShipping(testInputs.USAddress);
       //
        addressPage.nextButtonCheckout();
        addressPage.standardizationSelectContinue();
        addressPage.standardizationSelectContinue();
        
        utilities.navigatepageBackDesktop();
        utilities.pageWaitSec(5);
        expect(element(by.id('input_firstName_shipping')).getAttribute('value')).toEqual('TestFirstName');
        expect(element(by.id('input_lastName_shipping')).getAttribute('value')).toEqual('TestLastName');
        expect(element(by.id('input_address1_shipping')).getAttribute('value')).toEqual('65TH HWY');
        expect(element(by.id('input_zipCode_shipping')).getAttribute('value')).toEqual('35764');
        
        utilities.navigatepageBackDesktop();
        shoppingCartPage.configSelect();
        expect(element(by.id('btn_engrave_location_T_config')).isSelected());
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3438 - Context Switcher - Vector CA - Promo', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
        promoPage.selectPacific();
        shoppingCartPage.configUpdate();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();

        utilities.navigatepageBackDesktop();
        shoppingCartPage.configSelect();
        expect(element(by.id('btn_engrave_location_Z7_config')).isSelected());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3438 - Context Switcher - Cutco US - Promo', function () {
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
       //
        addressPage.nextButtonCheckout();
        addressPage.standardizationSelectContinue();
        addressPage.standardizationSelectContinue();
        
        utilities.navigatepageBackDesktop();
        utilities.pageWaitSec(5);
        expect(element(by.id('input_firstName_shipping')).getAttribute('value')).toEqual('TestFirstName');
        expect(element(by.id('input_lastName_shipping')).getAttribute('value')).toEqual('TestLastName');
        expect(element(by.id('input_address1_shipping')).getAttribute('value')).toEqual('65TH HWY');
        expect(element(by.id('input_zipCode_shipping')).getAttribute('value')).toEqual('35764');
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
   

});