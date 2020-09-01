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
const browserDetails = require('../com.sirius.reusables/browserDetails.js');

describe('RA-848 - In the cart, when the "Engrave" option is clicked from SKU 3 dot menu, ensure the engraving list modal is displayed for the item to engrave', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-848 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_522.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verifyProductDetailsInEngraveModal();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

   it('RA-848 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_522.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verifyProductDetailsInEngraveModal();   
        reportInfo.log('Script Completed'); 
    }, testInputs.scriptTimeOut)
    
    it('RA-848 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_522.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.ProductDetailStore();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verifyProductDetailsInEngraveModal();   
        reportInfo.log('Script Completed'); 
    }, testInputs.scriptTimeOut)


});