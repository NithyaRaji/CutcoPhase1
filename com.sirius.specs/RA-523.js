
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
const browserDetails = require('../com.sirius.reusables/browserDetails.js');


describe('RA-523 - When Rep clicks on 3 dot menu for an item that is not eligible for engraving, from within cart, ensure that the engraving option is greyed out and an indication as expected', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

     it('RA-523 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_568.cutoHome_searchTermUpperCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        searchPage.searchWithSkuID(testInputs.RA_607.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        //browseByCategory.handlePopup();
        shoppingCartPage.removeBonusitemFromCart();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-523 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_568.vectorCA_searchTermUpperCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        searchPage.searchWithSkuID(testInputs.RA_607.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        //browseByCategory.handlePopup();
        shoppingCartPage.removeBonusitemFromCart();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)


    it('RA-523 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_568.vectorUS_searchTermUpperCase);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        searchPage.searchWithSkuID(testInputs.RA_607.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        //browseByCategory.handlePopup();
        shoppingCartPage.removeBonusitemFromCart();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut) 
    
});