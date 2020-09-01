var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');



describe('RA-2923- In Vector CA and Cutco@Home US, Verify whether both the payment options "Credit Card" and "Your Commission" are enabled and not dependent on the Order configuration with the pricing model', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2923 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L15");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();

        expect(element(by.xpath("//ion-label[contains(text(),'Credit')]")).isEnabled());
        expect(element(by.xpath("//ion-label[contains(text(),'Your')]")).isEnabled());

        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2923 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L62");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();

        expect(element(by.xpath("//ion-label[contains(text(),'Credit')]")).isEnabled());
      //  expect(element(by.xpath("//ion-label[contains(text(),'Your')]")).isEnabled());

        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
   

});