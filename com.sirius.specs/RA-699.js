var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var searchPage = require('../com.sirius.reusables/search.js');

describe('RA-699 - When Rep has items in cart, but, clicks on a pending order, ensure a modal displays with No option for Save Order? auto selected, Cancel & Replace Cart btn. When Rep clicks on Replace Cart, ensure current cart is replaced by pending orders cart', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-699 - Context Switcher - Cutco Home US', function () {
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
        searchPage.searchWithSkuID(testInputs.RA_699.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductWithoutCartOpen();
        utilities.navigatepageback();
        homePage.selectHomeFromLeftNavigation();
        shoppingCartPage.selectPendingOrderAndAddToCart();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-699 - Context Switcher - Vector US', function () {
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
        searchPage.searchWithSkuID(testInputs.RA_699.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductWithoutCartOpen();
        utilities.navigatepageback();
        homePage.selectHomeFromLeftNavigation();
        shoppingCartPage.selectPendingOrderAndAddToCart();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-699 - Context Switcher - Vector CA', function () {
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
        searchPage.searchWithSkuID(testInputs.RA_699.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductWithoutCartOpen();
        utilities.navigatepageback();
        homePage.selectHomeFromLeftNavigation();
        shoppingCartPage.selectPendingOrderAndAddToCart();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)
    
});