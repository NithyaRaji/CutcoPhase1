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

describe('RA-647 - On touch/click of a SKU from Cart, ensure that the SKUs PDP is shown along with Product name, part number, product image carousel, description, attribute options for selection, quantity option, Update btn & Cancel btn in the Update Cart Item modal', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-647 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_647.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameUpdateCancelFromCart();
        productDetails.pdpVerficationUpdatePoints();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-647 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_647.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameUpdateCancelFromCart();
        productDetails.pdpVerficationUpdatePoints();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-647 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_647.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameUpdateCancelFromCart();
        productDetails.pdpVerficationUpdatePoints();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

});