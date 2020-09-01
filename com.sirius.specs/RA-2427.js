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


describe('RA-2427 E2E 11-Vector CA-Event Reg Std:99999-Event-Add: Set 3 qty with Engrave & bonus, knife via search-Gift wrap: All items individually-Save Cart-Change config: HomeDemo REG Standard-Open PO-Paper Cheque/MO-Tax exempt GST', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2427 E2E 11 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector(); 

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigEventSelectCheckout(testInputs.e2e_checkout.eventState_Q, testInputs.e2e_checkout.eventNotFound);
        shoppingCartPage.configUpdate();
        shoppingCartPage.closeShoppingCart();

        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        //productDetails.quantityValue(testInputs.e2e_checkout.quantity);
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.engraveTypeEngraveSquarePlateBonus();
        //shoppingCartPage.closeShoppingCart();

        // searchPage.searchWithSkuID(testInputs.e2e_checkout.product2);
        // searchPage.searchResult();
        // productDetails.searchResultsNavigation();
        // productDetails.addProduct();
        // searchPage.searchClearEnter();

        shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();
        shoppingCartPage.saveOrder();
        homePage.selectShopFromLeftNavigation();

        //Update Config
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigHomeSelect();
        shoppingCartPage.ConfigOrderTypeSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();

        homePage.selectHomeFromLeftNavigation();
        homePage.selectPendingOrder();

        //Verify Order Config
        shoppingCartPage.cartTotalValidation();

        //Shipping and Billing
        shoppingCartPage.ShoppingCartCheckout();
        shoppingCartPage.fillEventNameDetails();
        addressPage.billingAddressCA();
        addressPage.billingAddressSameAsShippingLink();
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        paymentpage.selectNextDayShipping();

        paymentpage.selectPaperCheckMOCard();
        paymentpage.selectTaxExemptGST();
        paymentpage.uploadImg();
        paymentpage.clickNextButton();
        browser.sleep(5000);
        paymentpage.paperCheckDetails(testInputs.e2e_checkout.paperCheckDetails);
        paymentpage.PlaceOrderButton();
        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});