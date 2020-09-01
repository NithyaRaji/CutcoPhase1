var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var searchPage = require('../com.sirius.reusables/search.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-692 - In pending order list, check that only a max of 4 orders, sorted by Desc Updated date, are displayed; also, when there are > 4 orders, ensure Show All link is displayed; which when clicked, should open pending orders in a vertically scrollable overlay', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-692 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.saveOrder();
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        homePage.resumeOrderSectionValidations();
        reportInfo.log("Script Completed");
    }, testInputs.scriptTimeOut)

    it('RA-692 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.saveOrder();
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        homePage.resumeOrderSectionValidations();
        reportInfo.log("Script Completed");
    }, testInputs.scriptTimeOut)

    it('RA-692 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.saveOrder();
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        homePage.resumeOrderSectionValidations();
        reportInfo.log("Script Completed");
    }, testInputs.scriptTimeOut)

});