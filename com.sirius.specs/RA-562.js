
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-562 - Verify whether the system begins to search after entering 3 characters in the search modal', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-562 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuIDTyping(testInputs.RA_562.cutoHome_searchTerm1);
        searchPage.keepTypingText();
        searchPage.searchWithSkuIDTypingWithOutSearchOpen(testInputs.RA_562.cutoHome_searchTerm2);
        searchPage.keepTypingText();
        searchPage.searchWithSkuIDTypingWithOutSearchOpen(testInputs.RA_562.cutoHome_searchTerm3);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-562 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuIDTyping(testInputs.RA_562.vectorUS_searchTerm1);
        searchPage.keepTypingText();
        searchPage.searchWithSkuIDTypingWithOutSearchOpen(testInputs.RA_562.vectorUS_searchTerm2);
        searchPage.keepTypingText();
        searchPage.searchWithSkuIDTypingWithOutSearchOpen(testInputs.RA_562.vectorUS_searchTerm3);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-562 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuIDTyping(testInputs.RA_562.vectorCA_searchTerm1);
        searchPage.keepTypingText();
        searchPage.searchWithSkuIDTypingWithOutSearchOpen(testInputs.RA_562.vectorCA_searchTerm2);
        searchPage.keepTypingText();
        searchPage.searchWithSkuIDTypingWithOutSearchOpen(testInputs.RA_562.vectorCA_searchTerm3);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

});