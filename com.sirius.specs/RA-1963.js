
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

describe('RA-1963 - When Rep selects Adjust Total on Checkout, ensure that $0.00 is shown within a textbox & no update link is visible. When Rep modifies value, ensure Update link appears, valid $ values are accepted & order totals within payment reflects the adjustment', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1963 - Context Switcher - Vector US', function () {
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
        //paymentpage.cardDetails();
        paymentpage.cardDetailsCheckout(testInputs.MasterCard);
        paymentpage.PlaceOrderButton();
        paymentpage.AdminAccountverifyOrderReceipt();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-1963 - Context Switcher - Vector CA', function () {
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
       // paymentpage.cardDetails();
       paymentpage.cardDetailsCheckout(testInputs.MasterCard);
        paymentpage.PlaceOrderButton();
        paymentpage.AdminAccountverifyOrderReceipt();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-1963 - Context Switcher - Cutco Home', function () {
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
        //paymentpage.cardDetails();
        paymentpage.cardDetailsCheckout(testInputs.MasterCard);
        paymentpage.PlaceOrderButton();
        paymentpage.AdminAccountverifyOrderReceipt();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});