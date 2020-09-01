
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage =  require('../com.sirius.reusables/shoppingCartPage.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
const browserDetails = require('../com.sirius.reusables/browserDetails.js');

//Sprint5
describe('RA-888 - When Rep initiates an "Advanced Customer Search" from S & B screen, provides valid cust No/FN/LN/Ph/Email  & when system does not have results to show, ensure appropriate msg is shown to Rep', function () {

    beforeEach(function () {
        launcher.launchApplication(); 
    })

    it('RA-888 - Context Switcher - Cutco Home US', function () {
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
        addressPage.advancedCustomerSearchNoResultsVerification();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

    it('RA-888 - Context Switcher - Vector US', function () {
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
        addressPage.advancedCustomerSearchNoResultsVerification();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

    it('RA-888 - Context Switcher - Vector CA', function () {
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
        addressPage.advancedCustomerSearchNoResultsVerification();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

});