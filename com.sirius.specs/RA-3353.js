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
var BonusAdvisorObj = require('../com.sirius.pageObjects/bonusAdvisor_PO.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('RA-3353 - Verify whether the Rep is not able to bonus beyond the configured limit while bonusing the product through bonus advisor modal', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3353 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.addBonusProduct();
        expect(element(by.xpath('//div[contains(text(),"No items")]')).isPresent());
        bonusAdvisor.selectCartTab();
        expect(element(by.xpath('//span[contains(text(),"Bonus Item")]')).isPresent()).toBeFalsy();
    }, testInputs.scriptTimeOut)

    it('RA-3353 - Context Switcher - Vector CA', function () {
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
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.addBonusProduct();
        expect(element(by.xpath('//div[contains(text(),"No items")]')).isPresent());
        bonusAdvisor.selectCartTab();
        expect(element(by.xpath('//span[contains(text(),"Bonus Item")]')).isPresent()).toBeFalsy();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3353 - Context Switcher - Cutco US', function () {
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
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.addBonusProduct();
        expect(element(by.xpath('//div[contains(text(),"No items")]')).isPresent());
        bonusAdvisor.selectCartTab();
        expect(element(by.xpath('//span[contains(text(),"Bonus Item")]')).isPresent()).toBeFalsy();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});