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

describe('RA-3173 - Bonus Advisor - "From Cart", ensure there is no option to bonus "Gift card"', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3173 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID("Giftcard");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        searchPage.searchWithSkuID("2018C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.verfiyProductLineItem();
        bonusAdvisor.openBonusAdvisor();
        shoppingCartPage.bonusAdvisorGiftCardNoItemError();
        bonusAdvisor.selectCartTab();
        shoppingCartPage.bonusAdvisorGiftCardNoItemError();
        expect(element(by.xpath("//div[@class='bonusable-items-wrapper']//span[contains(text(),'GIFTCARD')]")).isPresent()).toBeFalsy();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});