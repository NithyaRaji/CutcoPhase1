
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var searchPage = require('../com.sirius.reusables/search.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');


describe('RA-557 - SKU having 2 digit part number is available, rep starts keying in digits which represent the SKU in Search box, ensure SKU is shown in search results; Rep now adds 1 more random digit to search field, ensure, 2 digit SKU no longer shown within search', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-557 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_557.cutoHome_searchTermTwoWords);
        searchPage.searchWithSkuIDTyping(testInputs.RA_557.cutoHome_searchTermOneWord);
        searchPage.nosearchResult();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

    it('RA-557 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_557.vectorUS_searchTermTwoWords);
        searchPage.searchWithSkuIDTyping(testInputs.RA_557.vectorUS_searchTermOneWord);
        searchPage.nosearchResult();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

    it('RA-557 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_557.vectorCA_searchTermTwoWords);
        searchPage.searchWithSkuIDTyping(testInputs.RA_557.vectorCA_searchTermOneWord);
        searchPage.nosearchResult();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)


});