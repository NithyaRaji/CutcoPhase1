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
var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var payment = require('../com.sirius.reusables/paymentPage.js');


describe('Verify whether "Engraving" and "Gift wrapping" is not applicable for Vector US & Vector CA: Branding Tool order config Promotional Orders', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-3030 - Context Switcher - Vector US', function () {
       
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
        var shopPO = new shoppingCartObj();
        shopPO.brandingTools.click();
        shoppingCartPage.configUpdate();
        searchPage.searchWithSkuID("1501");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();    
        shoppingCartPage.productNameMoreOption("1501");
        shoppingCartPage.engraveOptionSelectCheckout("1501");
        shoppingCartPage.engraveTypeEngrave1();
        shoppingCartPage.giftWrapAllItemsTogetherBonusNo();
        shoppingCartPage.ShoppingCartCheckout();

        expect(element(by.xpath('//*[@id="toast-container"]/cc-toast[1]/div/div')).isDisplayed());
       
        
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-3030 - Context Switcher - Vector CA', function () {

        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        shoppingCartPage.configSelect();
        var shopPO = new shoppingCartObj();
        shopPO.regimbalAward.click();
        shoppingCartPage.configUpdate();
        searchPage.searchWithSkuID("1762c");
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProductToCart();
        shoppingCartPage.productNameMoreOption("1762C");
        shoppingCartPage.engraveOptionSelectCheckout("1762C");
        shoppingCartPage.engraveTypeEngrave1();
        shoppingCartPage.giftWrapAllItemsTogetherBonusNo();
        shoppingCartPage.ShoppingCartCheckout();

        expect(element(by.xpath('//*[@id="toast-container"]/cc-toast[2]/div/div')).isDisplayed());
        
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


   

    
    

    

});