var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var addressValidation = require('../com.sirius.reusables/addressValidation.js')
var searchPage = require('../com.sirius.reusables/search.js');
var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('Verify whether the rep is able to change the available configuration options and navigate the customer info page ', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3039 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        
        shoppingCartPage.configSelect();
        var shopPO = new shoppingCartObj();
        shopPO.brandingTools.click();
        shoppingCartPage.configUpdate();

        utilities.pageWaitSec(5);
        
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();

        browser.sleep(5000);

        shoppingCartPage.ShoppingCartCheckout();

        expect(element(by.id('form_customerInfoForm')));
        

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-3039 - Context Switcher - Vector CA', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
        var shopPO = new shoppingCartObj();
        shopPO.regimbalAward.click();
        shoppingCartPage.configUpdate();

        utilities.pageWaitSec(5);
        
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();

        browser.sleep(5000);

        shoppingCartPage.ShoppingCartCheckout();

        expect(element(by.id('form_customerInfoForm')));
        

        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)



    

    

});