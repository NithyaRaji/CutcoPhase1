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


describe('RA-3289 - When the user has resumed a pending order and removes the attached photo, ensure that the pending order is only updated only when the user manually saves the order', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3289 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
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
        paymentpage.selectTaxExemptCheckout();
        paymentpage.uploadTaxImg();
        paymentpage.saveOrderBillingPage();

        homePage.selectPendingOrder();
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        paymentpage.removeTaxImg();
        paymentpage.saveOrderBillingPage();


        homePage.selectPendingOrder();
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        expect(element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate1']//div[contains(text(),'Select')]")).isPresent());
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 /*
    it('RA-3289 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
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
        paymentpage.selectTaxExemptGST();
        paymentpage.uploadTaxImg();
        paymentpage.saveOrderBillingPage();

        homePage.selectPendingOrder();
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        paymentpage.removeTaxImg();
        paymentpage.saveOrderBillingPage();


        homePage.selectPendingOrder();
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        expect(element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate1']//div[contains(text(),'Select')]")).isPresent());
       

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3289 - Context Switcher - Cutco US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
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
        paymentpage.selectTaxExemptCheckout();
        paymentpage.uploadTaxImg();
        paymentpage.saveOrderBillingPage();

        homePage.selectPendingOrder();
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        paymentpage.removeTaxImg();
        paymentpage.saveOrderBillingPage();


        homePage.selectPendingOrder();
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        expect(element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate1']//div[contains(text(),'Select')]")).isPresent());
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 */   


});