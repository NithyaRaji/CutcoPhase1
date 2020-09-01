
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

describe('RA-1994 - Ensure that system auto-restricts Rep from providing a very high $ value in proportion to order total within Adjust Total checkbox & verify that system auto-populates the max allowed value which can be adjusted for the order total', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1994 - Context Switcher - Vector US', function () {
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
        paymentpage.VerifyMaxadjustTotalValueError(); 
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-1994 - Context Switcher - Vector CA', function () {
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
        paymentpage.VerifyMaxadjustTotalValueError(); 
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-1994 - Context Switcher - Cutco Home', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
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
        paymentpage.VerifyMaxadjustTotalValueError(); 
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});