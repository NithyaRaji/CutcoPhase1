
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-607 - When Rep has searched using an id & has navigated away to a PDP of 1 of the SKU returned in search results, ensure, the search keyword retains in Search box & also ensure that Rep can successfully re-initiate search w/o clearing the search field', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-607 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_607.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldCheck();
        productDetails.searchFieldSKUIDCheck(testInputs.RA_607.cutoHome_searchTerm)
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-607 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_607.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldCheck(); 
        productDetails.searchFieldSKUIDCheck(testInputs.RA_607.vectorUS_searchTerm)
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-607 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_607.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldCheck();
        productDetails.searchFieldSKUIDCheck(testInputs.RA_607.vectorCA_searchTerm)
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

});