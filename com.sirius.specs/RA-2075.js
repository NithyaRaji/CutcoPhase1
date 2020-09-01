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


describe('RA-2075 E2E 7 - Vector US - Virtual demo standard price - GC, set SKU add to cart, engrave & bonus it - Update cart  - chargeable shipping, tax exempt select, switch context - Save order -Switch back context, retrieve saved order & place 2 series master order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2075 E2E 7 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector(); 

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigVirtualDemoSelect();
        shoppingCartPage.ConfigOrderTypeSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();

        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductWithoutCartOpen();
        browseByCategory.handlePopup(); 
        productDetails.addProductWithoutCartOpen();

        searchPage.searchClearEnter();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.engraveTypeEngraveBonus();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTermGiftCard);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.giftcardQtyUpdateCheckout(testInputs.e2e_checkout.giftCardQty);
        productDetails.addProductToCart();


        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.billingAddressNotSameAsShipping(testInputs.RA_007ShippingAddress);
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressStandardizationCheckout();

        paymentpage.selectNextDayShipping();
        paymentpage.selectCreditCard();
        paymentpage.selectTaxExemptCheckout();
        paymentpage.uploadImg();
        paymentpage.selectPaymentoption();
        paymentpage.clickNextButton();

        //Back to shop screen on Mobile to get the context switcher account details
            utilities.navigatepageback();
            utilities.navigatepageback();
            utilities.navigatepageback();
            utilities.navigatepageback();
            utilities.navigatepageback();
            if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.navigatepageback();
        }
            utilities.pageWaitSec(10);
    
        
        homePage.switchToVectorCAAndSaveOrder();
        homePage.againSwitchToVectorUS();
        shoppingCartPage.verifySaveOrderCheckout();
        homePage.selectShopFromLeftNavigation();

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigHomeSelect();
        shoppingCartPage.ConfigOrderTypeSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();


        homePage.selectHomeFromLeftNavigation();
        homePage.selectPendingOrder();

        utilities.pageWaitSec(15);
        shoppingCartPage.cartTotalValidation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout1();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressStandardizationCheckout();
        paymentpage.clickNextButton1();

        paymentpage.cardDetailsCheckout(testInputs.RA_007_MasterCard);
        paymentpage.PlaceOrderButton();

        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});