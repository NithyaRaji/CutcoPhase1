var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');

describe('RA-405 - Note down products name, part number, along with attributes selected for a product before adding the product to cart. Add the selection to cart. Check if the attributes of item in cart match with the data which was noted down', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-405 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_405.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.VerifySameProductAddedInCart();   
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-405 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_405.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.VerifySameProductAddedInCart();   
        reportInfo.log('Script Completed'); 
    }, testInputs.scriptTimeOut)
    
    it('RA-405 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_405.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.VerifySameProductAddedInCart();   
        reportInfo.log('Script Completed'); 
    }, testInputs.scriptTimeOut)


});