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


describe('RA-3138 - Verify whether The Bonus Limit, when changed, is only applied when the “Save Configuration” button is used in the Bonus Limit Configuration section the', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3138 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        shoppingCartPage.configSelect();
        shoppingCartPage.bonusSliderGreen();
        shoppingCartPage.configCancel();
        shoppingCartPage.configSelect();
        
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-perfect']")).isPresent()).toBeFalsy();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 
    it('RA-3138 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        shoppingCartPage.configSelect();
        shoppingCartPage.bonusSliderGreen();
        shoppingCartPage.configCancel();
        shoppingCartPage.configSelect();
        
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-perfect']")).isPresent()).toBeFalsy();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3138 - Context Switcher - Cutco US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        shoppingCartPage.configSelect();
        shoppingCartPage.bonusSliderGreen();
        shoppingCartPage.configCancel();
        shoppingCartPage.configSelect();
        
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-perfect']")).isPresent()).toBeFalsy();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    


});