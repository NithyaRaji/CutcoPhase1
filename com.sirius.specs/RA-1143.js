var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var bonusAdvisor = require('../com.sirius.reusables/bonusAdvisor.js');

describe('RA-1143 - Within the ‘Bonus Advisor’ modal, in "From Cart" tab, ensure there is no option to configure the item color', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1143 - Context Switcher - Cutco Home US', function () {
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
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        bonusAdvisor.openBonusAdvisor();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'Configure')]")).isPresent());
        bonusAdvisor.selectCartTab();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'Configure')]")).isPresent()).toBeFalsy();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1143 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID("2018C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        bonusAdvisor.openBonusAdvisor();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'Configure')]")).isPresent());
        bonusAdvisor.selectCartTab();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'Configure')]")).isPresent()).toBeFalsy();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1143 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID("2018C");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        bonusAdvisor.openBonusAdvisor();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'Configure')]")).isPresent());
        bonusAdvisor.selectCartTab();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'Configure')]")).isPresent()).toBeFalsy();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});