var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');


describe('RA-3134 - Verify whether the following sections are available for the Bonus Limit Configuration', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3134 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        shoppingCartPage.configSelect();
    
        expect(element(by.xpath('//ion-range')).isDisplayed());
        expect(element(by.xpath('//div[@class="cc-bonus-value cc-bonus-val-warning"]')).isDisplayed());
        expect(element(by.xpath('//h5[contains(text(),"Bonus Limit")]')).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 
    it('RA-3134 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();

        expect(element(by.xpath('//ion-range')).isDisplayed());
        expect(element(by.xpath('//div[@class="cc-bonus-value cc-bonus-val-warning"]')).isDisplayed());
        expect(element(by.xpath('//h5[contains(text(),"Bonus Limit")]')).isDisplayed());
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3134 - Context Switcher - Cutco US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();

        expect(element(by.xpath('//ion-range')).isDisplayed());
        expect(element(by.xpath('//div[@class="cc-bonus-value cc-bonus-val-warning"]')).isDisplayed());
        expect(element(by.xpath('//h5[contains(text(),"Bonus Limit")]')).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    


});