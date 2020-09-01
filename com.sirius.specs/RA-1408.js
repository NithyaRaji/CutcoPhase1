var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('RA-1408 - Rep clicks on Empty Cart link for an order associated with cart & clicks on Yes for start a new order & No for Save order, provides a Save reason & touches on empty cart btn, verify Cart is emptied, default cart for new shopping experience shown', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1408 - Context Switcher - Cutco Home US', function () {
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
        utilities.navigatepageback();
        utilities.navigatepageback();
        browser.sleep(15000);
        shoppingCartPage.SelectEmptyCartLink();
        shoppingCartPage.EmptyCartSavethisOrderYes();
        shoppingCartPage.emptycartsaveOrder();
        reportInfo.log("Script Completed");
    }, testInputs.scriptTimeOut)

    it('RA-1408 - Context Switcher - Vector US', function () {
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
        utilities.navigatepageback();
        utilities.navigatepageback();
        browser.sleep(15000);
        shoppingCartPage.SelectEmptyCartLink();
        shoppingCartPage.EmptyCartSavethisOrderYes();
        shoppingCartPage.emptycartsaveOrder();
        reportInfo.log("Script Completed"); 
    },testInputs.scriptTimeOut)

    it('RA-1408 - Context Switcher - Vector CA', function () {
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
        utilities.navigatepageback();
        utilities.navigatepageback();
        browser.sleep(15000);
        shoppingCartPage.SelectEmptyCartLink();
        shoppingCartPage.EmptyCartSavethisOrderYes();
        shoppingCartPage.emptycartsaveOrder();
        reportInfo.log("Script Completed"); 
    },testInputs.scriptTimeOut)

});