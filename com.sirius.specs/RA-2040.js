
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


describe('RA-2040 E2E 4 - Vector US - Event location checked in - Adding SKUs from search & PDP through search check - Engraving, Gift wrap & Bonus application & cart check - Update cart SKU - Paper cheque/MO based payment for order ', function () {

  beforeEach(function () {
    launcher.launchApplication();
  })

  it('RA-2040 E2E 4 - Context Switcher - Vector US', function () {
    loginApp.loginAppDefault();
    homePage.verfiyHomePage();
    homePage.switchToVectorUS();
    homePage.selectShopFromLeftNavigation();
    browseByCategory.handlePopupCutcoVector(); 
    shoppingCartPage.configSelect();
    shoppingCartPage.ConfigEventSelectCheckout(testInputs.e2e_checkout.state_NY , testInputs.e2e_checkout.eventName1);
    shoppingCartPage.configUpdate();

    homePage.selectShopFromLeftNavigation();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.quantityValue(testInputs.e2e_checkout.quantity);
    productDetails.addProduct();
    browseByCategory.handlePopup(); 
    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
    shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);
    shoppingCartPage.engraveTypeEngrave();
    shoppingCartPage.closeShoppingCart();

    utilities.navigatepageback();
    searchPage.searchClearEnter();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.product);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.addProductWithoutCartOpen();

    searchPage.searchClearEnter();
    searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm8);
    searchPage.searchResult();
    productDetails.searchResultsNavigation();
    productDetails.addProduct();
    browser.sleep(8000);
    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm8);
    shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm8);
    shoppingCartPage.engraveTypeEngraveBonus();
    shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm8);
    shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.searchTerm8);
    browser.sleep(8000);
    shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();

    //changing the knife quantity to 1
    shoppingCartPage.cartQuantityValidations();

    //shipping and billing
    shoppingCartPage.cartTotalValidation();
    shoppingCartPage.ShoppingCartCheckout();
    addressPage.billingAddressUS();
    addressPage.billingAddressNotSameAsShipping(testInputs.RA_004ShippingAddress);
    addressPage.nextButtonCheckout();
    addressPage.standardizationAddressStandardizationCheckout();
    paymentpage.selectNextDayShipping();
    paymentpage.selectPaperCheckMOCard();
    paymentpage.clickNextButton();
    browser.sleep(7000);
    paymentpage.paperCheckDetails(testInputs.e2e_checkout.paperCheckDetails);
    paymentpage.PlaceOrderButton();
    paymentpage.imdoneButtonClick();
    reportInfo.log('Script Completed');
  }, testInputs.scriptTimeOut)

});