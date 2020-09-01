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
const browserDetails = require('../com.sirius.reusables/browserDetails.js');



describe('RA-2950 - In Vector US for 2 Day & Next Day shipping method, Verify whether there is a button showing a placeholder charge as returned by the service.', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2950 - Context Switcher - Vector US - LIT', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("A125");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressContinue();
        paymentpage.selectTwoDayShipping();

        expect(element(by.xpath("//div[contains(text(),'* Shipping cost will be determined and charged at time of shipment.')]")).isDisplayed());
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    
});