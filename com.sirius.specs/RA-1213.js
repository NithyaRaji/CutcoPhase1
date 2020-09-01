var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var searchPage = require('../com.sirius.reusables/search.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');

//Sprint6
describe('RA-1213 - Ensure that GC(s) are searchable & GC(s) returned in search do not have Quick Add option & verify that, when Rep clicks on a GC search result, corresponding GC Item Detail View is displayed & that Rep is able to add the GC w/o gift msg to cart', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1213 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithGiftCard(testInputs.RA_1213.vectorUS_searchTermGiftCard);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        productDetails.verifyGiftCardDetials();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});