var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var searchPage = require('../com.sirius.reusables/search.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-648 - In the Update Cart Item modal, when user selects a different attribute, changes qty & clicks on update button, verify that the changes made on the Update Cart Item modal reflects correctly in cart screen', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-648 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_648.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameUpdateCancelFromCart();
        productDetails.quantityMaximumValueUpdate();
        productDetails.updatePDPCart();
        shoppingCartPage.quantityMaximumValidation();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-648 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_648.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameUpdateCancelFromCart();
        productDetails.quantityMaximumValueUpdate();
        productDetails.updatePDPCart();
        shoppingCartPage.quantityMaximumValidation();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-648 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_648.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameUpdateCancelFromCart();
        productDetails.quantityMaximumValueUpdate();
        productDetails.updatePDPCart();
        shoppingCartPage.quantityMaximumValidation();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});