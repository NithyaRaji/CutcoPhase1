
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-561 - When Rep enters 3+ chars or 3+ numbers in Search box & no products matching the entered values exist in system, verify that a msg stating no search results found is displayed', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-561 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuIDTyping(testInputs.RA_561.cutoHome_searchTermAlpha);
        searchPage.nosearchResult();
        searchPage.searchWithSkuIDTyping(testInputs.RA_561.cutoHome_searchTermNumberic);
        searchPage.nosearchResult();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

    it('RA-561 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuIDTyping(testInputs.RA_561.vectorUS_searchTermAlpha);
        searchPage.nosearchResult();
        searchPage.searchWithSkuIDTyping(testInputs.RA_561.vectorUS_searchTermNumberic);
        searchPage.nosearchResult();       
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

    it('RA-561 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuIDTyping(testInputs.RA_561.vectorCA_searchTermAlpha);
        searchPage.nosearchResult();
        searchPage.searchWithSkuIDTyping(testInputs.RA_561.vectorCA_searchTermNumberic);
        searchPage.nosearchResult();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

});