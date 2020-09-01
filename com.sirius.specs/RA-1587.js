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

describe('RA-1587 - Cutco @ Home context’s Order config modal - Upon social location selection; on click of social check in link, a modal to open & on social selection, modal to close & social to populate & also ensure that the text link now changes to “Check out of social”', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1587 - Context Switcher - Cutco Home US', function () {
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
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)

});