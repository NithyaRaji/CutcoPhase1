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


describe('RA-2428 E2E:12-Vector CA-H.Demo REG STD-Add: 2 sets via search and 1 knife via PLP(SKU B)- Bonus SKU B-Ground Shipping-CC-No.of Payment>1-Tax exempt PST only-Adjust order total & Roundup for charity by 1$- Save Cart-Config: V.Demo REG STD-Open PO-Place Order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2428 E2E 12 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector(); 


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
        productDetails.addProductWithoutCartOpen();
       // searchPage.searchClearEnter();

        shoppingCartPage.openShoppingCart();
        // shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm2);
        // shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.searchTerm2);

        // Verify Price
        shoppingCartPage.cartTotalValidation();

        //shipping and billing
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressCA();
        addressPage.billingAddressNotSameAsShippingCA(testInputs.RA_012CAAddressShipping);
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressStandardizationCheckout();


        //Paymentx
        paymentpage.selectTaxExemptPST();
        paymentpage.uploadImg();
        paymentpage.selectPaymentoption();
        paymentpage.clickNextButton();

        paymentpage.cardDetailsCheckout(testInputs.MasterCard);
        paymentpage.saveOrderBillingPage();

        homePage.verfiyReturnHomePage();


        // Verify the save orderdetails - Verification
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigVirtualDemoSelect();
        shoppingCartPage.ConfigOrderTypeSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();

        homePage.selectHomeFromLeftNavigation();
        homePage.selectPendingOrder();

        // Verification for order config needs to be added
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout1();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressStandardizationCheckout();
        paymentpage.clickNextButton1();
        paymentpage.cardDetailsCheckout(testInputs.RA_006_DiscoverCard);
        paymentpage.uploadImg();
        paymentpage.PlaceOrderButton();

        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});