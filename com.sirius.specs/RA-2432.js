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


describe('RA-2432 E2E:16-Cutco@Home US-Social STD-Add: Cutlery(A)|Search, Knife(B)|PDP-Engrave:A(Bonus)&B-Bonus:A-GW:Individual-Update:SKU A +1 qty-Shipping:Ground-Paper Cheque/MO-Taxable-No.of Payments=1-Place Order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2432 E2E 16 - Context Switcher - Cutco at Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome(); 

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigSocialSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();
        shoppingCartPage.closeShoppingCart();

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

        searchPage.searchClearEnter();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.product);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        shoppingCartPage.closeShoppingCart();
        searchPage.searchClearEnter();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm8);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm8);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm8);
        shoppingCartPage.engraveTypeEngraveBonus();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm8);
        shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.searchTerm8);
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();

        //shipping and billing
        shoppingCartPage.cartTotalValidation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.billingAddressNotSameAsShipping(testInputs.RA_004ShippingAddress);
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressStandardizationCheckout();

        paymentpage.selectPaperCheckMOCard();
        paymentpage.clickNextButton();
        paymentpage.paperCheckDetails(testInputs.e2e_checkout.paperCheckDetails);
        paymentpage.PlaceOrderButton();
        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});