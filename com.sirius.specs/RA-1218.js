var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');

//Sprint6
describe('RA-1218 - Ensure that Rep is able to click on a GC available in cart & is able to successfully update the qty for the GC', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1218 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithGiftCard(testInputs.RA_1218.vectorUS_searchTermGiftCard);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.productNameUpdateCancelFromCart();
        // productDetails.quantityMaximumValueUpdate();
        // productDetails.updatePDPCart();
        // shoppingCartPage.quantityMaximumValidation();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});