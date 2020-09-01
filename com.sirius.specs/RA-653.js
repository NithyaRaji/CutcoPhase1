var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var searchPage = require('../com.sirius.reusables/search.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-653 - Cart - When Rep clicks on ‘Empty Cart’ link, ensure ‘Confirm Cart Empty’ modal with ‘Cancel’ & ‘Empty’ btn(s) is displayed. When Rep clicks on ‘Cancel’ btn, ensure Rep is taken back to his original cart', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-653 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_653.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.SelectEmptyCartCancelLink();
        shoppingCartPage.verfiyProductLineItemCancel();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-653 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_653.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct(); 
        browseByCategory.handlePopup(); 
        shoppingCartPage.SelectEmptyCartCancelLink();
        shoppingCartPage.verfiyProductLineItemCancel();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-653 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_653.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.SelectEmptyCartCancelLink();
        shoppingCartPage.verfiyProductLineItemCancel();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

});