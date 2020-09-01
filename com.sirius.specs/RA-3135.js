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


describe('RA-3135 - verify whether the background color should change as the value changes following the same coloring guidelines used for the Order Health component', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3135 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        shoppingCartPage.configSelect();

        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-warning']")).isDisplayed());
        shoppingCartPage.bonusSliderRed();
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-bad']")).isDisplayed());
        shoppingCartPage.bonusSliderGreen();
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-perfect']")).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
 
    it('RA-3135 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
shoppingCartPage.configSelect();
        
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-warning']")).isDisplayed());
        shoppingCartPage.bonusSliderRed();
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-bad']")).isDisplayed());
        shoppingCartPage.bonusSliderGreen();
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-perfect']")).isDisplayed());
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


    it('RA-3135 - Context Switcher - Cutco US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        shoppingCartPage.configSelect();
        
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-warning']")).isDisplayed());
        shoppingCartPage.bonusSliderRed();
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-bad']")).isDisplayed());
        shoppingCartPage.bonusSliderGreen();
        utilities.pageWaitSec(5);
        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-perfect']")).isDisplayed());

        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    


});