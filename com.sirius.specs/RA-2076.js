
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


describe('RA-2076 E2E 9 - Vector CA - Virtual Demo Reg Std - 20 line items - engrave, bonus apply - bonus engraving - gift wrap -  update SKU - tax exempt both - single payment VISA order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2076 E2E 9 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector(); 

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigVirtualDemoSelect();
        shoppingCartPage.ConfigOrderTypeSelect();
        shoppingCartPage.ConfigPriceTypeStandardSelect();
        shoppingCartPage.configUpdate();
      
        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm5);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        searchPage.searchClearEnter();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm5);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm5);
        shoppingCartPage.engraveTypeEngrave(); 

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm9);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        searchPage.searchClearEnter();
        shoppingCartPage.closeShoppingCart();
        
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm6);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        searchPage.searchClearEnter();
        shoppingCartPage.closeShoppingCart();
       
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        searchPage.searchClearEnter();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveTypeEngraveBonus();
       
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm9);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm9);
        shoppingCartPage.engraveTypeMonogramSquarePlateBonus();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm5);
        shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.searchTerm5); 
        shoppingCartPage.openShoppingCart();
        //shoppingCartPage.SavingsOptionSelectAndUpgradeSet();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm6);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm6);
        shoppingCartPage.engraveTypeMonogramSquarePlateBonus(); 
        browser.sleep(7000);
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();

        //shipping and billing
        shoppingCartPage.cartTotalValidation(); 
        shoppingCartPage.ShoppingCartCheckout();

        addressPage.billingAddressCA();
        addressPage.billingAddressSameAsShippingLink();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout(); 

        paymentpage.selectCreditCard();
        paymentpage.selectTaxExemptBoth();
        paymentpage.uploadImg();
        paymentpage.selectPaymentoption();
        paymentpage.clickNextButton();
        browser.sleep(6000);
        //paymentpage.cardDetails();
        paymentpage.cardDetailsCheckout(testInputs.MasterCard);
        paymentpage.PlaceOrderButton();
        paymentpage.imdoneButtonClick();  
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    
});