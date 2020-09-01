var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var searchPage = require('../com.sirius.reusables/search.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-611 - When Rep has not completed account setup, account disabled msg is displayed in a modal. Within menu icon, ensure Rep profile info along with Logout link is displayed; also ensure, Rep is able to switch to a different company using the context switcher', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-611 - Commom Company', function () {
        loginApp.loginAccountSetup();
        homePage.verfiyReturnHomePage();
        homePage.logout();
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)


});