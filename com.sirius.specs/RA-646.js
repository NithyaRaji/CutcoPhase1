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

describe('RA-646 - Cart - when Rep clicks on Qty dropdown of a SKU, ensure qty selector opens with the list correctly scrolled to the existing qty selection for the SKU & verify that Rep is able to modify the qty value & ensure that the same correctly reflects within cart', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-646 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_646.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        productDetails.VerifySameProductAddedInCart();
        shoppingCartPage.quantityMaximumValidation();
    }, testInputs.scriptTimeOut)


    it('RA-646 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_646.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        productDetails.VerifySameProductAddedInCart();
        shoppingCartPage.quantityMaximumValidation();
    }, testInputs.scriptTimeOut)


    it('RA-646 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_646.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        productDetails.VerifySameProductAddedInCart();
        shoppingCartPage.quantityMaximumValidation();
    }, testInputs.scriptTimeOut)


});