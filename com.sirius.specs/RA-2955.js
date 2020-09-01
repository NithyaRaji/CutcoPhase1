var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var addressValidation = require('../com.sirius.reusables/addressValidation.js')
var searchPage = require('../com.sirius.reusables/search.js');
var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var promo = require('../com.sirius.reusables/promoPage.js');

describe('Verify whether the billing address is pre-populated with logged in rep’s address and the field should be enabled for editing', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2955 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();

        browser.sleep(5000);

        shoppingCartPage.ShoppingCartCheckout();

        addressValidation.promoValidateVectorUS();

        promo.editPromoAddress();

        addressPage.nextButton();

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-2955 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        utilities.pageWaitSec(5);
        
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();

        browser.sleep(5000);

        shoppingCartPage.ShoppingCartCheckout();

        addressValidation.promoValidateVectorCA();

        promo.editPromoAddress();

        addressPage.nextButton();

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2955 - Context Switcher - Cutco at Home US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        utilities.pageWaitSec(5);

        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();

        browser.sleep(5000);

        shoppingCartPage.ShoppingCartCheckout();

        addressValidation.promoValidateCutcoUS();

        promo.editPromoAddress();

        addressPage.nextButton();

    
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    

    

});