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


describe('RA-3222 - verify whether If the “Remove” link is used, the image is deleted from the order and the file selection section reverts to its default view (“None Selected” and a text link of “Select >”', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3222 - Context Switcher - Vector US', function () {
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
        paymentpage.uploadImg();
        paymentpage.verifyStarCardImgField();
        paymentpage.removeImg();
        expect(element(by.xpath("//div[@class='image-btn'][contains(text(),'Select')]")).isPresent());
        expect(element(by.xpath("//div[@class='image-btn'][contains(text(),'Remove')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//div[@class='image-text'][contains(text(),'None')]")).isPresent());
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    


});