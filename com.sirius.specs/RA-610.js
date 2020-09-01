var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-610 - When Rep having > 1 contexts has switched to a different context in this session & opens the menu again, ensure that the latest context Rep has switched to, is what is displayed within the menu', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-610 - Common Company', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS();
        browser.sleep(4000);
        homePage.againSwitchToVectorCA();
        reportInfo.log("Script Completed");
    }, testInputs.scriptTimeOut)

});