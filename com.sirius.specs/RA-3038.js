var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var paymentobj = require('../com.sirius.pageObjects/paymentPage_po.js');
var promoPage = require('../com.sirius.reusables/promoPage.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');

describe('RA-3038 - Verify whether all the engraving options are displayed for the promotional orders', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3038 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
        
        expect(element(by.id('btn_engrave_location_O_config')).isDisplayed());
        expect(element(by.id('btn_engrave_location_T_config')).isDisplayed());
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-3038 - Context Switcher - Vector CA', function () {

        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
        
        expect(element(by.id('btn_engrave_location_O_config')).isDisplayed());
        expect(element(by.id('btn_engrave_location_Z7_config')).isDisplayed());
        expect(element(by.id('btn_engrave_location_Z8_config')).isDisplayed());
        expect(element(by.id('btn_engrave_location_Z9_config')).isDisplayed());
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-3038 - Context Switcher - Cutco US', function () {

        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
       
        expect(element(by.id('btn_engrave_location_O_config')).isDisplayed());
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    
    

    

});