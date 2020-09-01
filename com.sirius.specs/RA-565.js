
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-565 - Check that the search functionality is not case sensitive', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

   it('RA-565 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_565.cutoHome_searchTermLowerCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldSKUIDCheck(testInputs.RA_565.cutoHome_searchTermUpperCase);
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-565 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_565.vectorUS_searchTermLowerCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldSKUIDCheck(testInputs.RA_565.vectorUS_searchTermUpperCase);
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-565 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_565.vectorCA_searchTermLowerCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldSKUIDCheck(testInputs.RA_565.vectorCA_searchTermUpperCase);
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)


});