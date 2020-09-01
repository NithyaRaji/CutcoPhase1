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
var browserDetails = require('../com.sirius.reusables/browserDetails.js');

describe('RA-2429 E2E:13-Vector CA-V.Demo REG STD-Add: GC|1qty|$200, SKU A: Set|2qty-Engr&bonus:A-Change GC:$225-Chargeable Shipping-CC-Tax exempt Both-No.of Payment=1-Switch Context:Vector US-Save Order-Switch Context:Vector CA-Config: H.Demo REG STD-Open PO-Place Order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2429 E2E 13 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector(); 

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigEventSelect();
        shoppingCartPage.ConfigOrderTypeSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();
        shoppingCartPage.closeShoppingCart();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        searchPage.searchClearEnter();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.engraveTypeEngraveBonus();

        //shipping and billing
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressCA();
        addressPage.billingAddressSameAsShippingLink();
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();


        paymentpage.selectNextDayShipping();
        paymentpage.selectCreditCard();
        paymentpage.selectTaxExemptBoth();
        paymentpage.uploadImg();
        paymentpage.selectPaymentoption();
        paymentpage.clickNextButton();

            utilities.navigatepageback();
            utilities.navigatepageback();
            utilities.navigatepageback();
            utilities.navigatepageback();
            if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.navigatepageback();
            }
            browser.sleep(20000);

        homePage.switchToVectorUSAndSaveOrder();
       // homePage.verfiyHomePage();
        homePage.againSwitchToVectorCA();
        shoppingCartPage.verifySaveOrderCheckout();

        homePage.selectShopFromLeftNavigation();

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigHomeSelect();
        shoppingCartPage.ConfigOrderTypeSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();


        homePage.selectHomeFromLeftNavigation();
        homePage.selectPendingOrder();

        // Verify order config verification needs to be added
        shoppingCartPage.cartTotalValidation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout1();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        paymentpage.clickNextButton1();

        paymentpage.cardDetailsCheckout(testInputs.RA_007_MasterCard);
        paymentpage.PlaceOrderButton();

        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});