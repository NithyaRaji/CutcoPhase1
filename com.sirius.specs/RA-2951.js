var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var menuListObj = require('../com.sirius.pageObjects/menuList_po.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');


describe('Verify whether Promotional orders option is present in menu option, on clicking Promotional Order ensure the Rep is navigated to shop page of Promotional Orders', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2951 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.clickHam1();
        var menuListPO = new menuListObj();
        utilities.waitForElement(menuListPO.promoLink,300000);
        utilities.HighlightElement(menuListPO.promoLink);
        expect(element(by.xpath("//ion-menu//ion-label[contains(text(),'Promotional Order')]")).isDisplayed());
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-2951 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.clickHam1();
        var menuListPO = new menuListObj();
        utilities.waitForElement(menuListPO.promoLink,300000);
        utilities.HighlightElement(menuListPO.promoLink);
        expect(element(by.xpath("//ion-menu//ion-label[contains(text(),'Promotional Order')]")).isDisplayed());
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-2951 - Context Switcher - Cutco at Home US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.clickHam1();
        var menuListPO = new menuListObj();
        utilities.waitForElement(menuListPO.promoLink,300000);
        utilities.HighlightElement(menuListPO.promoLink);
        expect(element(by.xpath("//ion-menu//ion-label[contains(text(),'Promotional Order')]")).isDisplayed());
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    

    

});