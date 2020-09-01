var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var shopObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var payment = require('../com.sirius.reusables/paymentPage.js');


describe('In Vector US, Verify whether the Shipping methods are displayed correctly based on the order config selection for Promotional orders', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2969 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressContinue();

        payment.verifyOleanDeliveryOptions();

        browser.navigate().back();
        browser.navigate().back();

        shoppingCartPage.configSelect();
        var shopPO = new shopObj();
        shopPO.brandingTools.click();
        shoppingCartPage.configUpdate();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButton1();


        payment.verifyBrandingDeliveryOptions();
       
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)



    
    

    

});