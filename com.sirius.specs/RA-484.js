
var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');

describe('RA-484 - When logged in rep clicks on the Notification icon present in the dashboard screen and views the read messages on the modal that opens up and then clicks on the X btn, ensure that the modal is successfully closed.', function () {

    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-484 - Context Switcher - Cutco Home US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToCutcoHomeUS(); 
        homePage.MessageNotification();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

    it('RA-484 - Context Switcher - Vector CA', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorCA();
        homePage.MessageNotification();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

    it('RA-484 - Context Switcher - Vector US', function () {
        loginApp.loginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.MessageNotification();
        reportInfo.log('Script completed'); 
    },testInputs.scriptTimeOut)

});
