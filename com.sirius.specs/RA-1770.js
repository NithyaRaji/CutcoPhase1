var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var addressPage = require('../com.sirius.reusables/addressPage.js'); 
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var searchPage = require('../com.sirius.reusables/search.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-1770 - Active cart with Reg pricing exists & Rep changes pricing to Catalog & clicks on ‘use Catalog pricing ($XX.XX)’ btn present within the ‘Change Pricing’ Modal; ensure that both the modals are closed & catalog pricing is applied for all products in cart', function () {
    
    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1770 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
         homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_1770.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigPriceTypeCatalogSelect();
        shoppingCartPage.configUpdate();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});