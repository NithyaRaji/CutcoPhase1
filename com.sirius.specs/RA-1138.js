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

describe('RA-1138 - In "Bonus Advisor" overlay on clicking 3 dots near the line item, Check the Rep is able to delete or unbonus the item, after deleting or unbonus all the item ensure "No bonused items in cart” message is displayed under "items currently bonused" section', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1138 - Context Switcher - Cutco Home US', function () {
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
        bonusAdvisor.deleteBonusProduct();
        bonusAdvisor.unBonusProduct();
        expect(element(by.xpath('//div[contains(text(),"No bonused items in cart")]')));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1138 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
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
        bonusAdvisor.deleteBonusProduct();
        bonusAdvisor.unBonusProduct();
        expect(element(by.xpath('//div[contains(text(),"No bonused items in cart")]')));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1138 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
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
        bonusAdvisor.deleteBonusProduct();
        bonusAdvisor.unBonusProduct();
        expect(element(by.xpath('//div[contains(text(),"No bonused items in cart")]')));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});