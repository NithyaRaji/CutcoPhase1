
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage =  require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-649 - Desktop: In the "Update Cart Item" modal, Rep has selected new attribute/qty and clicks on another line item, verify Confirm Cancel modal is shown. When Rep clicks on "No" btn, ensure Rep is navigated back to Edit item page', function () {
    beforeEach(function () {
        launcher.launchApplication();
    })
    it('RA-649 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup();
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.verifyNoButtonFromUpdateCartModal();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

    it('RA-649 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup();
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.verifyNoButtonFromUpdateCartModal();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

    it('RA-649 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup();
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.verifyNoButtonFromUpdateCartModal();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

});