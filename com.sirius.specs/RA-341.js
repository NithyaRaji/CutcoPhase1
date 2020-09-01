
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage =  require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-341 - Verify whether the Rep can add a maximum of 99 qty of a product SKU to bag; also check that qty dropdown on PDP has max selectable value as 99', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-341 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.quantityMaximumValidation();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

   it('RA-341 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.quantityMaximumValidation();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

    it('RA-341 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.selectCategoryFromSetPage();
        productDetails.quantityMaximumValue();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        shoppingCartPage.quantityMaximumValidation();
        reportInfo.log('Script completed');
    },testInputs.scriptTimeOut)

});