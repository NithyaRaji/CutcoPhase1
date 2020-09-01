var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var paymentobj = require('../com.sirius.pageObjects/paymentPage_po.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var payment = require('../com.sirius.reusables/paymentPage.js');


describe('RA-2915 - Verify whether the shop view is different for Literature order and Regular order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2915 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        utilities.pageWaitSec(5);

        expect(element(by.css(".product-carousel-slide")).isPresent()).toBeFalsy();
        expect(element(by.css(".bonus-advisor>.md.hydrated")).isPresent()).toBeFalsy();
        expect(element(by.css(".icon-green.thumb.md.hydrated")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'Customer Pays')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'CPO')]")).isPresent()).toBeFalsy();

        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2915 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        utilities.pageWaitSec(5);

        expect(element(by.css(".product-carousel-slide")).isPresent()).toBeFalsy();
        expect(element(by.css(".bonus-advisor>.md.hydrated")).isPresent()).toBeFalsy();
        expect(element(by.css(".icon-green.thumb.md.hydrated")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'Customer Pays')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'CPO')]")).isPresent()).toBeFalsy();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2915 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        utilities.pageWaitSec(5);

        expect(element(by.css(".product-carousel-slide")).isPresent()).toBeFalsy();
        expect(element(by.css(".bonus-advisor>.md.hydrated")).isPresent()).toBeFalsy();
        expect(element(by.css(".icon-green.thumb.md.hydrated")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'Customer Pays')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'CPO')]")).isPresent()).toBeFalsy();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
    

});