
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage =  require('../com.sirius.reusables/shoppingCartPage.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-1410 - When Rep clicks on Empty Cart link for a cart associated with an order & clicks on No for start a new order?, ensure Save order? is not shown & when empty cart btn is clicked, verify cart is emptied, any OrderInfo is removed', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1410 - Context Switcher - Cutco Home US', function () {
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
        utilities.navigatepageback();
        utilities.navigatepageback();
        shoppingCartPage.SelectEmptyCartLink1();
        shoppingCartPage.EmptyCartStartNewOrderNo();
        shoppingCartPage.noSaveorderVerify();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

    it('RA-1410 - Context Switcher - Vector US', function () {
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
        utilities.navigatepageback();
        utilities.navigatepageback();
        shoppingCartPage.SelectEmptyCartLink1();
        shoppingCartPage.EmptyCartStartNewOrderNo();
        shoppingCartPage.noSaveorderVerify();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

    it('RA-1410 - Context Switcher - Vector CA', function () {
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
        utilities.navigatepageback();
        utilities.navigatepageback();
        shoppingCartPage.SelectEmptyCartLink1();
        shoppingCartPage.EmptyCartStartNewOrderNo();
        shoppingCartPage.noSaveorderVerify();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

});