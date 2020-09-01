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

describe('RA-2435 E2E:19-Cutco@Home US-1:1(Virtual) STD-Add:GC($200)|1, Set(A)|PDP|2-Engrave:A(Bonus)-Update:GC($225)-Shipping:Charageable-CC-Tax exempt-No.of Payments=1-Switch:Vector US-Save-Switch:Cutco@Home US-Open PO-Config:1:1(Person) STD-Open PO-Place Order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2435 E2E 19 - Context Switcher - Cutco at Home US', function () {
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

        searchPage.searchWithSkuID("2018C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        productDetails.addProduct();
        shoppingCartPage.productNameMoreOption("2018C");
        shoppingCartPage.engraveOptionSelectCheckout("2018C");
        shoppingCartPage.engraveTypeEngraveBonus();

        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.billingAddressNotSameAsShipping(testInputs.RA_007ShippingAddress);
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressStandardizationCheckout();
        paymentpage.selectNextDayShipping();
        paymentpage.selectCreditCard();
        paymentpage.selectTaxExemptCheckout();
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
        browser.sleep(10000);


        homePage.switchToVectorUSAndSaveOrder();
        homePage.verfiyReturnHomePage();
        homePage.againSwitchToCutcoHomeUS();
        browser.sleep(8000);
        homePage.verfiyReturnHomePageCheck();
        shoppingCartPage.verifySaveOrderCheckout();

        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigHomeSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();
        shoppingCartPage.closeShoppingCart(); 

        homePage.selectHomeFromLeftNavigation();
        homePage.selectPendingOrder();
        shoppingCartPage.cartTotalValidation();
        browser.sleep(8000);

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