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

describe('RA-1136 - When cart has bonused SKUs, charged SKUs, Charged or Bonused GW, check that "Bonus Advisor" option is displayed at bottom of the cart, on click ensure "Bonus Advisor" modal shows up with "items currently bonused" along with "Items Eligible for Bonus"', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1136 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.verifyBonusAdvisor();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1136 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.verifyBonusAdvisor();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1136 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        bonusAdvisor.addBonusProduct();
        bonusAdvisor.verifyBonusAdvisor();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});