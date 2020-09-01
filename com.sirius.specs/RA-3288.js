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


describe('RA-3288 - When an image is attached to the order, ensure that the attached image is included in all save order processes', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3288 - Context Switcher - Vector US', function () {
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
        utilities.navigatepageback();
        utilities.navigatepageback();
        shoppingCartPage.saveOrder();

        homePage.selectPendingOrder();
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();

        expect(element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate']//div[contains(text(),'Remove')]")));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 
    it('RA-3288 - Context Switcher - Vector CA', function () {
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
        addressPage.billingAddressCA();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();
        paymentpage.selectTaxExemptPST();
        paymentpage.uploadTaxImg();
        utilities.navigatepageback();
        utilities.navigatepageback();
        shoppingCartPage.saveOrder();

        homePage.selectPendingOrder();
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();

        expect(element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate']//div[contains(text(),'Remove')]")));

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3288 - Context Switcher - Cutco US', function () {
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
        utilities.navigatepageback();
        utilities.navigatepageback();
        shoppingCartPage.saveOrder();

        homePage.selectPendingOrder();
        homePage.selectShopFromLeftNavigation();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressContinueCheckout();

        expect(element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate']//div[contains(text(),'Remove')]")));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    


});