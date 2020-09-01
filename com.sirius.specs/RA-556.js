
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var searchPage = require('../com.sirius.reusables/search.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');


describe('RA-556 - Verify whether Rep is able to add products to cart using the Add To Cart link presented next to the products returned in the search results', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-556 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_556.cutoHome_searchTerm);
        searchPage.searchResult();
        searchPage.searchButtonClick();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

    it('RA-556 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_556.vectorUS_searchTerm);
        searchPage.searchResult();
        searchPage.searchButtonClick();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

    it('RA-556 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_556.vectorCA_searchTerm);
        searchPage.searchResult();
        searchPage.searchButtonClick();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

});