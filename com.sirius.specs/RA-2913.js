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
var utilities = require('../com.sirius.reusables/utilities.js');


describe('RA-2913 - Verify whether Literatur orders option is present in menu option, on clicking Literature Order uses sees the same category layout as the existing shop, but will have different categories', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2913 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.selectLITFromLeftNavigation();
        utilities.pageWaitSec(5);

        expect(element(by.xpath("//h4[contains(text(),'Browse by Category')]")).isPresent());
        expect(element(by.xpath("//cc-category-item//div[contains(text(),'Cookware')]")).isPresent())

        homePage.verifyLIT();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2913 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.selectLITFromLeftNavigation();
        utilities.pageWaitSec(5);

        expect(element(by.xpath("//h4[contains(text(),'Browse by Category')]")).isPresent());
        expect(element(by.xpath("//cc-category-item//div[contains(text(),'Office Literature')]")).isPresent())
        expect(element(by.xpath("//cc-category-item//div[contains(text(),'On-Campus Literature')]")).isPresent());

        homePage.verifyLIT();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2913 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.selectLITFromLeftNavigation();
        utilities.pageWaitSec(5);

        expect(element(by.xpath("//h4[contains(text(),'Browse by Category')]")).isPresent());
        expect(element(by.xpath("//cc-category-item//div[contains(text(),'Business Supplies')]")).isPresent())
        
        homePage.verifyLIT();

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

});