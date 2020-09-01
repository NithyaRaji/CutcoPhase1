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
var utilities = require('../com.sirius.reusables/utilities.js');


describe('RA-2917 - Verify whether order quantity restrictions will apply on the Item Detail page, Edit Item Detail page & Shopping Cart and show only valid values or multiples', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2917 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L216");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.pdpQuantityClick();
        productDetails.verifyLITQuantitySelect("150");
        productDetails.addProductToCart();
        shoppingCartPage.cartQuantityClick();
        productDetails.verifyLITQuantitySelect("200");
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2917 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L49");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.pdpQuantityClick();
        productDetails.verifyLITQuantitySelect("150");
        productDetails.addProductToCart();
        shoppingCartPage.cartQuantityClick();
        productDetails.verifyLITQuantitySelect("200");
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2917 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L617");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.pdpQuantityClick();
        productDetails.verifyLITQuantitySelect("150");
        productDetails.addProductToCart();
        shoppingCartPage.cartQuantityClick();
        productDetails.verifyLITQuantitySelect("200");
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

   

});