var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-1592 - Rep is checked in to a social & is on checkout screen1 for social location order, ensure Social field is non-editable & is prepopulated with the details of the currently checked in social & also ensure that an appropriate msg is displayed below it', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1592 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductWithoutCartOpen();
        browseByCategory.handlePopup(); 
        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigSocialSelect();
        shoppingCartPage.configUpdate();
        shoppingCartPage.ShoppingCartCheckout();
        addressPage.socialNameCheck();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});