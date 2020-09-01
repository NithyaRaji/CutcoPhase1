var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var searchPage = require('../com.sirius.reusables/search.js');
var testInputs = require('../com.sirius.testData/data.json');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');

describe('RA-2034 E2E 1 - Vector US - Home demo std price config - add multiple qty from diff landing pages to cart - Bonus & Engrave checks - Switch to catalog pricing - Checkout using >1 ACH payment', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2034 E2E 1 - Context Switcher - Vector US', function () {

        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveTypeEngrave();
        browser.sleep(7000);
        shoppingCartPage.closeShoppingCart();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.engraveTypeMonogramDiamondPlateNoBonus();

        browser.sleep(7000);
        shoppingCartPage.closeShoppingCart();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm3);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm3);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm3);
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();

        browser.sleep(7000);
        shoppingCartPage.closeShoppingCart();
        searchPage.searchClearEnter();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTermGiftCard);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.giftcardQtyUpdate();
        productDetails.addProductWithoutCartOpen();

        searchPage.searchClearEnter();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.setbonus);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.setbonus);
        shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.setbonus);
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();
        browser.sleep(7000); 

        shoppingCartPage.cartTotalValidation();
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigHomeSelect();
        shoppingCartPage.ConfigOrderTypeSelect();
        shoppingCartPage.ConfigPriceTypeCatalogSelect();
        shoppingCartPage.configUpdate();
        shoppingCartPage.selectCatalogPricing();
        shoppingCartPage.openShoppingCart(); 
        shoppingCartPage.ShoppingCartCheckout();

        addressPage.billingAddressUS();
        addressPage.billingAddressNotSameAsShipping(testInputs.StandardizedUSAddress);
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressStandardizationCheckout();
        paymentpage.selectNextDayShipping();
        paymentpage.selectBeforeChristmas();
        paymentpage.selectACH();
        paymentpage.selectPaymentoption();
        shippingPage.shippingpageNextButton();
        paymentpage.achCardDetails();
        paymentpage.PlaceOrderButtonEventHandleThis();
        paymentpage.imdoneButtonClick(); 
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});