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


describe('RA-3136 - verify whether error message is dispalyed when an existing cart already has bonused items in it and the user adjusts the configured bonus limit, if the user’s adjustment percentage is less than the percentage already used by the cart', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3136 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup();
        productDetails.addProductToCart();
        searchPage.searchWithSkuID("1810C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.productNameMoreOption("1810C");
        shoppingCartPage.BonusOptionSelect();
        shoppingCartPage.configSelect();
        shoppingCartPage.bonusSliderGreen();

        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='modal-wrapper md sc-ion-modal-md']//div[@class='cc-bonus-limit-error ng-star-inserted']")).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 
    it('RA-3136 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup();
        productDetails.addProductToCart();
        searchPage.searchWithSkuID("1810C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.productNameMoreOption("1810C");
        shoppingCartPage.BonusOptionSelect();
        shoppingCartPage.configSelect();
        shoppingCartPage.bonusSliderGreen();

        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='modal-wrapper md sc-ion-modal-md']//div[@class='cc-bonus-limit-error ng-star-inserted']")).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3136 - Context Switcher - Cutco US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup();
        productDetails.addProductToCart();
        searchPage.searchWithSkuID("1810C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.productNameMoreOption("1810C");
        shoppingCartPage.BonusOptionSelect();
        shoppingCartPage.configSelect();
        shoppingCartPage.bonusSliderGreen();

        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='modal-wrapper md sc-ion-modal-md']//div[@class='cc-bonus-limit-error ng-star-inserted']")).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    


});