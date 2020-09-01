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


describe('RA-2042 E2E 5 - Vector US - Checked in to 99999 event not found event - add to cart - engrave & bonus engrave & check cart - Gift wrap & check cart - Save cart - check PO - retrieve PO - check order config -  Tax exempt, hand delivered, > 1 Amex payment', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2042 E2E 5 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector(); 
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigEventSelectCheckout(testInputs.e2e_checkout.state, testInputs.e2e_checkout.eventName);
        shoppingCartPage.configUpdate();
        shoppingCartPage.closeShoppingCart();

        homePage.selectShopFromLeftNavigation();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.quantityValue(testInputs.e2e_checkout.quantity);
        productDetails.addProductWithoutCartOpen(); 
        browseByCategory.handlePopup(); 

        searchPage.searchWithSkuID(testInputs.e2e_checkout.product1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductWithoutCartOpen();

        searchPage.searchClearEnter();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm8);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm8);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm8);
        shoppingCartPage.engraveTypeMonogramSquarePlateBonus();

        utilities.pageWaitSec(6);
        shoppingCartPage.giftWrapAllItemsTogetherBonusNo();
        shoppingCartPage.cartTotalValidation();
        shoppingCartPage.saveOrder();
        utilities.pageWaitSec(6);
        homePage.selectPendingOrder(); 


        shoppingCartPage.closeShoppingCart();
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigEventSelectVerificationCheckout();
        shoppingCartPage.configCancel();

        utilities.pageWaitSec(5);
        shoppingCartPage.openShoppingCart();
        shoppingCartPage.ShoppingCartCheckout();
        shoppingCartPage.fillEventNameDetails();
        addressPage.billingAddressUS();
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();


        paymentpage.selectNextDayShipping();
        paymentpage.checkHandDeliveredIsSelected();
        paymentpage.selectCreditCard();
        paymentpage.selectTaxExemptCheckout();
        paymentpage.uploadImg();
        paymentpage.selectPaymentoption();
        paymentpage.clickNextButton();

        paymentpage.cardDetailsCheckout(testInputs.RA_005_AMEXCard);
        paymentpage.PlaceOrderButton();
        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});