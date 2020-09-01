
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');


describe('RA-736 - When Rep swipes on an item that is not eligible for engraving, from within cart, ensure that the engraving option is greyed out and an indication as expected.', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-736 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_736.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.BonusOptionsDisabled();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-736 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_736.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.BonusOptionsDisabled();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)


    it('RA-736 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_736.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.BonusOptionsDisabled();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)
    
});