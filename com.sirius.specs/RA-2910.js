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


describe('RA-2910 - Verify whether gift wrapping is getting updated when a user breakdown a gift-wrapped configured set product', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2910 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID("2131C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();
        shoppingCartPage.productNameMoreOption("2131C");
        shoppingCartPage.setBreakDown();
        shoppingCartPage.ContinueSetBreakDown();
        
        utilities.pageWaitSec(3);
        expect(element(by.xpath("//div[@class='cart-item-qty-wrapper']/span[@class='qty-text'][contains(text(),'3')]")));

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 
    it('RA-2910 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID("2131C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();
        shoppingCartPage.productNameMoreOption("2131C");
        shoppingCartPage.setBreakDown();
        shoppingCartPage.ContinueSetBreakDown();
        utilities.pageWaitSec(3);
        expect(element(by.xpath("//div[@class='cart-item-qty-wrapper']/span[@class='qty-text'][contains(text(),'3')]")));

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-2910 - Context Switcher - Cutco US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID("2131C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();
        shoppingCartPage.productNameMoreOption("2131C");
        shoppingCartPage.setBreakDown();
        shoppingCartPage.ContinueSetBreakDown();
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='cart-item-qty-wrapper']/span[@class='qty-text'][contains(text(),'3')]")));

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    


});