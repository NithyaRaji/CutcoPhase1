var launcher = require('../com.sirius.reusables/launcher.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var testInputs = require('../com.sirius.testData/data.json');
var searchPage = require('../com.sirius.reusables/search.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');

//Sprint6
describe('RA-1215 - Within GC Details view, if textbox for GC amt value has a value that is < $50 or when value is > $2000 or when value is not in increments of $25 & Rep clicks on ‘Add to cart’ btn, ensure appropriate error is displayed', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })
    
    it('RA-1215 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectShopFromLeftNavigation();
        browseByCategory.handlePopupCutcoVector();
        searchPage.searchWithGiftCard(testInputs.RA_1215.vectorUS_searchTermGiftCard);
        searchPage.searchResult();
        productDetails.searchResultsNavigation();
        productDetails.giftcardQtyValidations();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)
    
});