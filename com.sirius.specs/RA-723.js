var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-723 - Ensure there is no item in the cart when the Rep navigates to Shopping cart page, Check “Save Order” and "Checkout" button is not present and "No item in cart" message is displayed ', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-723 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.emptytheCart();
        shoppingCartPage.emptyCartVerification();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-723 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.emptytheCart();
        shoppingCartPage.emptyCartVerification();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-723 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.emptytheCart();
        shoppingCartPage.emptyCartVerification();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)
   
});