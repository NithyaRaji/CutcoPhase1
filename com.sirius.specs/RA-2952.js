var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');

describe('Verify whether on saving a Promotional Order, orders are shown on the dashboard along with the other pending orders and order type should be "Promo"', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2952 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        var homePagePO = new homePageObj();
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//ion-grid//ion-col[contains(text(),'Promo')]")).isDisplayed());        
        utilities.pageWaitSec(5);
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2952 - Context Switcher - Vector CA', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        var homePagePO = new homePageObj();
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//ion-grid//ion-col[contains(text(),'Promo')]")).isDisplayed());        
        utilities.pageWaitSec(5);
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2952 - Context Switcher - Cutco US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.saveOrder();
        var homePagePO = new homePageObj();
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//ion-grid//ion-col[contains(text(),'Promo')]")).isDisplayed());        
        utilities.pageWaitSec(5);
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});