var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var searchPage = require('../com.sirius.reusables/search.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('RA-510 - When Rep has product SKUs in cart, Rep Bonuses a SKU, adds engraving for a SKU & modifies a SKU; Rep now navigates away from cart screen to PDP/PLP/Dashboard screen, verify that the product SKUs in cart continue to be correctly retained.', function () {
    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-510 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_510.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.productNameMoreOption(testInputs.RA_510.cutoHome_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeEngrave();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-510 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_510.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.productNameMoreOption(testInputs.RA_510.vectorUS_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeEngrave();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-510 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_510.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.productNameMoreOption(testInputs.RA_510.vectorCA_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeEngrave();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});