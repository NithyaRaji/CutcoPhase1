
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');


describe('RA-563 - Verify whether the partial search for Part number based SKU search, matches only those SKUs which start with the searched ID & ensure that top 10 SKUs with such a match are returned.', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-563 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_563.cutoHome_searchTerm);
        searchPage.searchResult();
        searchPage.searchResultCount();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-563 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_563.vectorUS_searchTerm);
        searchPage.searchResult();
        searchPage.searchResultCount(); 
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-563 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_563.vectorCA_searchTerm);
        searchPage.searchResult();
        searchPage.searchResultCount();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)


});