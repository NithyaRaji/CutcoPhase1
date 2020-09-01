var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-520 - Check whether user is able to mark a bonus eligible SKU as Bonused & also verify that the SKUs price is stricken off & displayed as $0.00', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-520 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        // browseByCategory.selectCategoryFromShopPage();
        // browseByCategory.selectCategoryFromSetPage();
        // productDetails.addProductToCart();
        searchPage.searchWithSkuID(testInputs.RA_646.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.AddBonusAdvisor();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-520 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
       // browseByCategory.selectCategoryFromShopPage();
        // browseByCategory.selectCategoryFromSetPage();
        // productDetails.addProductToCart();
        searchPage.searchWithSkuID(testInputs.RA_646.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.AddBonusAdvisor();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-520 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        // browseByCategory.selectCategoryFromShopPage();
        // browseByCategory.selectCategoryFromSetPage();
        // productDetails.addProductToCart();
        searchPage.searchWithSkuID(testInputs.RA_646.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.AddBonusAdvisor();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});