
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


describe('RA-2080 E2E 10 - Vector CA - Event Reg Std - Multiple qtys of 2 set SKUs in cart - Engrave & bonus engrave - Gift wrap - Update cart - Hand delivered - PST exempt - 5 series master card > 1 payments', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2080 E2E 10 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector(); 

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigEventSelectCheckout(testInputs.e2e_checkout.eventState_BC,testInputs.e2e_checkout.eventValue);
        shoppingCartPage.configUpdate();
        shoppingCartPage.closeShoppingCart();
       
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm6);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        searchPage.searchClearEnter();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm6);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm6);
       // shoppingCartPage.engraveTypeEngraveBonus();
        shoppingCartPage.BonusOptionsDisabled();
        shoppingCartPage.closeShoppingCart();
       
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        searchPage.searchClearEnter();
        shoppingCartPage.closeShoppingCart();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        searchPage.searchClearEnter();
        shoppingCartPage.closeShoppingCart();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm4);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        searchPage.searchClearEnter();
        shoppingCartPage.closeShoppingCart();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm3);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        searchPage.searchClearEnter();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm3);
        shoppingCartPage.deleteOptionSelectCheckout(testInputs.e2e_checkout.searchTerm3);

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveTypeEngrave();
        browser.sleep(6000);
        shoppingCartPage.openShoppingCart();
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusYes();
        shoppingCartPage.cartTotalValidation(); 

        //shipping and billing
        shoppingCartPage.ShoppingCartCheckout();
        shoppingCartPage.fillEventNameDetails();
        addressPage.billingAddressCA();
        addressPage.billingAddressSameAsShippingLink();
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout(); 


        paymentpage.selectNextDayShipping();
        paymentpage.checkHandDeliveredIsSelected();
   
        paymentpage.selectTaxExemptPST();
        paymentpage.uploadImg();
        paymentpage.selectPaymentoption();
        paymentpage.clickNextButton();

        paymentpage.cardDetailsCheckout(testInputs.RA_007_MasterCard);
        paymentpage.PlaceOrderButtonEventHandleThis1();
        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    
    
});