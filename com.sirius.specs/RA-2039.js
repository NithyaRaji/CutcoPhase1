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


describe('RA-2039 E2E 3 - Vector US - Event location checked in - Multiple qtys of 2 diff set SKUs to cart - Engraving check - bonus disabled check -Gift wrap test - Cart update test -  Hand delivered, taxable, Star card payment order', function () {

   beforeEach(function () {
      launcher.launchApplication();
   })

   it('RA-2039 E2E 3 - Context Switcher - Vector US', function () {
      loginApp.loginAppDefault();
      homePage.verfiyHomePage();
      homePage.switchToVectorUS();
      homePage.selectShopFromLeftNavigation();
      browseByCategory.handlePopupCutcoVector(); 

      shoppingCartPage.configSelect();
      shoppingCartPage.ConfigEventSelectCheckout(testInputs.e2e_checkout.state_NY , testInputs.e2e_checkout.eventName1);
      shoppingCartPage.configUpdate();

      homePage.selectShopFromLeftNavigation();
      searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm6);
      searchPage.searchResult();
      productDetails.searchResultsNavigation();
      productDetails.addProduct();
      browseByCategory.handlePopup(); 
      productDetails.addProduct();
  
      shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm6);
      shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm6);
      shoppingCartPage.engraveTypeEngraveBonus();
      shoppingCartPage.closeShoppingCart()
      // searchPage.searchClearEnter();
      // utilities.navigatepageback();
      // searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm6);
      // searchPage.searchResult();
      // productDetails.searchResultsNavigation();
     
      // searchPage.searchClearEnter();
      shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm6);
      //shoppingCartPage.BonusOptionsDisabled();
      shoppingCartPage.deleteOptionSelectCheckout(testInputs.e2e_checkout.searchTerm6);
     /* utilities.navigatepageback();
      searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm7);
      searchPage.searchResult();
      productDetails.searchResultsNavigation();
      productDetails.addProduct();
     // shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm7);
      shoppingCartPage.deleteOptionSelectCheckout(testInputs.e2e_checkout.searchTerm7);
      shoppingCartPage.closeShoppingCart();
      searchPage.searchClearEnter();

      searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm7);
      searchPage.searchResult();
      productDetails.searchResultsNavigation();
      shoppingCartPage.closeShoppingCart();
      productDetails.addProductToCart();
      shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm7);
      shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm7);
      shoppingCartPage.engraveTypeEngrave(); */

      browser.sleep(5000);
      shoppingCartPage.giftWrapAllItemsTogetherBonusNo(); 

      //shipping and billing
      shoppingCartPage.cartTotalValidation();
      shoppingCartPage.openShoppingCart();
      shoppingCartPage.ShoppingCartCheckout();
      addressPage.billingAddressUS();
      addressPage.nextButtonCheckout();
      addressPage.standardizationAddressSelectCheckout();
      addressPage.standardizationAddressContinueCheckout();
      paymentpage.selectNextDayShipping();

      paymentpage.checkHandDeliveredIsSelected();
      paymentpage.selectStarCard();
      paymentpage.clickNextButton();
      browser.sleep(7000);

      paymentpage.starCardDetails(testInputs.e2e_checkout.starCard, testInputs.e2e_checkout.expiryDate, testInputs.e2e_checkout.authorizationCode, testInputs.e2e_checkout.authorizationAmount);
      paymentpage.uploadImg();
      paymentpage.PlaceOrderButtonEventHandleThis();
      paymentpage.imdoneButtonClick();
      reportInfo.log('Script Completed');
   }, testInputs.scriptTimeOut)


});