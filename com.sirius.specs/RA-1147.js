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

describe('RA-1147 - Within the ‘Bonus Advisor’ modal, in "From Catalog" tab, on clicking ‘Add to Cart’ button for an item, adds to cart with default Configure, remove the item "From Catalog" tab & added item reflects correctly in ‘Items Currently Bonused’ and "From Cart" tab ', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1147 - Context Switcher - Cutco Home US', function () {
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
        bonusAdvisor.searchProductToBonus("cutter");
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='bonusable-items-wrapper']//span[contains(text(),'Cutter')]")));
        bonusAdvisor.addBonusProduct();
        
        expect(element(by.xpath("//div[@class='bonusable-items-wrapper']//span[contains(text(),'Cutter')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//div[@class='bonused-items-wrapper']//p[contains(text(),'Cutter')]")));
        

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1147 - Context Switcher - Vector CA', function () {
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
        bonusAdvisor.searchProductToBonus("cutter");
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='bonusable-items-wrapper']//span[contains(text(),'Cutter')]")));
        bonusAdvisor.addBonusProduct();
         expect(element(by.xpath("//div[@class='bonusable-items-wrapper']//span[contains(text(),'Cutter')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//div[@class='bonused-items-wrapper']//p[contains(text(),'Cutter')]")));
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-1147 - Context Switcher - Vector US', function () {
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
        bonusAdvisor.searchProductToBonus("cutter");
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='bonusable-items-wrapper']//span[contains(text(),'Cutter')]")));
        bonusAdvisor.addBonusProduct();
        expect(element(by.xpath("//div[@class='bonusable-items-wrapper']//span[contains(text(),'Cutter')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//div[@class='bonused-items-wrapper']//p[contains(text(),'Cutter')]")));
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});