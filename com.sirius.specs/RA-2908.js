var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');


describe('RA-2908 - verify whether user able to break down a set product with updated quantities', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2908 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.updateQuantity();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.setBreakDown();
        shoppingCartPage.ContinueSetBreakDown();
        

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 
    it('RA-2908 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.updateQuantity()
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.setBreakDown();
        shoppingCartPage.ContinueSetBreakDown();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-2908 - Context Switcher - Cutco US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.updateQuantity()
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.setBreakDown();
        shoppingCartPage.ContinueSetBreakDown();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    


});