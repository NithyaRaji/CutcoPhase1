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


describe('RA-2434 E2E:18-Cutco@Home US-1:1(In Person) STD-Add: Set(A)|Search, Set(A)|Search, Knife(B)|PLP-Bonus: B-Shipping: Charageable-CC-Tax exempt-No.of Payments>1-Save-Config: 1:1(Virtual) STD-Open PO-Place Order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2434 E2E 18 - Context Switcher - Cutco at Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome(); 
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductWithoutCartOpen();
        browseByCategory.handlePopup(); 
        searchPage.searchClearEnter();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductWithoutCartOpen();
        searchPage.searchClearEnter();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.product2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);

        //shipping and billing
        shoppingCartPage.cartTotalValidation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.billingAddressSameAsShippingLink();
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();

        paymentpage.selectNextDayShipping();
        paymentpage.selectCreditCard();
        paymentpage.selectTaxExemptCheckout();
        paymentpage.uploadImg();
        paymentpage.selectPaymentoption();
        paymentpage.clickNextButton();

        paymentpage.cardDetailsCheckout(testInputs.RA_006_DiscoverCard);
        paymentpage.saveOrderBillingPage();
        shoppingCartPage.verifySaveOrderCheckout();

        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigSocialSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();
        shoppingCartPage.closeShoppingCart();
        homePage.selectHomeFromLeftNavigation();
        homePage.selectPendingOrder();

        //Verification for order config needs to be added
        browser.sleep(8000);
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout1();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        paymentpage.clickNextButton1();
        paymentpage.cardDetailsCheckout(testInputs.RA_006_DiscoverCard);
        paymentpage.PlaceOrderButton();

        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});