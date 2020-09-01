
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

describe('RA-1281 - When pending order has a SKU with engraving that is not bonused. When the pending order is retrieved, ensure that the engraving along with its charges, correctly display within cart for the SKU', function () {

    beforeEach(function () {
        launcher.launchApplication(); 
    })

    it('RA-1281 - Context Switcher - Cutco Home US', function () {
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
        shoppingCartPage.verifyEngraveDetailsInCart();
        expect(element(by.xpath(".//*[@class='engraving-plate-price-wrapper ng-star-inserted']//*[@class='selling-price']")).isDisplayed());
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

 /*  it('RA-1281 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_522.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.vectorCA_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();
        shoppingCartPage.verifyEngraveDetailsInCart();
        expect(element(by.xpath(".//*[@class='engraving-plate-price-wrapper ng-star-inserted']//*[@class='selling-price']")).isDisplayed());
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut)

    it('RA-1281 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithSkuID(testInputs.RA_522.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.addProduct();
        browseByCategory.handlePopup();
        shoppingCartPage.productNameMoreOption(testInputs.RA_522.vectorUS_searchTerm);
        shoppingCartPage.engraveOptionSelect();
        shoppingCartPage.engraveTypeMonogramSquarePlateNoBonus();
        shoppingCartPage.verifyEngraveDetailsInCart();
        expect(element(by.xpath(".//*[@class='engraving-plate-price-wrapper ng-star-inserted']//*[@class='selling-price']")).isDisplayed());
        reportInfo.log('Script Completed');
    },testInputs.scriptTimeOut) */

});