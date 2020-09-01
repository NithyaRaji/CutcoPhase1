
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');

describe('RA-606 - When Rep has searched using a char keyword & has navigated away to a PDP of 1 of the SKU returned in search results, ensure, the search keyword retains in Search box & also ensure that Rep can successfully re-initiate search w/o clearing the search field', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-606 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_606.cutoHome_searchTermUpperCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldCheck();
        productDetails.searchFieldProductNameCheck(testInputs.RA_606.cutoHome_searchTermLowerCase);
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-606 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_606.vectorUS_searchTermUpperCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldCheck(); 
        productDetails.searchFieldProductNameCheck(testInputs.RA_606.vectorUS_searchTermLowerCase);
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-606 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_606.vectorCA_searchTermUpperCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.searchFieldCheck();
        productDetails.searchFieldProductNameCheck(testInputs.RA_606.vetorCA_searchTermLowerCase);
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)


});