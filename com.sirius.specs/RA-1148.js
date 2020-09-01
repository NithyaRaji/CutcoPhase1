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

describe('RA-1148 - Bonus Advisor - "From Catalog" tab, ensure that the “Configure” option is present against each of the items & on click ensure handle colors are shown with Classic as default. Verify that Rep is able to select the handle color & add the item to the cart ', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1148 - Context Switcher - Cutco Home US', function () {
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
        bonusAdvisor.searchProductToBonus("Table knife");
        bonusAdvisor.changeColor();
        bonusAdvisor.addBonusProduct();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'Pearl')]")));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1148 - Context Switcher - Vector CA', function () {
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
        bonusAdvisor.searchProductToBonus("Table knife");
        bonusAdvisor.changeColor();
        bonusAdvisor.addBonusProduct();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'Pearl')]")));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1148 - Context Switcher - Vector US', function () {
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
        bonusAdvisor.searchProductToBonus("Table knife");
        bonusAdvisor.changeColor();
        bonusAdvisor.addBonusProduct();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'Pearl')]")));
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});