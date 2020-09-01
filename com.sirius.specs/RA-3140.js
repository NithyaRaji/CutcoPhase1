
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
var bonusAdvisor = require('../com.sirius.reusables/bonusAdvisor');


describe('RA-3140 - Verify whether The Bonus Limit Configuration does not persist from order to order.  When an order is completed or when an new order is started, the Bonus Limit Configuration should revert to the default value as configured for that sales rep. ', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3140 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.configSelect();
        shoppingCartPage.bonusSliderGreen();
        shoppingCartPage.configUpdate();
        shoppingCartPage.saveOrder();

        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.configSelect();
        shoppingCartPage.verifyBonusSliderDefault();
        shoppingCartPage.bonusSliderGreen();
        shoppingCartPage.configUpdate();

        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.nextButtonCheckout()
        addressPage.standardizationAddressSelect();
        addressPage.standardizationAddressContinue();
        paymentpage.clickNextButton();
        paymentpage.cardDetailsCheckout(testInputs.MasterCard);
        paymentpage.PlaceOrderButton();
        paymentpage.imdoneButtonClick();

        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.configSelect();
        shoppingCartPage.verifyBonusSliderDefault();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 
    it('RA-3140 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.configSelect();
        shoppingCartPage.bonusSliderGreen();
        shoppingCartPage.configUpdate();
        shoppingCartPage.saveOrder();

        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.configSelect();
        shoppingCartPage.verifyBonusSliderDefault();
        shoppingCartPage.bonusSliderGreen();
        shoppingCartPage.configUpdate();

        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressCA();
        addressPage.nextButtonCheckout()
        addressPage.standardizationAddressSelect();
        addressPage.standardizationAddressContinue();
        paymentpage.clickNextButton();
        paymentpage.cardDetailsCheckout(testInputs.MasterCard);
        paymentpage.PlaceOrderButton();
        paymentpage.imdoneButtonClick();

        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.configSelect();
        shoppingCartPage.verifyBonusSliderDefault();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3140 - Context Switcher - Cutco US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.configSelect();
        shoppingCartPage.bonusSliderGreen();
        shoppingCartPage.configUpdate();
        shoppingCartPage.saveOrder();

        homePage.selectShopFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.configSelect();
        shoppingCartPage.verifyBonusSliderDefault();
        shoppingCartPage.bonusSliderGreen();
        shoppingCartPage.configUpdate();

        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.nextButtonCheckout()
        addressPage.standardizationAddressSelect();
        addressPage.standardizationAddressContinue();
        paymentpage.clickNextButton();
        paymentpage.cardDetailsCheckout(testInputs.MasterCard);
        paymentpage.PlaceOrderButton();
        paymentpage.imdoneButtonClick();

        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.configSelect();
        shoppingCartPage.verifyBonusSliderDefault();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    


});