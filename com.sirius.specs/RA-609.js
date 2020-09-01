var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');

describe('RA-609 - When Rep has not completed his account setup, a modal showing appropriate msg, with app disabled text; Complete Setup btn & Logout btn is displayed, also ensure that on clicking Complete Setup btn, Rep is taken to Vector login', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-609 - Common Company', function () {
        loginApp.loginAccountSetup();
        homePage.logout();
        reportInfo.log("Script Completed");
    }, testInputs.scriptTimeOut)




});