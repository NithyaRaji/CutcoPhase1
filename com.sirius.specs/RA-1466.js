
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

describe('RA-1466 - Within Login screen, ensure that “Forgot User ID or Password” link is present below Login btn & on click, ensure that the app launches the default web browser for the device and loads the Vector Connect password recovery page', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-1466 - Common Company', function () {
        loginApp.forgotPassword();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

});