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


describe('RA-505 - In Bonus advisor modal, when an item has an engraving configured for it, Check whether an “A” icon is shown with the item', function () {

  beforeEach(function () {
    launcher.launchApplication();
  })

  it('RA-505 - Context Switcher - Vector US', function () {
    loginApp.loginAppDefault();
    homePage.verfiyHomePage();
    homePage.switchToVectorUS();
    homePage.selectShopFromLeftNavigation();
    browseByCategory.handlePopupCutcoVector();
    homePage.selectShopFromLeftNavigation();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm3);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.addProduct();
    browseByCategory.handlePopup();
    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm3);
    shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm3);
    shoppingCartPage.engraveTypeMonogramSquarePlateBonus();
    shoppingCartPage.engraveVerifications();
    shoppingCartPage.selectBonusAdivor();
    shoppingCartPage.orderAdvisorEngraveVerification();
    reportInfo.log('Script Completed');
  }, testInputs.scriptTimeOut)

  it('RA-505 - Context Switcher - Vector CA', function () {
    loginApp.loginAppDefault();
    homePage.verfiyHomePage();
    homePage.switchToVectorCA();
    homePage.selectShopFromLeftNavigation();
    browseByCategory.handlePopupCutcoVector();
    homePage.selectShopFromLeftNavigation();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm3);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.addProduct();
    browseByCategory.handlePopup();
    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm3);
    shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm3);
    shoppingCartPage.engraveTypeMonogramSquarePlateBonus();
    shoppingCartPage.engraveVerifications();
    shoppingCartPage.selectBonusAdivor();
    shoppingCartPage.orderAdvisorEngraveVerification();
    reportInfo.log('Script Completed');
  }, testInputs.scriptTimeOut)

  it('RA-505 - Context Switcher - Cutco home', function () {
    loginApp.loginAppDefault();
    homePage.verfiyHomePage();
    homePage.switchToCutcoHomeUS();
    homePage.selectShopFromLeftNavigation();
    browseByCategory.handlePopupCutcoVector();
    homePage.selectShopFromLeftNavigation();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm3);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.addProduct();
    browseByCategory.handlePopup();
    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm3);
    shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm3);
    shoppingCartPage.engraveTypeMonogramSquarePlateBonus();
    shoppingCartPage.engraveVerifications();
    shoppingCartPage.selectBonusAdivor();
    shoppingCartPage.orderAdvisorEngraveVerification();
    reportInfo.log('Script Completed');
  }, testInputs.scriptTimeOut)


});