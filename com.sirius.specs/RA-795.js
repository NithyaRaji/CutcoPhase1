var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-795 - When Rep with >1 contexts, opts to switch context, ensure all available contexts are displayed to Rep within Change Context overlay. When Rep touches the back arrow present in the overlay, ensure Rep is returned to the standard menu view', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-795 - Common Company', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.checkContextSwitcherNames();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});