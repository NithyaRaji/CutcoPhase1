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


describe('RA-2043 E2E 6 - Vector US - Home demo catalog pricing selected - SKUs added from PLP & search - Bonus SKU & check cart - tax exempt, >1 discover payment order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2043 E2E 6 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage(); 
        homePage.switchToVectorUS(); 
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector(); 

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigHomeSelect();
        shoppingCartPage.ConfigOrderTypeSelect();
        shoppingCartPage.ConfigPriceTypeCatalogSelect();
        shoppingCartPage.configUpdate();
        shoppingCartPage.closeShoppingCart();

        homePage.selectShopFromLeftNavigation();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.quantityValue(testInputs.e2e_checkout.quantity);
        productDetails.addProductWithoutCartOpen();
        browseByCategory.handlePopup(); 

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        searchPage.searchClearEnter();

        shoppingCartPage.BonusOptionsDisabled();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.billingAddressSameAsShippingLink();
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();

        paymentpage.selectNextDayShipping();
        paymentpage.selectTaxExemptCheckout();
        paymentpage.uploadImg();
        paymentpage.clickNextButton();

        paymentpage.cardDetailsCheckout(testInputs.RA_006_DiscoverCard);
        paymentpage.saveOrderBillingPage();

        homePage.verfiyReturnHomePage();/*
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigHomeSelect();
        shoppingCartPage.ConfigOrderTypeSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();
        shoppingCartPage.closeShoppingCart();

        homePage.selectHomeFromLeftNavigation(); */
        homePage.selectPendingOrder();

        utilities.pageWaitSec(10);
        shoppingCartPage.cartTotalValidation();
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