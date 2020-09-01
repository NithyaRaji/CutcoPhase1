var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');

describe('RA-522 - Verify whether the Rep is able to bonus the item and later change the item to Unbonus item in shopping cart page', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-522 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_522.cutoHome_searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductWithoutCartOpen();
        browseByCategory.handlePopup();
        searchPage.searchWithSkuID(testInputs.RA_522.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.cutoHome_searchTerm1);
        shoppingCartPage.BonusOptionSelect();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.cutoHome_searchTerm1);
        shoppingCartPage.unbonusOptionSelect();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-522 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_522.vectorCA_searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductWithoutCartOpen();
        browseByCategory.handlePopup();
        searchPage.searchWithSkuID(testInputs.RA_522.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.vectorCA_searchTerm1);
        shoppingCartPage.BonusOptionSelect();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.vectorCA_searchTerm1);
        shoppingCartPage.unbonusOptionSelect();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-522 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_522.vectorUS_searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductWithoutCartOpen();
        browseByCategory.handlePopup();
        searchPage.searchWithSkuID(testInputs.RA_522.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.vectorUS_searchTerm1);
        shoppingCartPage.BonusOptionSelect();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.vectorUS_searchTerm1);
        shoppingCartPage.unbonusOptionSelect();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

});