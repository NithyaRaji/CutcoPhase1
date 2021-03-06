
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var searchPage = require('../com.sirius.reusables/search.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
const { expect } = require('chai');

describe('RA-1282 - When engraving has been applied on a SKU & the engraving is bonused; ensure that within cart, an engraving indication with engraving price as $0 correctly displays below the SKU', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1282 - Context Switcher - Cutco Home US', function () {
        var shoppingCartPO = new shoppingCartObj();
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_522.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.cutoHome_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();

        searchPage.searchWithSkuID(testInputs.RA_1283.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        searchPage.searchWithSkuID(testInputs.RA_1283.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        shoppingCartPage.productNameMoreOption(testInputs.RA_522.cutoHome_searchTerm);
        shoppingCartPage.BonusOptionSelect();
        shoppingCartPage.verifyEngraveDetailsInCart();
        expect(element(by.xpath(".//*[@class='engraving-plate-price-wrapper ng-star-inserted']//*[@class='selling-price ng-star-inserted']")).isDisplayed());
        reportInfo.log('Script Completed');

    }, testInputs.scriptTimeOut)

  /*  it('RA-1282 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_522.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.cutoHome_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();

        searchPage.searchWithSkuID(testInputs.RA_1283.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        searchPage.searchWithSkuID(testInputs.RA_1283.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        shoppingCartPage.productNameMoreOption(testInputs.RA_522.cutoHome_searchTerm);
        shoppingCartPage.BonusOptionSelect();
        shoppingCartPage.verifyEngraveDetailsInCart();
        expect(element(by.xpath(".//*[@class='engraving-plate-price-wrapper ng-star-inserted']//*[@class='selling-price ng-star-inserted']")).isDisplayed());
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

    it('RA-1282 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_522.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.cutoHome_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();

        searchPage.searchWithSkuID(testInputs.RA_1283.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        searchPage.searchWithSkuID(testInputs.RA_1283.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();

        shoppingCartPage.productNameMoreOption(testInputs.RA_522.cutoHome_searchTerm);
        shoppingCartPage.BonusOptionSelect();
        shoppingCartPage.verifyEngraveDetailsInCart();
        expect(element(by.xpath(".//*[@class='engraving-plate-price-wrapper ng-star-inserted']//*[@class='selling-price ng-star-inserted']")).isDisplayed());
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut) */

}); 