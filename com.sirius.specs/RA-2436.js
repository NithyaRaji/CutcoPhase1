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


describe('RA-2436 E2E:20-Admin Masquerading-Add: Knife(A)|1|search, Set(B)|2|PDP, Knife(C)|1|PLP-Engrave:B-Bonus:C-GW:Individually-Update:C(+1 qty)-Shipping:Charageable-CC-Tax exempt-No.of Payments=1-Place Order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2436 E2E 20 - Context Switcher - Masquerading', function () {
        loginApp.loginAccountCheckout("admin1", "Cutco@123");
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.masquerade("sr2");
        browser.sleep(5000);
        homePage.verfiyHomePage2();
        homePage.selectShopFromLeftNavigation();
        //browseByCategory.handlePopupCutcoHome(); 

        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProduct();
        //browseByCategory.handlePopup(); 
        shoppingCartPage.closeShoppingCart();
        utilities.navigatepageback();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm6);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        shoppingCartPage.closeShoppingCart();
        utilities.navigatepageback();

        searchPage.searchClearEnter();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm6);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm6);
        shoppingCartPage.engraveTypeEngraveSquarePlateBonus();


        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);

        shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();

        //shipping and billing
        shoppingCartPage.cartTotalValidation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.billingAddressNotSameAsShipping(testInputs.RA_007ShippingAddress);
        addressPage.nextButtonCheckout();

        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressStandardizationCheckout();


        paymentpage.selectNextDayShipping();
        paymentpage.selectCreditCard();
        paymentpage.selectTaxExemptCheckout();
        paymentpage.selectPaymentoption();
        paymentpage.uploadImg();
        paymentpage.clickNextButton();


        paymentpage.cardDetailsCheckout(testInputs.RA_007_MasterCard);
        paymentpage.PlaceOrderButton();

        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});