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

describe('RA-1139 -	In the ‘Bonus Advisor’ overlay on removing all product from "items currently bonused" section, ensure the same items are removed "From cart" tab and check whether the suggestions are getting reset in "From catalog" tab', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1139 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();

        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.searchProductToBonus("Vegetable Knife");
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.deleteBonusProduct();

        expect(element(by.xpath('//div[@class="bonusable-items-wrapper"]//span[contains(text(),"Vegetable Knife")]')));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-1139 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.searchProductToBonus("Vegetable Knife");
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.deleteBonusProduct();

        expect(element(by.xpath('//div[@class="bonusable-items-wrapper"]//span[contains(text(),"Vegetable Knife")]')));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1139 - Context Switcher - Cutco US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID("2018");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.searchProductToBonus("Vegetable Knife");
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.deleteBonusProduct();

        expect(element(by.xpath('//div[@class="bonusable-items-wrapper"]//span[contains(text(),"Vegetable Knife")]')));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});