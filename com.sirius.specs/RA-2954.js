var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var promoPage = require('../com.sirius.reusables/promoPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('Verify whether the Rep is able to experience the existing Regular order function like Search, Catalog Browse, Set Carousel for Promotional orders', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2954 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        expect(element(by.css('.searchbar-input.sc-ion-searchbar-ios')));
        expect(element(by.xpath("//h4[contains(text(),'Browse by Category')]")));
        expect(element(by.css('.product-carousel-slide-container')));

        

        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-2954 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        expect(element(by.css('.searchbar-input.sc-ion-searchbar-ios')));
        expect(element(by.xpath("//h4[contains(text(),'Browse by Category')]")));
        expect(element(by.css('.product-carousel-slide-container')));


        

        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-2954 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        expect(element(by.css('.searchbar-input.sc-ion-searchbar-ios')));
        expect(element(by.xpath("//h4[contains(text(),'Browse by Category')]")));

        /* 
         * Set not available in Cutco @ Home
         */
       // expect(element(by.css('.product-carousel-slide-container')));


        

        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    


});

