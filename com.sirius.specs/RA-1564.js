var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-1564 - When Rep is checked in to an event & Rep loads a pending Event order & the event on the order is same as checked-in event, ensure Rep stays checked in & on checkout ensure that event field is non-editable  & populated with checked in event', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1564 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductWithoutCartOpen();
        browseByCategory.handlePopup(); 
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigEventSelectCheckout(testInputs.e2e_checkout.state_NY , testInputs.e2e_checkout.eventName1);
        shoppingCartPage.configUpdate();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.eventNameCheck();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-1564 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductWithoutCartOpen();
        browseByCategory.handlePopup(); 
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigEventSelectCheckout(testInputs.e2e_checkout.CAState , testInputs.e2e_checkout.CAEvent);
        shoppingCartPage.configUpdate();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.eventNameCheck();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});