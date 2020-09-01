var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-701 - In Confirm Cart Replacement modal, when the Rep selects Yes under save your order option, adds a reason in the text box that opens & clicks on Replace Cart btn; ensure existing cart is saved & also ensure, selected pending orders cart is displayed', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-701 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup();
        shoppingCartPage.saveOrder();
        shoppingCartPage.selectPendingOrderAndUpdate();
        shoppingCartPage.verfiyProductLineItem();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-701 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup();
        shoppingCartPage.saveOrder();
        shoppingCartPage.selectPendingOrderAndUpdate();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-701 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup();
        shoppingCartPage.saveOrder();
        shoppingCartPage.selectPendingOrderAndUpdate();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});