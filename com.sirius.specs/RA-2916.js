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


describe('RA-2916 - Verify whether on saving a Literature Order, in dashboard pending orders list the order type should be "Lit"', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2916 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L20");
        utilities.pageWaitSec(5);

        expect(element(by.css(".cc-list-col .product-image-container")).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2916 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L15");
        utilities.pageWaitSec(5);

        expect(element(by.css(".cc-list-col .product-image-container")).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

    it('RA-2916 - Context Switcher - Cutco US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID("L62");
        utilities.pageWaitSec(5);

        expect(element(by.css(".cc-list-col .product-image-container")).isDisplayed());

        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

   

});