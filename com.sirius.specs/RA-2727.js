var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var bonusAdvisor = require('../com.sirius.reusables/bonusAdvisor.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');


describe('RA-2727 - Promo, Reg, LIT Order: Verify whether entered special instructions are retained only while retrieving a pending order', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2727 - Context Switcher - Vector US - REG', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.saveOrder();

        expect(element(by.xpath("//div[@class='comment'][contains(text(),'testing pending order')]")).isPresent());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2727 - Context Switcher - Vector CA - REG', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.saveOrder();

        expect(element(by.xpath("//div[@class='comment'][contains(text(),'testing pending order')]")).isPresent());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2727 - Context Switcher - Cutco US - REG', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.saveOrder();

        expect(element(by.xpath("//div[@class='comment'][contains(text(),'testing pending order')]")).isPresent());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2727 - Context Switcher - Vector US - LIT', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L200");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();

        expect(element(by.xpath("//div[@class='comment'][contains(text(),'testing pending order')]")).isPresent());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2727 - Context Switcher - Vector CA - LIT', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L501C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();

        expect(element(by.xpath("//div[@class='comment'][contains(text(),'testing pending order')]")).isPresent());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2727 - Context Switcher - Cutco US - LIT', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L626");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();

        expect(element(by.xpath("//div[@class='comment'][contains(text(),'testing pending order')]")).isPresent());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2727 - Context Switcher - Vector US - PROMO', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();

        expect(element(by.xpath("//div[@class='comment'][contains(text(),'testing pending order')]")).isPresent());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2727 - Context Switcher - Vector CA - PROMO', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();

        expect(element(by.xpath("//div[@class='comment'][contains(text(),'testing pending order')]")).isPresent());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2727 - Context Switcher - Cutco US - PROMO', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();

        expect(element(by.xpath("//div[@class='comment'][contains(text(),'testing pending order')]")).isPresent());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});