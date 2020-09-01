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

describe('RA-2437 E2E:21-Admin Masquerading-Add: Knife(A)|1|search, Set(B)|2|PDP, Knife(C)|1|PLP-Engrave:A(Bonus)-Shipping:Ground-CC-Taxable-No.of Payments>1-Save-End Masquerade-Logout-Login(Masqueraded Acc)-Open PO-Place Order', function () {

    beforeEach(function () {
        launcher.launchApplication();
        browser.refresh();
    })

    it('RA-2437 E2E 21 - Context Switcher - Masquerading', function () {
        loginApp.loginAccountCheckout("admin1", "Cutco@123");
        //loginApp.loginAccountCheckout(process.env.admin, process.env.password);
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        browser.sleep(6000);
        homePage.masquerade(testInputs.e2e_checkout.masqueradeSearchTerm);
        utilities.pageWait(10000);
        homePage.verfiyHomePage2();
        homePage.selectShopFromLeftNavigation();
       // browseByCategory.handlePopupCutcoHome(); 

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
      //  browseByCategory.handlePopup(); 
        // shoppingCartPage.closeShoppingCart();
        // utilities.navigatepageback();
        // browser.sleep(4000);
        // browseByCategory.selectCategoryFromShopPage();
        // shopCatalog.AddToCartButtonPLP();
        // browseByCategory.selectCategoryFromSetPage();
        // productDetails.addProduct();
        // shoppingCartPage.closeShoppingCart();
        // productDetails.addProduct();
        // shoppingCartPage.closeShoppingCart();
        // utilities.navigatepageback();
        // browseByCategory.selectCategoryFromSetPage();
        // productDetails.addProduct();
        // utilities.navigatepageback();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveTypeEngrave();

        //shipping and billing
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.billingAddressNotSameAsShipping(testInputs.RA_007ShippingAddress);
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressStandardizationCheckout();

       // if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.navigatepageback();
            utilities.navigatepageback();
            utilities.navigatepageback();
            browser.sleep(6000);
        //}
       // homePage.selectHomeFromLeftNavigation();
        homePage.endMasquerade();
        browser.sleep(10000);
        homePage.logout();
        browser.sleep(5000);
        
        loginApp.loginAccountCheckout("sr1", "Cutco@123");
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPendingOrder();
        shoppingCartPage.cartTotalValidation();
        shoppingCartPage.ShoppingCartCheckout();

        addressPage.nextButtonCheckout1();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressStandardizationCheckout();

        paymentpage.selectNextDayShipping();
        paymentpage.selectCreditCard();
        paymentpage.selectTaxExemptCheckout();
        paymentpage.uploadImg();
        paymentpage.clickNextButton();

        paymentpage.cardDetailsCheckout(testInputs.RA_006_DiscoverCard);
        paymentpage.PlaceOrderButton();

        paymentpage.imdoneButtonClick();
        // browseByCategory.handlePopupCutcoHome(); 
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});