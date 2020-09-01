var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');
const browserDetails = require('../com.sirius.reusables/browserDetails.js');



describe('RA-2932 - On refreshing the Page in LIT Orders, Verify the Rep is not landed in Regular order', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2932 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        browser.refresh();
        expect(element(by.css('.product-carousel-slide')).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'CPO')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath('//ion-icon[@name="help-circle"]')).isPresent()).toBeFalsy();
        
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2932 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        browser.refresh();
        expect(element(by.css('.product-carousel-slide')).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'CPO')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath('//ion-icon[@name="help-circle"]')).isPresent()).toBeFalsy();
        
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2932 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        browser.refresh();
        expect(element(by.css('.product-carousel-slide')).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'CPO')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath('//ion-icon[@name="help-circle"]')).isPresent()).toBeFalsy();
        
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
   

});