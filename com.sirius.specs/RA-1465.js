
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

describe('RA-1465 - Within Login screen, ensure that User ID, Password fields & “Log In” button are present & when Rep provides valid user ID, PW & clicks on the ‘Login’ btn, ensure that Login is successful & Rep is taken to the Dashboard view', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1465 - Common Company', function () {
        loginApp.loginValidations();
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

});