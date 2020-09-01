var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-713 - Cart has SKUs, Rep opts to save; in modal that opens, verify Save btn is in disabled state when Rep attempts to save w/o comment; also verify, on click of Cancel btn, modal closes, Rep shown cart. Also ensure, reinitiating save, with comments, saves order', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-713 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
         browseByCategory.handlePopup(); 
        shoppingCartPage.cancelOrder();
        shoppingCartPage.saveOrder();
        shoppingCartPage.verifySaveOrder();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-713 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.cancelOrder();
        shoppingCartPage.saveOrder();
        shoppingCartPage.verifySaveOrder();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-713 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.cancelOrder();
        shoppingCartPage.saveOrder();
        shoppingCartPage.verifySaveOrder();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

});