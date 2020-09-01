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

describe('RA-1578 - Order config modal - Upon event location selection, on click of event check in link, a modal to open & on event selection, modal to close & event to populate within Order config modal & also ensure that the text link now changes to “Check out of event”.', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1578 - Context Switcher - Vector US', function () {
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
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-1578 - Context Switcher - Vector CA', function () {
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
        shoppingCartPage.ConfigEventSelectCheckout(testInputs.e2e_checkout.eventState_BC,testInputs.e2e_checkout.eventValue);
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

});