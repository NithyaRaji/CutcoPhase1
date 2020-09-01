
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var browseByCategory = require('../com.sirius.reusables/browseByCategory.js');
var shopCatalog = require('../com.sirius.reusables/shopCatalog.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage =  require('../com.sirius.reusables/shoppingCartPage.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-1467 - Within the Login screen, ensure that a “Forgot Password?” Link is present below the ‘Login’ button & on click, ensure that the Rep is navigated to Reset Password page', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1467 - Common Company', function () {
        loginApp.forgotPasswordVerification();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

}); 