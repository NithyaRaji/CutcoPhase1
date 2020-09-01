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


describe('RA-2431 E2E:15-Cutco@Home US-1:1 STD-Add:20 line item-Add engrave-Apply Bonus-Savings: Set & Add Engrave-GW: All items together-Delete: GW-GW: Custom-Change Attr: SKU A & +1 qty-Charge shipping-CC-Tax exempt-No.of Payments>1-Place Order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2431 E2E 15 - Context Switcher - Cutco at Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome(); 

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigSocialSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm5);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        searchPage.searchClearEnter();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm5);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm5);
        shoppingCartPage.engraveTypeEngrave();
        shoppingCartPage.closeShoppingCart();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm6);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        searchPage.searchClearEnter();
        shoppingCartPage.closeShoppingCart();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm9);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        searchPage.searchClearEnter();
        shoppingCartPage.closeShoppingCart();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        searchPage.searchClearEnter();
        productDetails.addProduct();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveTypeEngraveBonus();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm9);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm9);
        shoppingCartPage.engraveTypeMonogramSquarePlateBonus();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm5);
        shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.searchTerm5);

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm6);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm6);
        shoppingCartPage.engraveTypeMonogramDiamondPlateBonus();
        shoppingCartPage.giftWrapCustomBonusNo();
        shoppingCartPage.openShoppingCart();

        
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.productWrap);
        shoppingCartPage.deleteOptionSelect();

        //shipping and billing
        shoppingCartPage.cartTotalValidation();
        shoppingCartPage.ShoppingCartCheckout1();
        //shoppingCartPage.confirmCustomGiftWrapping();
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
        paymentpage.cardDetailsCheckout(testInputs.RA_007_MasterCard);
        paymentpage.PlaceOrderButton();
        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});