var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');


describe('In Bonus advisor modal, when an item has an engraving configured for it, Check whether an “A” icon is shown with the item', function () {

  beforeEach(function () {
    launcher.launchApplication();
  })

  it('RA-505 - Context Switcher - Vector US', function () {

    loginApp.loginAppDefault();
    homePage.verfiyHomePage();
    homePage.switchToVectorUS();
    homePage.selectShopFromLeftNavigation();
    browseByCategory.handlePopupCutcoVector();
    shoppingCartPage.configSelect();
    shoppingCartPage.addCustomerConfiguration();
    homePage.selectShopFromLeftNavigation();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm3);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.addProduct();
    browseByCategory.handlePopup();
    shoppingCartPage.selectBonusAdivor();
    shoppingCartPage.inventoryToggleSelect();
    reportInfo.log('Script Completed');
  }, testInputs.scriptTimeOut)



});