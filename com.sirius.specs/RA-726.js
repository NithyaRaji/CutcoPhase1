
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
describe('RA-726 - In "Save as pending" modal, on entering credit card info in the comment area & attempting to save, ensure "Please remove any credit card numbers from the comment field‚Äù inline error in Red is displayed, also ensure the comment field is highlighted in Red', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-726 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.creditCardNumberValidationOnOverlay_Amex();
        element(by.css("#btn_cancel_som")).click();
        shoppingCartPage.creditCardNumberValidationOnOverlay_Discover();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

    it('RA-726 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.creditCardNumberValidationOnOverlay_Amex();
        element(by.css("#btn_cancel_som")).click();
        shoppingCartPage.creditCardNumberValidationOnOverlay_Discover();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

    it('RA-726 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.creditCardNumberValidationOnOverlay_Amex();
        element(by.css("#btn_cancel_som")).click();
        shoppingCartPage.creditCardNumberValidationOnOverlay_Discover();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut) 
});