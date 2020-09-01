var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var testInputs = require('../com.sirius.testData/data.json');
var searchPage = require('../com.sirius.reusables/search.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');


//Sprint6
describe('RA-1221 - When Rep clicks on a pending order which has GC in cart, ensure that the pending order’s cart correctly loads & displays the GC & also ensure that all GC related information like qty, denomination, price, title, description, gift message are shown', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1221 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithGiftCard(testInputs.RA_1221.vectorUS_searchTermGiftCard);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.saveOrder();
        homePage.selectHomeFromLeftNavigation();
        shoppingCartPage.selectPendingOrder();
        productDetails.verifyGiftCardDetials();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});