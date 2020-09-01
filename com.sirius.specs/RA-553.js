
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-553 - Verify whether search option is present in the header within all pages', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-553 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.SearchTextBoxVerify();
        browseByCategory.selectCategoryFromShopPage1();
        searchPage.SearchTextBoxVerify1();
        shopCatalog.selectCategoryFromSetPage();
        searchPage.SearchTextBoxVerifyPdp();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-553 - Context Switcher -  Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.SearchTextBoxVerify();
        browseByCategory.selectCategoryFromShopPage1();
        searchPage.SearchTextBoxVerify1();
        shopCatalog.selectCategoryFromSetPage();
        searchPage.SearchTextBoxVerifyPdp();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-553 - Context Switcher -  Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.SearchTextBoxVerify();
        browseByCategory.selectCategoryFromShopPage1();
        searchPage.SearchTextBoxVerify1();
        shopCatalog.selectCategoryFromSetPage();
        searchPage.SearchTextBoxVerifyPdp();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

});