
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-1870 - When Rep clicks on an existing pending order, adds a new SKU to the POs cart, navigates to checkout screen2, an order number will be generated in the backend; now ensure that the system auto saves the updated order as a pending order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1870 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.nextButton();
        addressPage.standardizationAddressSelect();
        addressPage.standardizationAddressContinue();
        shippingPage.shippingpageNextButton();
        paymentpage.checkAdjustTotalValue();
        paymentpage.adjustTotalValue(); 
        paymentpage.saveOrderBillingPage();
        homePage.verifyPendingOrderName();
        homePage.selectPendingOrder();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-1870 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressCA1();
        addressPage.nextButton();
        addressPage.standardizationAddressSelect();
        addressPage.standardizationAddressContinue();
        shippingPage.shippingpageNextButton();
        paymentpage.checkAdjustTotalValue();
        paymentpage.adjustTotalValue(); 
        paymentpage.saveOrderBillingPage();
        homePage.verifyPendingOrderName();
        homePage.selectPendingOrder();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-1870 - Context Switcher - Cutco Home ', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.nextButton();
        addressPage.standardizationAddressSelect();
        addressPage.standardizationAddressContinue();
        shippingPage.shippingpageNextButton();
        paymentpage.checkAdjustTotalValue();
        paymentpage.adjustTotalValue(); 
        paymentpage.saveOrderBillingPage();
        homePage.verifyPendingOrderName();
        homePage.selectPendingOrder();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)
    

});