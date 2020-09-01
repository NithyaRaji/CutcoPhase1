var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var bonusAdvisor = require('../com.sirius.reusables/bonusAdvisor.js');
var searchPage = require('../com.sirius.reusables/search.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var addressVal = require('../com.sirius.reusables/addressValidation.js');

describe('RA-2919 - Verify whether shop features are disabled for LIT orders', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2919 - Context Switcher - Vector US', function () {
        loginApp.LoginAppAccType("psm");
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L216");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();

        addressVal.LITValidateUS();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2919 - Context Switcher - Vector CA', function () {
        loginApp.LoginAppAccType("psm");
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L49");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();

        addressVal.LITValidateCA();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
   

});