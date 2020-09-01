var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var searchPage = require('../com.sirius.reusables/search.js');
var testInputs = require('../com.sirius.testData/data.json');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');

describe('RA-2079 E2E 8 - Vector CA - Home Demo Reg Std - multiple SKUs, qtys + GC - engrave set, knife - bonus knife - Set upgrade - gift wrap -  update SKU - taxable > 1 payment AMEX order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })


    it('RA-2079 E2E 8 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector(); 
        // browseByCategory.selectCategoryFromShopPage();
        // shopCatalog.AddToCartButtonPLP();
        // browseByCategory.selectCategoryFromSetPage();
        // productDetails.addProduct();
        // browseByCategory.handlePopup(); 
        // shoppingCartPage.closeShoppingCart();
        // utilities.navigatepageback();
        // browser.sleep(6000);
        // browseByCategory.selectCategoryFromSetPage();
        // productDetails.addProduct();
        // shoppingCartPage.closeShoppingCart();
        // utilities.navigatepageback();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();        
        browseByCategory.handlePopup(); 
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveTypeEngrave();
        utilities.navigatepageback();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm2);
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);
        browser.sleep(8000);
        shoppingCartPage.UpgradeOptionSelectAndUpgradeSet();
        shoppingCartPage.productNameMoreOption("1814C");
        shoppingCartPage.engraveOptionSelectCheckout("1814C");
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus(); 
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();
        shoppingCartPage.cartTotalValidation(); 
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressCA();
        addressPage.billingAddressNotSameAsShippingCA(testInputs.RA_008CAAddressShipping);
        
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressStandardizationCheckout();

        paymentpage.selectNextDayShipping();
        paymentpage.selectCreditCard();
        
        paymentpage.selectPaymentoption();
        paymentpage.clickNextButton();
        paymentpage.cardDetailsCheckout(testInputs.RA_005_AMEXCard);
        paymentpage.PlaceOrderButtonEventHandleThis1();
        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

  
});