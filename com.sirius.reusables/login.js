var browserDetails = require('./browserDetails.js');
var utilities = require('./utilities.js');
var loginPOj = require('../com.sirius.pageObjects/login_po.js');
var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
//var dotenv = require("dotenv").config();

// const {
//     expect
// } = require("chai");
var waitTime = 300000;


let loginApp = function () {

    this.LoginErrorCheck = function () {
        var loginPO = new loginPOj();
        utilities.waitForElement(loginPO.usernameText, waitTime);
        loginPO.loginButton.click();
        utilities.waitUtilElementPresent(loginPO.loginErrorMsg, waitTime);

        loginPO.loginErrorMsg.getText().then(function (text) {
            var loginErrorstore = text;
            utilities.log('****** loginErrorstore******', text);
            // assert.equal(loginErrorstore, 'Username and password are required.');
            reportInfo.log('Username and password are required.- Error Message Verified');
        });
        utilities.pageWait();
        utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
        loginPO.usernameText.sendKeys("test");
        loginPO.passwordText.sendKeys("test");
        loginPO.loginButton.click();
        utilities.waitUtilElementPresent(loginPO.loginErrorMsg, waitTime);
        utilities.pageWait();
        loginPO.loginErrorMsg.getText().then(function (text) {
            var loginErrorstore = text;
            utilities.log('****** loginErrorstore******', text);
            // assert.equal(loginErrorstore, 'User does not exist.');
            reportInfo.log('User does not exist.- Error Message Verified');
        });
        utilities.pageWait();
        loginPO.usernameText.sendKeys("sr1");
        loginPO.passwordText.sendKeys("test");
        loginPO.loginButton.click();
        utilities.waitUtilElementPresent(loginPO.loginErrorMsg, waitTime);
        // assert(loginPO.loginErrorMsg.isDisplayed());
        reportInfo.log('Invalid Login page is verified');
    }

    this.loginValidations = function () {
        var loginPO = new loginPOj();
        utilities.waitForElement(loginPO.usernameText, waitTime);
        utilities.HighlightElement(loginPO.usernameText); 
        utilities.HighlightElement(loginPO.passwordText);
        utilities.HighlightElement(loginPO.loginButton);
        utilities.HighlightElement(loginPO.needHelpLink);
        utilities.HighlightElement(loginPO.forgotPasswordLink);

    }

    this.forgotPassword = function () {
        var loginPO = new loginPOj();
        utilities.waitForElement(loginPO.usernameText, waitTime);
        utilities.HighlightElement(loginPO.forgotPasswordLink);
        loginPO.forgotPasswordLink.click();
        utilities.pageWait();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') { }
        else {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[1]);
                utilities.pageWait();
                utilities.waitForElement(loginPO.forgotPage);
                utilities.HighlightElement(loginPO.forgotPage);
            })
        }
    }


    this.forgotPasswordVerification = function () {
        var loginPO = new loginPOj();
        utilities.waitForElement(loginPO.forgotPasswordLinkLoginPage, waitTime);
        utilities.HighlightElement(loginPO.forgotPasswordLinkLoginPage);
        loginPO.forgotPasswordLinkLoginPage.click();
        utilities.waitForElement(loginPO.resetPasswordPage, waitTime);
        utilities.HighlightElement(loginPO.resetPasswordPage);
        utilities.waitForElement(loginPO.resetPasswordTitle, waitTime);
        utilities.HighlightElement(loginPO.resetPasswordTitle);
        utilities.attachScreenshot();
    }

    this.needHelpVerification = function () {
        var loginPO = new loginPOj();
        utilities.waitForElement(loginPO.forgotPasswordLinkLoginPage, waitTime);
        utilities.HighlightElement(loginPO.forgotPasswordLinkLoginPage);
        loginPO.forgotPasswordLinkLoginPage.click();
        utilities.waitForElement(loginPO.resetPasswordPage, waitTime);
        utilities.HighlightElement(loginPO.resetPasswordPage);
        utilities.waitForElement(loginPO.resetPasswordTitle, waitTime);
        utilities.HighlightElement(loginPO.resetPasswordTitle);
        utilities.attachScreenshot();
    }  

    this.forgotUserIdVerification = function () {
        var loginPO = new loginPOj();
        utilities.waitForElement(loginPO.forgotPasswordLinkLoginPage, waitTime);
        utilities.HighlightElement(loginPO.forgotPasswordLinkLoginPage);
        loginPO.forgotPasswordLinkLoginPage.click();
        utilities.waitForElement(loginPO.resetPasswordPage, waitTime);
        utilities.HighlightElement(loginPO.resetPasswordPage);
        utilities.waitForElement(loginPO.resetPasswordTitle, waitTime);
        utilities.HighlightElement(loginPO.resetPasswordTitle);
        utilities.attachScreenshot();
    }

    this.loginAccountSetup = function () {
        var loginPO = new loginPOj();
        utilities.waitForElement(loginPO.usernameText, waitTime);
        utilities.waitForElement(loginPO.passwordText, waitTime);
        // loginPO.usernameText.sendKeys(process.env.disabledUserAccount);
        // loginPO.passwordText.sendKeys(process.env.password);
        loginPO.usernameText.sendKeys("inactive");
        loginPO.passwordText.sendKeys("Cutco@123");
        reportInfo.log('Username and password are entered - Inactive User Account Login');
        loginPO.loginButton.click();
    }


    this.loginAccountCheckout = function (username, password) {
        var loginPO = new loginPOj();
        utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
        browser.sleep(2000);
        utilities.waitForElement(loginPO.passwordText, waitTime);
        loginPO.usernameText.sendKeys(username);
        loginPO.passwordText.sendKeys(password);
        reportInfo.log('Username and password are entered');
        loginPO.loginButton.click();
    }


    this.loginAppDefault = function () {
        var loginPO = new loginPOj();
        var homePagePO = new homePageObj();
        let browserName = browserDetails.browserName;
        let deviceName = browserDetails.executionName;

        switch (browserName) {
            case 'chrome':
                reportInfo.log('Chrome Browser is invoked');
                utilities.attachScreenshot();
                utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                console.log("Logggggg username::" + process.env.chrome);
                console.log("Logggggg username::" + process.env.password);
                loginPO.usernameText.sendKeys("sr1");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                loginPO.loginButton.click();
                reportInfo.log('Login button is clicked');
                break;

            case 'firefox':
                reportInfo.log('Firefox Browser is invoked'); 
                utilities.attachScreenshot();
                utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                console.log("Logggggg username::" + process.env.firefox);
                console.log("Logggggg username::" + process.env.password);
                // loginPO.usernameText.sendKeys(process.env.firefox);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys("sr2");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                loginPO.loginButton.click();
                reportInfo.log('Login button is clicked');
                break;

            case 'edge':
                reportInfo.log('Edge Browser is invoked');
                utilities.attachScreenshot();
                utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                // loginPO.usernameText.sendKeys(process.env.edge);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys("sr3");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                loginPO.loginButton.click();
                reportInfo.log('Login button is clicked');
                break;

            case 'Safari':
                reportInfo.log('Safari Browser is invoked');
                utilities.waitForElement(loginPO.usernameText, waitTime);
                utilities.waitForElement(loginPO.passwordText, waitTime);
                console.log("Logggggg username::" + process.env.safari);
                console.log("Logggggg username::" + process.env.password);
                // loginPO.usernameText.sendKeys(process.env.safari);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys("sr3");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                utilities.attachScreenshot();
                loginPO.loginButton.click();
                reportInfo.log('Login button is clicked');
                break;

            case '':
                if (deviceName === 'iphone') {
                    reportInfo.log('iphone app is invoked');
                    utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                    utilities.waitForElement(loginPO.passwordText, waitTime);
                    console.log(process.env);
                    // loginPO.usernameText.sendKeys(process.env.iPhone);
                    // loginPO.passwordText.sendKeys(process.env.password);
                    loginPO.usernameText.sendKeys("sr4");
                    loginPO.passwordText.sendKeys("Cutco@123");
                    reportInfo.log('Username and password are entered');
                    utilities.attachScreenshot();
                    loginPO.loginButton.click();

                } else if (deviceName === 'ipad1') {
                    reportInfo.log('ipad app is invoked');

                    utilities.HighlightElement(loginPO.usernameText);
                    utilities.HighlightElement(loginPO.passwordText);
                    utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                    utilities.waitForElement(loginPO.passwordText, waitTime);
                    // loginPO.usernameText.sendKeys(process.env.iPad);
                    // loginPO.passwordText.sendKeys(process.env.password);
                    loginPO.usernameText.sendKeys("sr5");
                    loginPO.passwordText.sendKeys("Cutco@123");
                    reportInfo.log('Username and password are entered');
                    utilities.attachScreenshot();
                    loginPO.loginButton.click().then(function () {
                        reportInfo.log('Login button is clicked');
                    })
                }
                break;

            case 'android':
                reportInfo.log('Android app invoked');
                utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                utilities.waitUtilElementPresent(loginPO.passwordText, waitTime);
                // loginPO.usernameText.sendKeys(process.env.android);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys("sr6");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password entered');
                utilities.attachScreenshot();
                utilities.click(loginPO.loginButton);
                // loginPO.loginButton.click().then(function () {
                //     reportInfo.log('Login button is clicked');
                //     browser.wait(ExpectedConditions.visibilityOf(loginPO.alertNoButton), waitTime).then(function (flag) {
                //         if (flag) {
                //             loginPO.alertNoButton.click();
                //             reportInfo.log('Finger Print Alert by passing');
                //         }
                //     });
                // })
                break;
        }

    }

     this.LoginAppAccType = function (usrType) {
        var loginPO = new loginPOj();
        var homePagePO = new homePageObj();
        let browserName = browserDetails.browserName;
        let deviceName = browserDetails.executionName;

        switch (browserName) {
            case 'chrome':
                reportInfo.log('Chrome Browser is invoked');
                utilities.attachScreenshot();
                utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                console.log("Logggggg username::" + process.env.chrome);
                console.log("Logggggg username::" + process.env.password);
                loginPO.usernameText.sendKeys(usrType+"1");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                loginPO.loginButton.click();
                reportInfo.log('Login button is clicked');
                break;

            case 'firefox':
                reportInfo.log('Firefox Browser is invoked');
                utilities.attachScreenshot();
                utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                console.log("Logggggg username::" + process.env.firefox);
                console.log("Logggggg username::" + process.env.password);
                // loginPO.usernameText.sendKeys(process.env.firefox);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys(usrType+"2");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                loginPO.loginButton.click();
                reportInfo.log('Login button is clicked');
                break;

            case 'edge':
                reportInfo.log('Edge Browser is invoked');
                utilities.attachScreenshot();
                utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                // loginPO.usernameText.sendKeys(process.env.edge);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys(usrType+"3");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                loginPO.loginButton.click();
                reportInfo.log('Login button is clicked');
                break;

            case 'Safari':
                reportInfo.log('Safari Browser is invoked');
                utilities.waitForElement(loginPO.usernameText, waitTime);
                utilities.waitForElement(loginPO.passwordText, waitTime);
                console.log("Logggggg username::" + process.env.safari);
                console.log("Logggggg username::" + process.env.password);
                // loginPO.usernameText.sendKeys(process.env.safari);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys(usrType+"4");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                utilities.attachScreenshot();
                loginPO.loginButton.click();
                reportInfo.log('Login button is clicked');
                break;

            case '':
                if (deviceName === 'iphone') {
                    reportInfo.log('iphone app is invoked');
                    utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                    utilities.waitForElement(loginPO.passwordText, waitTime);
                    console.log(process.env);
                    // loginPO.usernameText.sendKeys(process.env.iPhone);
                    // loginPO.passwordText.sendKeys(process.env.password);
                    loginPO.usernameText.sendKeys(usrType+"5");
                    loginPO.passwordText.sendKeys("Cutco@123");
                    reportInfo.log('Username and password are entered');
                    utilities.attachScreenshot();
                    loginPO.loginButton.click();

                } else if (deviceName === 'ipad1') {
                    reportInfo.log('ipad app is invoked');

                    utilities.HighlightElement(loginPO.usernameText);
                    utilities.HighlightElement(loginPO.passwordText);
                    utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                    utilities.waitForElement(loginPO.passwordText, waitTime);
                    // loginPO.usernameText.sendKeys(process.env.iPad);
                    // loginPO.passwordText.sendKeys(process.env.password);
                    loginPO.usernameText.sendKeys(usrType+"6");
                    loginPO.passwordText.sendKeys("Cutco@123");
                    reportInfo.log('Username and password are entered');
                    utilities.attachScreenshot();
                    loginPO.loginButton.click().then(function () {
                        reportInfo.log('Login button is clicked');
                    })
                }
                break;

            case 'android':
                reportInfo.log('Android app invoked');
                utilities.waitUtilElementPresent(loginPO.usernameText, waitTime);
                utilities.waitUtilElementPresent(loginPO.passwordText, waitTime);
                // loginPO.usernameText.sendKeys(process.env.android);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys(usrType+"1");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password entered');
                utilities.attachScreenshot();
                utilities.click(loginPO.loginButton);
                // loginPO.loginButton.click().then(function () {
                //     reportInfo.log('Login button is clicked');
                //     browser.wait(ExpectedConditions.visibilityOf(loginPO.alertNoButton), waitTime).then(function (flag) {
                //         if (flag) {
                //             loginPO.alertNoButton.click();
                //             reportInfo.log('Finger Print Alert by passing');
                //         }
                //     });
                // })
                break;
        }

    }

    this.AdminloginAppDefault = function () {
        var loginPO = new loginPOj();
        var homePagePO = new homePageObj();
        let browserName = browserDetails.browserName;
        let deviceName = browserDetails.executionName;

        switch (browserName) {
            case 'chrome':
                reportInfo.log('Chrome Browser is invoked');
                utilities.attachScreenshot();
                utilities.waitForElement(loginPO.usernameText, waitTime);
                // loginPO.usernameText.sendKeys(process.env.admin);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys("admin1");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                loginPO.loginButton.click().then(function () {
                    reportInfo.log('Login button is clicked');
                })
                break;

            case 'Safari':
                reportInfo.log('Safari Browser is invoked');
                utilities.waitForElement(loginPO.usernameText, waitTime);
                utilities.waitForElement(loginPO.passwordText, waitTime);
                // loginPO.usernameText.sendKeys(process.env.admin);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys("admin2");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                utilities.attachScreenshot();
                loginPO.loginButton.click();
                reportInfo.log('Login button is clicked');
                break;

            case 'firefox':
                reportInfo.log('Firefox Browser is invoked');
                utilities.attachScreenshot();
                utilities.waitForElement(loginPO.usernameText, waitTime);
                // loginPO.usernameText.sendKeys(process.env.admin);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys("admin3");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                loginPO.loginButton.click().then(function () {
                    reportInfo.log('Login button is clicked');
                })
                break;

            case 'edge':
                reportInfo.log('Edge Browser is invoked');
                utilities.waitForElement(loginPO.usernameText, waitTime);
                utilities.waitForElement(loginPO.passwordText, waitTime);
                // loginPO.usernameText.sendKeys(process.env.admin);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys("admin4");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password are entered');
                utilities.attachScreenshot();
                loginPO.loginButton.click();
                reportInfo.log('Login button is clicked');
                break;

            case '':
                if (deviceName === 'iphone') {
                    reportInfo.log('iphone app is invoked');
                    utilities.waitForElement(loginPO.usernameText, waitTime);
                    utilities.waitForElement(loginPO.passwordText, waitTime);
                    // loginPO.usernameText.sendKeys(process.env.admin);
                    // loginPO.passwordText.sendKeys(process.env.password);
                    loginPO.usernameText.sendKeys("admin4");
                    loginPO.passwordText.sendKeys("Cutco@123");
                    reportInfo.log('Username and password are entered');
                    utilities.attachScreenshot();
                    loginPO.loginButton.click();

                } else if (deviceName === 'ipad1') {
                    reportInfo.log('ipad app is invoked');
                    utilities.waitForElement(loginPO.usernameText, waitTime);
                    utilities.waitForElement(loginPO.passwordText, waitTime);
                    // loginPO.usernameText.sendKeys(process.env.admin);
                    // loginPO.passwordText.sendKeys(process.env.password);
                    loginPO.usernameText.sendKeys("admin5");
                    loginPO.passwordText.sendKeys("Cutco@123");
                    reportInfo.log('Username and password are entered');
                    utilities.attachScreenshot();
                    loginPO.loginButton.click().then(function () {
                        reportInfo.log('Login button is clicked');
                    })
                }
                break;

            case 'android':
                reportInfo.log('Android app invoked');
                utilities.waitForElement(loginPO.usernameText, waitTime);
                utilities.waitForElement(loginPO.passwordText, waitTime);
                // loginPO.usernameText.sendKeys(process.env.android);
                // loginPO.passwordText.sendKeys(process.env.password);
                loginPO.usernameText.sendKeys("admin2");
                loginPO.passwordText.sendKeys("Cutco@123");
                reportInfo.log('Username and password entered');
                utilities.attachScreenshot();
                loginPO.loginButton.click().then(function () {
                    reportInfo.log('Login button is clicked');
                    browser.wait(ExpectedConditions.visibilityOf(loginPO.alertNoButton), waitTime).then(function (flag) {
                        if (flag) {
                            loginPO.alertNoButton.click();
                            reportInfo.log('Finger Print Alert by passing');
                        }
                    });
                })
                break;
        }

    }

};
module.exports = new loginApp();