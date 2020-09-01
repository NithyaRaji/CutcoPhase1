
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-508 - Category landing page - When user clicks on the product set images displayed within the carousel, ensure that the corresponding products PDP screen is displayed', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-508 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS(); 
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.oneAvailableAttributePage();
        browseByCategory.categoryCarouselImageAddProduct();
        reportInfo.log('Script completed'); 
    }, testInputs.scriptTimeOut)

     it('RA-508 - Context Switcher - Vector CA', function () {
         loginApp.loginAppDefault();
         homePage.verfiyHomePage();
         homePage.switchToVectorCA();
         homePage.selectShopFromLeftNavigation();
         browseByCategory.handlePopupCutcoVector();
         browseByCategory.oneAvailableAttributePage();
         browseByCategory.categoryCarouselImageAddProduct();
         reportInfo.log('Script completed'); 
     }, testInputs.scriptTimeOut)

     it('RA-508 - Context Switcher - Vector US', function () {
         loginApp.loginAppDefault();
         homePage.verfiyHomePage();
         homePage.switchToVectorUS();
         homePage.selectShopFromLeftNavigation();
         browseByCategory.handlePopupCutcoVector();
         browseByCategory.oneAvailableAttributePage();
         browseByCategory.categoryCarouselImageAddProduct();
         reportInfo.log('Script completed'); 
     }, testInputs.scriptTimeOut)

});