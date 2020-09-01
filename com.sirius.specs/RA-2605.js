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

describe('RA-2605 -	When the cart has bonused SKUs along with bonused Engraving / bonused GW, on increasing the quantity of bonused product, check whether the Rep is not allowed to bonus beyond the limit while bonus through "From Catalog" and "From Cart" tab', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2605 - Context Switcher - Vector US', function () {
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
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusYes();
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.verifyBonusQuantityLimit("10");
    }, testInputs.scriptTimeOut)

    it('RA-2605 - Context Switcher - Vector CA', function () {
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
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusYes();
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.verifyBonusQuantityLimit("10");
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-2605 - Context Switcher - Cutco US', function () {
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
        shoppingCartPage.giftWrapAllItemsIndividuallyBonusYes();
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.searchProductToBonus("Table Knife")
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.verifyBonusQuantityLimit("10");
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});