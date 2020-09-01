var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var searchPage = require('../com.sirius.reusables/search.js');
var testInputs = require('../com.sirius.testData/data.json');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');

describe('RA-2430  E2E:14-Cutco@Home US-1:1 STD-Add 1qty|knife(blade)|Search,2qty|Set(Mono)|PDP,1qty|Cutlery(Bonus)|PLP,GC-Upgd:Set(Mono)-GW:All indvdually-DEL:GW-GW:Custom-ChgAttr:knife,+1qty-Config:V.Demo Cat-Charge Ship-ACH-Tax-Payment>1-Adjust total-1$-Place Order', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })


    it('RA-2430  E2E 14 - Context Switcher - Cutco at Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome(); 

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm1);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup(); 
        searchPage.searchClearEnter();
        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm1);
        shoppingCartPage.engraveTypeEngrave();

        utilities.navigatepageback();
        shoppingCartPage.closeShoppingCart();
        browseByCategory.selectCategoryFromShopPage();
        shopCatalog.AddToCartButtonPLP();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductWithoutCartOpen();
        utilities.navigatepageback();
        browseByCategory.selectCategoryFromSetPage();
        productDetails.addProductToCart();
        shoppingCartPage.closeShoppingCart();

        searchPage.searchWithSkuID(testInputs.e2e_checkout.searchTerm2);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        searchPage.searchClearEnter();


        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm12);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm12);
        shoppingCartPage.engraveTypeMonogramDiamondPlateNoBonus();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm12);
        shoppingCartPage.BonusOptionSelectCheckout(testInputs.e2e_checkout.searchTerm12);

        // shoppingCartPage.openShoppingCart();
        // browser.sleep(8000);
        shoppingCartPage.UpgradeOptionSelectAndUpgradeSet();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.searchTerm12);
        shoppingCartPage.engraveOptionSelectCheckout(testInputs.e2e_checkout.searchTerm12);
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();

        shoppingCartPage.giftWrapAllItemsIndividuallyBonusNo();

        shoppingCartPage.productNameMoreOption(testInputs.e2e_checkout.productWrap);
        shoppingCartPage.deleteOptionSelect();

        shoppingCartPage.configSelect();
        shoppingCartPage.ConfigSocialSelect();
        shoppingCartPage.configUpdate();
        shoppingCartPage.cartTotalValidation();
        shoppingCartPage.ShoppingCartCheckout();

        addressPage.billingAddressUS();
        addressPage.billingAddressNotSameAsShipping(testInputs.RA_001AddressShipping);

        addressPage.nextButtonCheckout();
        addressPage.standardizationAddressSelectCheckout();
        addressPage.standardizationAddressStandardizationCheckout();

        paymentpage.selectNextDayShipping();
        paymentpage.selectACH();

        paymentpage.clickNextButton();
        paymentpage.achCardDetails();
        paymentpage.PlaceOrderButtonEventHandleThis();
        paymentpage.imdoneButtonClick();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


});