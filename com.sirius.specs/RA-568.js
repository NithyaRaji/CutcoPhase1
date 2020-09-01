
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-568 - When Rep enters correct part number of a non-web item SKU in search; search results which match the part number are returned; ensure that when user clicks on a search result, the corresponding products PDP is displayed with correct preselected attributes', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-568 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_568.cutoHome_searchTermUpperCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldSKUIDCheck(testInputs.RA_568.cutoHome_searchTermUpperCase);
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-568 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_568.vectorUS_searchTermUpperCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldSKUIDCheck(testInputs.RA_568.vectorUS_searchTermUpperCase);
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-568 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_568.vectorCA_searchTermUpperCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldSKUIDCheck(testInputs.RA_568.vectorCA_searchTermUpperCase);
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)


});