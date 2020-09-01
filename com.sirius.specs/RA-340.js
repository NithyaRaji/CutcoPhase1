var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var searchPage = require('../com.sirius.reusables/search.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('RA-340 - Verify whether the max scrollable qty for a product within the qty dropdown is 10 and in input text able to enter the max qty in product detail page', function () {
    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-340 - Context Switcher - Cutco Home US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_522.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityValue();
        productDetails.maxQuantityVerificationRegularOrder();
        
        homePage.againSwitchToCutcoHomeUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.RA_340_LIT.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityValue();
        productDetails.maxQuantityVerificationLITorder();

        homePage.againSwitchToCutcoHomeUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.RA_340_Promo.cutoHome_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityValue();
        productDetails.maxQuantityVerificationPromoOrder();

        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

   it('RA-340 - Context Switcher - Vector US', function () {
       loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_522.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityValue();
        productDetails.maxQuantityVerificationRegularOrder();
        
        homePage.againSwitchToVectorUS();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.RA_340_LIT.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityValue();
        productDetails.maxQuantityVerificationLITorder();

        homePage.againSwitchToVectorUS();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.RA_340_Promo.vectorUS_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityValue();
        productDetails.maxQuantityVerificationPromoOrder();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)


    it('RA-340 - Context Switcher - Vector CA', function () {
    loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoHome();
        searchPage.searchWithSkuID(testInputs.RA_522.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityValue();
        productDetails.maxQuantityVerificationRegularOrder();
        
        homePage.againSwitchToVectorCA();
        homePage.selectLITFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.RA_340_LIT.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityValue();
        productDetails.maxQuantityVerificationLITorder();

        homePage.againSwitchToVectorCA();
        homePage.selectPromoFromLeftNavigation();
        searchPage.searchWithSkuID(testInputs.RA_340_Promo.vectorCA_searchTerm);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.quantityValue();
        productDetails.maxQuantityVerificationPromoOrder();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)  

});