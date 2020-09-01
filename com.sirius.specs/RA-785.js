var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('RA-785 - Rep with items in cart, has >1 contexts in profile, opts to switch context; within the Confirm Context Switch modal, select Yes for Save Order option, provide a valid comment, click on Switch btn; ensure the cart is saved & the context switches', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-785 - Common Company', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        browseByCategory.selectCategoryFromShopPage();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        browseByCategory.handlePopup(); 
        shoppingCartPage.closeShoppingCartSectionMobile();
        utilities.navigatepageback();
        utilities.navigatepageback();
        homePage.selectHomeFromLeftNavigation();
        homePage.switchToVectorUSAndSaveOrder();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});