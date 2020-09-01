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


describe('RA-2038 E2E 2 - Vector US - Virtual demo standard pricing - >20 line items in cart - engraving & bonus checks-upgrade set-gift wrap check- update SKU - PO Box address - Christmas shipping - VISA payment order', function () {

  beforeEach(function () {
    launcher.launchApplication();
  })

  it('RA-2038 E2E 2 - Context Switcher - Vector US', function () {

    loginApp.loginAppDefault();
    homePage.verfiyHomePage();
    homePage.switchToVectorUS();
    homePage.selectShopFromLeftNavigation();
    browseByCategory.handlePopupCutcoVector(); 
    shoppingCartPage.configSelect();
    shoppingCartPage.ConfigVirtualDemoSelect();
    shoppingCartPage.ConfigOrderTypeSelect();
    shoppingCartPage.ConfigPriceTypeStandardSelect();
    shoppingCartPage.configUpdate();

    homePage.selectShopFromLeftNavigation();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm3);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.addProduct();
     browseByCategory.handlePopup(); 
    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm3);
    shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm3);
    shoppingCartPage.engraveTypeMonogramSquarePlateBonus();
    shoppingCartPage.closeShoppingCart();
    browser.sleep(7000);

    utilities.navigatepageback();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm5);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.addProduct();
    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm5);
    shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm5);
    shoppingCartPage.engraveTypeEngrave();
    browser.sleep(7000);

    shoppingCartPage.closeShoppingCart();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm6);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.addProduct();
    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm6);
    shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm6);
    shoppingCartPage.engraveTypeMonogramDiamondPlateBonus();
    browser.sleep(7000);

    shoppingCartPage.giftWrapCustomBonusNo();
    utilities.navigatepageback();

    shoppingCartPage.closeShoppingCart();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.addProduct();
    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
    shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);
    shoppingCartPage.engraveTypeEngraveBonus();
    browser.sleep(7000);

    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm5);
    shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.searchTerm5);

    shoppingCartPage.cartTotalValidation();
    browser.sleep(7000);
    shoppingCartPage.ShoppingCartCheckout1();
    shoppingCartPage.confirmCustomGiftWrapping();
    addressPage.billingAddressUS();
    addressPage.nextButtonCheckout();
    addressPage.standardizationAddressSelectCheckout();
    addressPage.standardizationAddressContinueCheckout();
    paymentpage.selectNextDayShipping();
    paymentpage.selectCreditCard();
    paymentpage.selectTaxExemptCheckout();
    paymentpage.uploadImg();
    paymentpage.clickNextButton();
    paymentpage.cardDetailsCheckout(testInputs.MasterCardCheckout);
    paymentpage.PlaceOrderButton();
    paymentpage.imdoneButtonClick();
    reportInfo.log('Script Completed');
  }, testInputs.scriptTimeOut)



});