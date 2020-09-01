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



describe('RA-2924- In Vector US, Verify whether the Payment selection in Shipping and Payment page is completely based on Order config selection', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2924 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L216");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton();
        addressPage.standardizationAddressContinue();

        expect(element(by.xpath("//ion-label[contains(text(),'Credit')]/ancestor::ion-item[@ng-reflect-disabled='false']")).isDisplayed());
      //  expect(element(by.xpath("//ion-label[contains(text(),'Your')]/ancestor::ion-item[@ng-reflect-disabled='true']")).isDisplayed());

        utilities.navigatepageBackDesktop();
        utilities.navigatepageBackDesktop();
        shoppingCartPage.configSelect();
        shoppingCartPage.selectCommissionConfig();
        shoppingCartPage.configUpdate();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton1();
       // addressPage.standardizationAddressContinue();

       // expect(element(by.xpath("//ion-label[contains(text(),'Credit')]/ancestor::ion-item[@ng-reflect-disabled='true']")).isDisplayed());
        expect(element(by.xpath("//ion-label[contains(text(),'Your')]/ancestor::ion-item[@ng-reflect-disabled='false']")).isDisplayed());
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
   

});