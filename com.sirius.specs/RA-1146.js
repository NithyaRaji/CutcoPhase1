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

describe('RA-1146 -  Within the ‘Bonus Advisor’ modal, in the bonus recommendation section, ensure Rep is able to search products by name only through "From Catalog" tab for recommended items', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1146 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID("2018C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.searchProductToBonus("box");
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.selectCartTab();
        // var BonusPO = new BonusAdvisorObj();
        // expect(BonusPO.searchbar.isDisplayed()).toBeFalsy();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1146 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID("2018C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.searchProductToBonus("box");
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.selectCartTab();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1146 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID("2018C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.searchProductToBonus("box");
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.selectCartTab();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});