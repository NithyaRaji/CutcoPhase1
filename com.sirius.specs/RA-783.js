var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-783 - When Rep who has only 1 context mapped to profile, clicks on header menu, verify that an overlay with following information is displayed: Rep name against user icon, Rep number, current context name. Also, ensure Context Switch link is not displayed.', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-783 - Common Company', function () {
        loginApp.loginAccountSetup();
        homePage.inactiveProfileValidations();
        homePage.verfiyReturnHomePage();
        reportInfo.log('Script Completed');
    }, testInputs.scriptTimeOut)

});