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


describe('RA-3219 - verify whether error message is thrown on use of “Place Order” when no image as been selected / attached in the customer info page3', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3219 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigEventSelectCheckout(testInputs.e2e_checkout.state_NY , testInputs.e2e_checkout.eventName1);
        shoppingCartPage.configUpdate();
        searchPage.searchWithSkuID("2018C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.billingAddressUS();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        paymentpage.selectStarCard();
        paymentpage.clickNextButton();
        paymentpage.starCardDetails(testInputs.e2e_checkout.starCard, testInputs.e2e_checkout.expiryDate, testInputs.e2e_checkout.authorizationCode, testInputs.e2e_checkout.authorizationAmount);
        paymentpage.customerNotPresentClick();
        paymentpage.PlaceOrderButtonClick();
        expect(element(by.xpath("//div[@class='warning-text error-message ng-star-inserted'][contains(text(),'Star card receipt is required')]")).isPresent);
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    


});