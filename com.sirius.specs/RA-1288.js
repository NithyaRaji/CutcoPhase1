
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var searchPage = require('../com.sirius.reusables/search.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage =  require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-1288 - when a SKU which has engraving is edited, ensure that the engraving continues to be applied to the SKU in cart, post edit/update.', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1288 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_1288.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();

        searchPage.searchWithSkuID(testInputs.RA_1283.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        shoppingCartPage.productNameMoreOption(testInputs.RA_1288.cutoHome_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeEngraveBonus();
        shoppingCartPage.verifyEngraveDetailsInCartBonusWithoutPlate();
        shoppingCartPage.productNameMoreOption(testInputs.RA_1288.cutoHome_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();
        shoppingCartPage.verifyEngraveDetailsInCartBonusWithoutPlate();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

   it('RA-1288 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
       searchPage.searchWithSkuID(testInputs.RA_1288.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();

        searchPage.searchWithSkuID(testInputs.RA_1283.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        shoppingCartPage.productNameMoreOption(testInputs.RA_1288.cutoHome_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeEngraveBonus();
        shoppingCartPage.verifyEngraveDetailsInCartBonusWithoutPlate();
        shoppingCartPage.productNameMoreOption(testInputs.RA_1288.cutoHome_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();
        shoppingCartPage.verifyEngraveDetailsInCartBonusWithoutPlate();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

    it('RA-1288 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_1288.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();

        searchPage.searchWithSkuID(testInputs.RA_1283.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        shoppingCartPage.productNameMoreOption(testInputs.RA_1288.cutoHome_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeEngraveBonus();
        shoppingCartPage.verifyEngraveDetailsInCartBonusWithoutPlate();
        shoppingCartPage.productNameMoreOption(testInputs.RA_1288.cutoHome_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();
        shoppingCartPage.verifyEngraveDetailsInCartBonusWithoutPlate();
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut) 

});