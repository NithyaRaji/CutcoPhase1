var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');
var browseByCategoryObj = require('../com.sirius.pageObjects/browseByCategory_po.js');
var browserDetails = require('../com.sirius.reusables/browserDetails.js');
var menuListObj = require('../com.sirius.pageObjects/menuList_po.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var browseObj = require('../com.sirius.pageObjects/browseByCategory_po');
var loginPOj = require('../com.sirius.pageObjects/login_po.js');
var browseObj = require('../com.sirius.pageObjects/browseByCategory_po');

// const {
//     assert
// } = require("chai");
// const {
//     expect
// } = require("chai");
var EC = protractor.ExpectedConditions;
var waitTimeout = 200000;
var store;

let homePage = function () {

    this.clickHam1 = function () {

        browser.executeScript(clickHam);

    }

    this.selectPromoFromLeftNavigation = function () {
        var homePagePO = new homePageObj();
        var menuListPO = new menuListObj();
        var browsePO = new browseObj();

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.hamburgerMenuMobile);
            //homePagePO.hamburgerMenuMobile.click();
            browser.executeScript(clickHam);
            reportInfo.log('Humburger menu is clicked and left navigation is opened');
            utilities.waitForElement(menuListPO.homeLink, waitTimeout);
            utilities.attachScreenshot();
            utilities.HighlightElement(menuListPO.promoLink)
            menuListPO.promoLink.click();
            reportInfo.log('Promo is selected from the left navigation links');
            utilities.pageWait();
        } else {
        utilities.waitUtilElementPresent(homePagePO.hamburgerMenu, waitTimeout);
        utilities.HighlightElement(homePagePO.hamburgerMenu);
        homePagePO.hamburgerMenu.click();

        utilities.waitUtilElementPresent(menuListPO.promoLink, waitTimeout);
        utilities.HighlightElement(menuListPO.promoLink);
        menuListPO.promoLink.click();
        browser.sleep(10000);
        }

    }

    this.verfiyHomePage = function () {
        var homePagePO = new homePageObj();
        var browsePO = new browseObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
            utilities.HighlightElement(homePagePO.messageHeader);
        } else {
            utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
            utilities.HighlightElement(homePagePO.messageHeader);
        }
        homePagePO.messageHeader.isPresent().then(function (result) {
            utilities.log("Notification found ", result);
            if (result) {
                if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    homePagePO.messageGotItButton.click();
                    utilities.waitUtilElementPresent(browsePO.popupDoneButton);
                    utilities.HighlightElement(browsePO.popupDoneButton);
                    browsePO.popupDoneButton.click();
                    reportInfo.log('Got it button is clicked in the message modal');
                    utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
                } else {
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    utilities.click(homePagePO.messageGotItButton);
                    utilities.waitUtilElementPresent(browsePO.popupDoneButton);
                    utilities.HighlightElement(browsePO.popupDoneButton);
                    browsePO.popupDoneButton.click();
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    reportInfo.log('Got it button is clicked in the message modal');
                }
            }
        }, 5000);
    }

    this.verfiyHomePage2 = function () {
        //without popups
        var homePagePO = new homePageObj();
        var browsePO = new browseObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
            utilities.HighlightElement(homePagePO.messageHeader);
        } else {
            utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
            utilities.HighlightElement(homePagePO.messageHeader);
        }
        homePagePO.messageHeader.isPresent().then(function (result) {
            utilities.log("Notification found ", result);
            if (result) {
                if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    homePagePO.messageGotItButton.click();
                    utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
                } else {
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    utilities.click(homePagePO.messageGotItButton);


                }
            }
        }, 5000);
    }

    this.verfiyReturnHomePage = function () {
        var homePagePO = new homePageObj();
        browser.sleep(6000);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
            browser.sleep(5000);
        } else {
            utilities.waitForElement(homePagePO.contactProfile, waitTimeout);
            utilities.attachScreenshot();
        }
    }

    this.verfiyReturnHomePageCheck = function () {
        var homePagePO = new homePageObj();
        browser.sleep(6000);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
            browser.sleep(5000);
        } else {
            utilities.waitForElement(homePagePO.messageHeader, waitTimeout);
            utilities.waitForElement(homePagePO.messageGotItButton, waitTimeout);
            utilities.scrollTo(homePagePO.messageGotItButton);
            homePagePO.messageGotItButton.click();
        }
    }

    this.verfiyHomePage1 = function () {
        var homePagePO = new homePageObj();
        utilities.waitForElement(homePagePO.contactProfile, waitTimeout);
        utilities.attachScreenshot();
    }

    this.selectShopFromLeftNavigation = function () {
        var homePagePO = new homePageObj();
        var menuListPO = new menuListObj();
        var browsePO = new browseObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {

            utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.hamburgerMenuMobile);
            // expect(homePagePO.hamburgerMenuMobile).to.exist;

            browser.executeScript(clickHamburgerMobile);
            reportInfo.log('Humburger menu is clicked and left navigation is opened');
            utilities.waitUtilElementPresent(menuListPO.shopLink, waitTimeout);
            browser.wait(EC.elementToBeClickable(menuListPO.shopLink), waitTimeout);
            utilities.HighlightElement(menuListPO.shopLink);
            menuListPO.shopLink.click();
            reportInfo.log('Shop is selected from the left navigation links');

            if (browsePO.retryBtn.isPresent() === 'true') {
                browsePO.retryBtn.getText().then(function (text) {
                    store = text;
                    utilities.HighlightElement(browsePO.retryBtn);
                   // console.log("**** store **** ", store);
                    if (store.indexOf("Retry") === -1) {
                        utilities.waitUtilElementPresent(browsePO.retryBtn, waitTimeout);
                        utilities.HighlightElement(browsePO.retryBtn);
                        utilities.waitUtilElementPresent(browsePO.productName, waitTimeout);
                    }
                })
            }
            browser.sleep(10000);
            utilities.waitUtilElementPresent(browsePO.productName, waitTimeout);
        } else {
            utilities.waitUtilElementPresent(homePagePO.hamburgerMenu, waitTimeout);
            utilities.HighlightElement(homePagePO.hamburgerMenu);
            browser.wait(EC.visibilityOf(homePagePO.hamburgerMenu), waitTimeout);
            browser.executeScript(clickHam);
            browser.sleep(10000);
            reportInfo.log('Humburger menu is clicked and left navigation is opened');
            utilities.waitForElement(menuListPO.shopLink, waitTimeout);
            utilities.HighlightElement(menuListPO.shopLink);
            menuListPO.shopLink.click();
            utilities.waitUtilElementPresent(browsePO.productName, waitTimeout);
            browser.sleep(10000);
        }
    }

    this.skipRetryOption = function () {
        var homePagePO = new homePageObj();
        var browsePO = new browseObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browsePO.retryBtn.getText().then(function (text) {
                store = text;
                utilities.HighlightElement(browsePO.retryBtn);
               // console.log("**** store **** ", store);
                if (store.indexOf("Retry") === -1) {
                    utilities.waitUtilElementPresent(browsePO.retryBtn, waitTimeout);
                    utilities.HighlightElement(browsePO.retryBtn);
                    utilities.waitUtilElementPresent(browsePO.productName, waitTimeout);
                }
            })
        }
    }

    this.LeftNavigationMenuValidation = function () {
        var homePagePO = new homePageObj();
        var menuListPO = new menuListObj();
        utilities.log('Log device: ', browserDetails.executionName);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);

            browser.executeScript(clickHam);
            reportInfo.log('Humburger menu is clicked and left navigation is opened');
            utilities.waitForElement(menuListPO.shopLink, waitTimeout);
            browser.wait(EC.elementToBeClickable(menuListPO.shopLink), waitTimeout);
            utilities.attachScreenshot();
            menuListPO.shopLink.click();
            reportInfo.log('Shop is selected from the left navigation links');
            utilities.pageWait();
            utilities.log('End log');
        } else {
            utilities.waitForElement(homePagePO.hamburgerMenu, waitTimeout);
            utilities.HighlightElement(homePagePO.hamburgerMenu);
            browser.wait(EC.visibilityOf(homePagePO.hamburgerMenu), waitTimeout);
            browser.executeScript(clickHam);
            reportInfo.log('Humburger menu is clicked and left navigation is opened');
            utilities.waitForElement(menuListPO.shopLink, waitTimeout);
            utilities.HighlightElement(menuListPO.homeLink);
            utilities.HighlightElement(menuListPO.feedbackLink);
            browser.executeScript("document.getElementsByClassName('cc-active-icon hydrated')[1].click();");
        }
    }

    this.selectHomeFromLeftNavigation = function () {
        var homePagePO = new homePageObj();
        var menuListPO = new menuListObj();
        utilities.log('Log device: ', browserDetails.executionName);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.hamburgerMenuMobile);

            //homePagePO.hamburgerMenuMobile.click();
            browser.executeScript(clickHam);
            reportInfo.log('Humburger menu is clicked and left navigation is opened');
            utilities.waitForElement(menuListPO.homeLink, waitTimeout);
            browser.wait(EC.elementToBeClickable(menuListPO.homeLink), waitTimeout);
            utilities.attachScreenshot();
            menuListPO.homeLink.click();
            reportInfo.log('Home is selected from the left navigation links');
            utilities.pageWait();
            utilities.log('End log');
        } else {
            utilities.waitUtilElementPresent(homePagePO.hamburgerMenu, waitTimeout);
            utilities.HighlightElement(homePagePO.hamburgerMenu);
            browser.wait(EC.visibilityOf(homePagePO.hamburgerMenu), waitTimeout);
            browser.executeScript(clickHam);
            utilities.pageWait(10000);
            reportInfo.log('Humburger menu is clicked and left navigation is opened');
            utilities.waitForElement(menuListPO.shopLink, waitTimeout);
            utilities.attachScreenshot();
            utilities.HighlightElement(menuListPO.homeLink);
            menuListPO.homeLink.click();
            reportInfo.log('Home is selected from the left navigation links');
            utilities.pageWait();

        }
    }

    this.switchToCutcoHomeUS = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var homePagePO = new homePageObj();
            var store;
            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.messageNotificationMobile);
            utilities.HighlightElement(homePagePO.hamburgerMenuMobile);
            browser.executeScript(clickHamburgerMobile);
            utilities.waitUtilElementPresent(homePagePO.companyNameMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.companyNameMobile);


            //browser.executeScript(clickHam);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
           // console.log(companyDetails);
            var companyNameValue = homePagePO.companyNameMobile.getText();
           // console.log('companyName:::::', companyNameValue);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
            // console.log('Company Details - JavaScript', companyDetails);

            homePagePO.companyNameMobile.getText().then(function (text) {
                store = text;
               // console.log("**** store **** ", store);
               // console.log("**** Index Value of Cutco Home US **** ", store.indexOf("Cutco at Home US"));
                if (store.indexOf("Cutco at Home US") === -1) {
                  //  console.log('Inside of indexOf looping ****');
                    utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
                    reportInfo.log('Humburger menu is clicked and left navigation is opened');
                    utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
                    homePagePO.changeCompanyMobile.click();
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    utilities.waitUtilElementPresent(homePagePO.cutcoHomeUS, waitTimeout);
                    browser.sleep(5000);
                    homePagePO.cutcoHomeUS.isDisplayed().then(function () {
                        homePagePO.cutcoHomeUS.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Cutco Home US is selected');
                        homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                            if (flag == true) {
                                utilities.waitUtilElementPresent(homePagePO.switchCompanyButton, waitTimeout);
                                homePagePO.switchCompanyButton.click();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                                utilities.waitForElement(homePagePO.cutcoLogo, waitTimeout);
                            }
                        })
                        utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
                        browser.wait(EC.visibilityOf(homePagePO.messageHeader), waitTimeout);
                        utilities.scrollTo(homePagePO.messageGotItButton);
                        utilities.waitUtilElementPresent(homePagePO.messageGotItButton, waitTimeout);
                        homePagePO.messageGotItButton.click();
                        utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
                    })
                } else {
                    browser.executeScript(clickHamburgerMobile);
                }
            })
        } else {
            var homePagePO = new homePageObj();
            var store;
            homePagePO.profilePlace.getText().then(function (text) {
                store = text;
                // console.log("**** store **** ", store);
                if (store.indexOf("Cutco") === -1) {
                  //  console.log("Not in cutco store and hence switching the store");
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    utilities.HighlightElement(homePagePO.contactProfile);
                    utilities.click(homePagePO.contactProfile);
                    // homePagePO.contactProfile.click();
                    utilities.attachScreenshot();
                    reportInfo.log('Clicked on the contact profile icon in the left top of the page');
                    utilities.waitForElement(homePagePO.changeCompany, waitTimeout);
                    homePagePO.changeCompany.click();
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    utilities.waitForElement(homePagePO.changeCompanyGoBack, waitTimeout);
                    homePagePO.changeCompanyGoBack.isDisplayed().then(function () {
                        homePagePO.cutcoHomeUS.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Cutco Home US is selected');
                        browser.wait(EC.visibilityOf(homePagePO.profilePlace), waitTimeout);
                        homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                            if (flag == true) {
                                utilities.attachScreenshot();
                                utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                                homePagePO.switchCompanyButton.click();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                                utilities.waitForElement(homePagePO.cutcoLogo, waitTimeout);
                                utilities.waitForElement(homePagePO.profilePlace, waitTimeout);
                            }
                        })
                    })
                    utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    browser.executeScript(clickGotItButton);
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    reportInfo.log('Got it button is clicked in the message modal');
                    utilities.attachScreenshot();
                }
            })
        }

    }

    this.againSwitchToCutcoHomeUS = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var homePagePO = new homePageObj();
            var store;
            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.messageNotificationMobile);
            utilities.pageWaitSec(4);
            browser.executeScript(clickHamburgerMobile);
            utilities.waitUtilElementPresent(homePagePO.companyNameMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.companyNameMobile);


            //  browser.executeScript(clickHam);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
           // console.log(companyDetails);
            var companyNameValue = homePagePO.companyNameMobile.getText();
            // console.log('companyName:::::', companyNameValue);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
            // console.log('Company Details - JavaScript', companyDetails);

            homePagePO.companyNameMobile.getText().then(function (text) {
                store = text;

                // console.log("**** store **** ", store);
                // console.log("**** Index Value of Cutco Home US **** ", store.indexOf("Cutco at Home US"));
                if (store.indexOf("Cutco at Home US") === -1) {
                  //  console.log('Inside of indexOf looping ****');
                    utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
                    reportInfo.log('Humburger menu is clicked and left navigation is opened');
                    utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
                    homePagePO.changeCompanyMobile.click();
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    homePagePO.cutcoHomeUS.isDisplayed().then(function () {
                        homePagePO.cutcoHomeUS.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Cutco Home US is selected');
                        homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                            if (flag == true) {
                                utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                                homePagePO.switchCompanyButton.click();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                                utilities.waitForElement(homePagePO.cutcoLogo, waitTimeout);
                            }
                        })
                    })
                } else {
                    setTimeout(() => {
                        browser.executeScript(clickHam);
                    }, 4000);
                }
            })
        } else {
            var homePagePO = new homePageObj();
            var store;
            homePagePO.profilePlace.getText().then(function (text) {
                store = text;
               // console.log("**** store **** ", store);
                if (store.indexOf("Cutco") === -1) {
                  //  console.log("Not in cutco store and hence switching the store");
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    utilities.HighlightElement(homePagePO.contactProfile);
                    utilities.click(homePagePO.contactProfile);
                    // homePagePO.contactProfile.click();
                    utilities.attachScreenshot();
                    reportInfo.log('Clicked on the contact profile icon in the left top of the page');
                    utilities.waitForElement(homePagePO.changeCompany, waitTimeout);
                    homePagePO.changeCompany.click();
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    utilities.waitForElement(homePagePO.changeCompanyGoBack, waitTimeout);
                    homePagePO.changeCompanyGoBack.isDisplayed().then(function () {
                        homePagePO.cutcoHomeUS.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Cutco Home US is selected');
                        browser.wait(EC.visibilityOf(homePagePO.profilePlace), waitTimeout);
                        homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                            if (flag == true) {
                                utilities.attachScreenshot();
                                utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                                homePagePO.switchCompanyButton.click();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                                utilities.waitForElement(homePagePO.cutcoLogo, waitTimeout);
                                utilities.waitForElement(homePagePO.profilePlace, waitTimeout);
                            }
                        })
                    })
                }
            })
        }

    }

    this.switchToVectorCA = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var store;
            var homePagePO = new homePageObj();
            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);
            utilities.pageWaitSec(4);
            utilities.HighlightElement(homePagePO.companyNameMobile);
            browser.executeScript(clickHamburgerMobile);


            // var companyDetails = 
            browser.executeScript("document.getElementsByClassName('company')[0].innerText");
           // console.log(companyDetails);
            var companyNameValue = homePagePO.companyNameMobile.getText();
           // console.log('companyName:::::', companyNameValue);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
            // console.log('Company Details - JavaScript', companyDetails);
            homePagePO.companyNameMobile.getText().then(function (text) {
                store = text;
                // console.log("***actual text***", text);
                // console.log("**** store **** ", store);
                // console.log("Vector CA Index Value ", store.indexOf("Vector CA"));
                if (store.indexOf("Vector CA") == -1) {
                    utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
                    utilities.attachScreenshot();
                    reportInfo.log('Humburger menu is clicked and left navigation is opened');
                    utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
                    browser.wait(EC.elementToBeClickable(homePagePO.changeCompanyMobile), waitTimeout);
                    homePagePO.changeCompanyMobile.click();
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    utilities.waitUtilElementPresent(homePagePO.vectorCA, waitTimeout);
                    browser.sleep(4000);
                    homePagePO.vectorCA.isDisplayed().then(function () {
                        homePagePO.vectorCA.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Vector CA is selected');
                        homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                            if (flag == true) {
                                utilities.waitUtilElementPresent(homePagePO.switchCompanyButton, waitTimeout);
                                homePagePO.switchCompanyButton.click();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                            }
                        })
                        utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
                        browser.wait(EC.visibilityOf(homePagePO.messageHeader), waitTimeout);
                        utilities.scrollTo(homePagePO.messageGotItButton);
                        utilities.waitUtilElementPresent(homePagePO.messageGotItButton, waitTimeout);
                        homePagePO.messageGotItButton.click();
                        utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
                    })
                } else {
                    setTimeout(() => {
                        browser.executeScript(clickHamburgerMobile);
                    }, 2000);
                }
            })
        } else {
            var homePagePO = new homePageObj();

            homePagePO.profilePlace.getText().then(function (text) {
                store = text;
                // console.log("**** place **** ", store);
                if (store.indexOf("CA") === -1) {
                    utilities.log("Not in Vector CA store and hence switching the store");
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    utilities.HighlightElement(homePagePO.contactProfile);
                    homePagePO.contactProfile.click();
                    reportInfo.log('Clicked on the contact profile icon in the left top of the page');
                    utilities.waitForElement(homePagePO.changeCompany, waitTimeout);
                    homePagePO.changeCompany.click();
                    utilities.attachScreenshot();
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    utilities.waitUtilElementPresent(homePagePO.changeCompanyGoBack, waitTimeout);
                    homePagePO.changeCompanyGoBack.isDisplayed().then(function () {
                        utilities.waitForElement(homePagePO.vectorCA, waitTimeout);
                        homePagePO.vectorCA.click();
                        reportInfo.log('Vector CA is selected');
                        browser.wait(EC.visibilityOf(homePagePO.profilePlace), waitTimeout);
                        homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                            if (flag == true) {
                                utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                                homePagePO.switchCompanyButton.click();
                                utilities.attachScreenshot();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                                utilities.waitForElement(homePagePO.cutcoLogo, waitTimeout);
                                utilities.waitForElement(homePagePO.profilePlace, waitTimeout);
                            }
                        })
                    })
                    utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    browser.executeScript(clickGotItButton);
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    reportInfo.log('Got it button is clicked in the message modal');
                    utilities.attachScreenshot();
                }
            })
        }
    }

    this.againSwitchToVectorCA = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var store;
            var homePagePO = new homePageObj();
            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);
            utilities.pageWaitSec(4);
            utilities.HighlightElement(homePagePO.companyNameMobile);
            browser.executeScript(clickHamburgerMobile);


            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
           // console.log(companyDetails);
            var companyNameValue = homePagePO.companyNameMobile.getText();
            // console.log('companyName:::::', companyNameValue);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
            // console.log('Company Details - JavaScript', companyDetails);
            homePagePO.companyNameMobile.getText().then(function (text) {
                store = text;
                // console.log("***actual text***", text);
                // console.log("**** store **** ", store);
                // console.log("Vector CA Index Value ", store.indexOf("Vector CA"));
                if (store.indexOf("Vector CA") == -1) {
                    utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
                    utilities.attachScreenshot();
                    reportInfo.log('Humburger menu is clicked and left navigation is opened');
                    utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
                    browser.wait(EC.elementToBeClickable(homePagePO.changeCompanyMobile), waitTimeout);
                    homePagePO.changeCompanyMobile.click();
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    homePagePO.vectorCA.isDisplayed().then(function () {
                        homePagePO.vectorCA.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Vector CA is selected');
                        homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                            if (flag == true) {
                                utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                                homePagePO.switchCompanyButton.click();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                            }
                        })
                    })
                } else {
                    setTimeout(() => {
                        browser.executeScript(clickHamburgerMobile);
                    }, 2000);
                }
            })
        } else {
            var homePagePO = new homePageObj();

            homePagePO.profilePlace.getText().then(function (text) {
                store = text;
               // console.log("**** place **** ", store);
                if (store.indexOf("CA") === -1) {
                    utilities.log("Not in Vector CA store and hence switching the store");
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    utilities.HighlightElement(homePagePO.contactProfile);
                    homePagePO.contactProfile.click();
                    reportInfo.log('Clicked on the contact profile icon in the left top of the page');
                    utilities.waitForElement(homePagePO.changeCompany, waitTimeout);
                    homePagePO.changeCompany.click();
                    utilities.attachScreenshot();
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    utilities.waitForElement(homePagePO.changeCompanyGoBack, waitTimeout);
                    homePagePO.changeCompanyGoBack.isDisplayed().then(function () {
                        utilities.waitForElement(homePagePO.vectorCA, waitTimeout);
                        homePagePO.vectorCA.click();
                        reportInfo.log('Vector CA is selected');
                        browser.wait(EC.visibilityOf(homePagePO.profilePlace), waitTimeout);
                        homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                            if (flag == true) {
                                utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                                homePagePO.switchCompanyButton.click();
                                utilities.attachScreenshot();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                                utilities.waitForElement(homePagePO.cutcoLogo, waitTimeout);
                                utilities.waitForElement(homePagePO.profilePlace, waitTimeout);
                            }
                        })
                    })
                }
            })
        }
    }


    this.masquerade = function (name) {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var store;
            var homePagePO = new homePageObj();
            var menuListPO = new menuListObj();
            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);

            browser.executeScript(clickHam);

            reportInfo.log('Clicked on the contact profile icon in the left top of the page');
            utilities.waitUtilElementPresent(homePagePO.masquaradeMobile, waitTimeout);
            homePagePO.masquaradeMobile.click();
            utilities.attachScreenshot();
            reportInfo.log('masquerade is clicked');

            utilities.waitUtilElementPresent(homePagePO.masqueradeHeader, waitTimeout);
            utilities.scrollTo(homePagePO.masqueradeHeader);
            reportInfo.log('Wait for the masquerade modal');

            utilities.waitUtilElementPresent(homePagePO.repNameField, waitTimeout);
            utilities.scrollTo(homePagePO.repNameField);
            homePagePO.repNameField.sendKeys(name);

            homePagePO.masqueradeHeader.click();
            utilities.scrollTo(homePagePO.searchButton);
            browser.sleep(3000);
            utilities.click(homePagePO.searchButton);
            // homePagePO.searchButton.click();
            reportInfo.log("Search button is clicked");

            utilities.waitUtilElementPresent(homePagePO.selectUserRow, waitTimeout);
            utilities.HighlightElement(homePagePO.selectUserRow);
            browser.executeScript("document.getElementsByClassName('user-row')[0].click();");
            //homePagePO.selectUserRow.click();

            browser.sleep(5000);
            utilities.waitUtilElementPresent(homePagePO.selectUserButton, waitTimeout);
            utilities.HighlightElement(homePagePO.selectUserButton);
            homePagePO.selectUserButton.click();

            utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
            utilities.HighlightElement(homePagePO.messageHeader);
            homePagePO.messageHeader.isPresent().then(function (result) {
                utilities.log("Notification found ", result);
                if (result) {

                    utilities.waitForElement(homePagePO.messageHeader, waitTimeout);
                    browser.wait(EC.visibilityOf(homePagePO.messageHeader), waitTimeout);
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    utilities.waitForElement(homePagePO.messageGotItButton, waitTimeout);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    homePagePO.messageGotItButton.click();
                    reportInfo.log('Got it button is clicked in the message modal');
                    utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
                }
            });

            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);

            browser.executeScript(clickHam);

            utilities.waitUtilElementPresent(homePagePO.changeCompanyDisabledMobile, waitTimeout);
            utilities.attachScreenshot();
            // homePagePO.messageCount.click();

            utilities.waitUtilElementPresent(menuListPO.homeLink, waitTimeout);
            menuListPO.homeLink.click();

        } else {
            var homePagePO = new homePageObj();

            utilities.waitForElement(homePagePO.contactProfile, waitTimeout);
            utilities.HighlightElement(homePagePO.contactProfile);
            homePagePO.contactProfile.click();
            reportInfo.log('Clicked on the contact profile icon in the left top of the page');
            utilities.waitForElement(homePagePO.masquerade, waitTimeout);
            homePagePO.masquerade.click();
            utilities.attachScreenshot();
            reportInfo.log('masquerade is clicked');

            utilities.waitUtilElementPresent(homePagePO.masqueradeHeader, waitTimeout);
            utilities.scrollTo(homePagePO.masqueradeHeader);
            reportInfo.log('Wait for the masquerade modal');

            utilities.waitUtilElementPresent(homePagePO.repNameField, waitTimeout);
            utilities.scrollTo(homePagePO.repNameField);
            homePagePO.repNameField.sendKeys(name);

            utilities.scrollTo(homePagePO.searchButton);
            homePagePO.searchButton.click();
            reportInfo.log("Search button is clicked");

            utilities.waitUtilElementPresent(homePagePO.selectUserRow, waitTimeout);
            utilities.HighlightElement(homePagePO.selectUserRow);
            homePagePO.selectUserRow.click();

            utilities.waitUtilElementPresent(homePagePO.selectUserButton, waitTimeout);
            homePagePO.selectUserButton.click();

            // utilities.waitUtilElementPresent(homePagePO.devilIcon, waitTimeout);
            // utilities.HighlightElement(homePagePO.devilIcon);
            // homePagePO.devilIcon.click();

            // utilities.waitUtilElementPresent(homePagePO.changeCompanyDisabled, waitTimeout);
            // utilities.attachScreenshot();
            // utilities.click(homePagePO.devilIcon);

        }

    }


    this.endMasquerade = function (name) {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var store;
            var homePagePO = new homePageObj();
            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);

            browser.executeScript(clickHam);
            utilities.waitUtilElementPresent(homePagePO.endMasquaradeMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.endMasquaradeMobile);
            homePagePO.endMasquaradeMobile.click();

        } else {
            var homePagePO = new homePageObj();
            utilities.waitUtilElementPresent(homePagePO.devilIcon, waitTimeout);
            utilities.HighlightElement(homePagePO.devilIcon);
            homePagePO.devilIcon.click();

            // utilities.waitUtilElementPresent(homePagePO.changeCompanyDisabled, waitTimeout);
            utilities.attachScreenshot();

            utilities.waitUtilElementPresent(homePagePO.endMasquerade, waitTimeout);
            utilities.HighlightElement(homePagePO.endMasquerade);
            homePagePO.endMasquerade.click();

            reportInfo.log("masquerade session is ended");
            // utilities.click(homePagePO.devilIcon);
            // browser.sleep(10000);
            // utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);

        }

    }

    this.switchToVectorUS = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var store;
            var homePagePO = new homePageObj();
            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.messageNotificationMobile);
            utilities.pageWaitSec(4);
            utilities.HighlightElement(homePagePO.hamburgerMenuMobile);
            browser.executeScript(clickHamburgerMobile);
            utilities.waitUtilElementPresent(homePagePO.companyNameMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.companyNameMobile);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
           // console.log(companyDetails);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
           // console.log('Company Details - JavaScript', companyDetails);

            homePagePO.companyNameMobile.getText().then(function (text) {
                store = text;
              //  console.log("**** store **** ", store);
              //  console.log("**** store - Context Value Vector US **** ", store.indexOf("Vector US"));
                if (store.indexOf("Vector US") === -1) {
                    utilities.attachScreenshot();
                    utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
                    reportInfo.log('Humburger menu is clicked and left navigation is opened');
                    utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
                    browser.wait(EC.elementToBeClickable(homePagePO.changeCompanyMobile), waitTimeout);
                    homePagePO.changeCompanyMobile.click();
                    browser.wait(EC.elementToBeClickable(homePagePO.vectorUS), waitTimeout);
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    utilities.waitUtilElementPresent(homePagePO.vectorUS, waitTimeout);
                    browser.sleep(5000);
                    homePagePO.vectorUS.isDisplayed().then(function () {
                        homePagePO.vectorUS.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Vector US is selected');
                        homePagePO.confirmCompanySwitchModal.isPresent().then(async function (flag) {
                            if (flag == true) {
                                utilities.waitUtilElementPresent(homePagePO.switchCompanyButton, waitTimeout);
                                homePagePO.switchCompanyButton.click();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                            }
                        })
                        utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
                        browser.wait(EC.visibilityOf(homePagePO.messageHeader), waitTimeout);
                        utilities.scrollTo(homePagePO.messageGotItButton);
                        utilities.waitUtilElementPresent(homePagePO.messageGotItButton, waitTimeout);
                        homePagePO.messageGotItButton.click();
                        utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
                    })
                } else {
                    setTimeout(() => {
                        browser.executeScript(clickHamburgerMobile);
                    }, 4000);
                }
            })
        } else {
            var homePagePO = new homePageObj();
            var store;
            homePagePO.profilePlace.getText().then(function (text) {
                store = text;
                // console.log("**** place **** ", store);

                if (store.indexOf("Vector US") === -1) {
                    utilities.log("Not in Vector CA store and hence switching the store");
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    utilities.HighlightElement(homePagePO.contactProfile);
                    //homePagePO.contactProfile.click();
                    utilities.click(homePagePO.contactProfile);
                    reportInfo.log('Clicked on the contact profile icon in the left top of the page');
                    utilities.waitForElement(homePagePO.changeCompany, waitTimeout);
                    homePagePO.changeCompany.click();
                    utilities.attachScreenshot();
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    utilities.waitForElement(homePagePO.changeCompanyGoBack, waitTimeout);
                    homePagePO.changeCompanyGoBack.isDisplayed().then(function () {
                        homePagePO.vectorUS.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Vector US is selected');
                        homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                            if (flag == true) {
                                utilities.waitUtilElementPresent(homePagePO.switchCompanyButton, waitTimeout);
                                homePagePO.switchCompanyButton.click();
                                utilities.attachScreenshot();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                            }
                        })
                    })
                    utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
                    utilities.HighlightElement(homePagePO.messageHeader);
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    browser.executeScript(clickGotItButton);
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    reportInfo.log('Got it button is clicked in the message modal');
                    utilities.attachScreenshot();
                }
            })
        }
    }

    this.againSwitchToVectorUS = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var store;
            var homePagePO = new homePageObj();
            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.messageNotificationMobile);
            utilities.pageWaitSec(4);
            utilities.HighlightElement(homePagePO.hamburgerMenuMobile);
            browser.executeScript(clickHamburgerMobile);
            // browser.executeScript(clickHam);
            utilities.waitUtilElementPresent(homePagePO.companyNameMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.companyNameMobile);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
            // console.log(companyDetails);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
            // console.log('Company Details - JavaScript', companyDetails);

            homePagePO.companyNameMobile.getText().then(function (text) {
                store = text;
               // console.log("**** store **** ", store);
               // console.log("**** store - Context Value Vector US **** ", store.indexOf("Vector US"));
                if (store.indexOf("Vector US") === -1) {
                    utilities.attachScreenshot();
                    utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
                    reportInfo.log('Humburger menu is clicked and left navigation is opened');
                    utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
                    browser.wait(EC.elementToBeClickable(homePagePO.changeCompanyMobile), waitTimeout);
                    homePagePO.changeCompanyMobile.click();
                    browser.wait(EC.elementToBeClickable(homePagePO.vectorUS), waitTimeout);
                    reportInfo.log('Change Company link is clicked from the left navigation');
                    homePagePO.vectorUS.isDisplayed().then(function () {
                        homePagePO.vectorUS.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Vector US is selected');
                        homePagePO.confirmCompanySwitchModal.isPresent().then(async function (flag) {
                            if (flag == true) {
                                utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                                utilities.scrollTo(homePagePO.switchCompanyButton);
                                homePagePO.switchCompanyButton.click();
                                reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                            }
                        })
                    })
                } else {
                    setTimeout(() => {
                        browser.executeScript(clickHamburgerMobile);
                    }, 4000);
                }
            })
        } else {
            var homePagePO = new homePageObj();
            var store;
            homePagePO.messageHeader.isPresent().then(function (result) {
                utilities.log("homePagePO.messageHeader found ", result);
                if (result) {
                  //  console.log("homePagePO.messageHeader found");
                    utilities.HighlightElement(homePagePO.messageHeader);
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    // browser.executeScript(clickGotItButton);
                    utilities.click(homePagePO.messageGotItButton);
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    reportInfo.log('Got it button is clicked in the message modal');
                    utilities.attachScreenshot();
                }
            });

            utilities.log("Not in Vector CA store and hence switching the store");
            utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
            utilities.HighlightElement(homePagePO.contactProfile);
            homePagePO.contactProfile.click();
            reportInfo.log('Clicked on the contact profile icon in the left top of the page');
            utilities.waitForElement(homePagePO.changeCompany, waitTimeout);
            homePagePO.changeCompany.click();
            utilities.attachScreenshot();
            reportInfo.log('Change Company link is clicked from the left navigation');
            utilities.waitForElement(homePagePO.changeCompanyGoBack, waitTimeout);
            homePagePO.changeCompanyGoBack.isDisplayed().then(function () {
                homePagePO.vectorUS.click();
                utilities.attachScreenshot();
                reportInfo.log('Vector US is selected');
                homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                    if (flag == true) {
                        utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                        homePagePO.switchCompanyButton.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                    }
                })
            })

        }
    }


    this.switchToVectorUSAndSaveOrder = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var homePagePO = new homePageObj();
            var shoppingCartPO = new shoppingCartObj();
            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.messageNotificationMobile);
            utilities.pageWaitSec(4);
            utilities.HighlightElement(homePagePO.hamburgerMenuMobile);
            browser.executeScript(clickHamburgerMobile);
            // browser.executeScript(clickHam);
            utilities.waitUtilElementPresent(homePagePO.companyNameMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.companyNameMobile);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
           // console.log(companyDetails);
            var companyDetails = browser.executeScript("document.getElementsByClassName('company')[0].innerText");
           // console.log('Company Details - JavaScript', companyDetails);

            homePagePO.companyNameMobile.getText().then(function (text) {
                store = text;
                utilities.attachScreenshot();
                utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
                reportInfo.log('Humburger menu is clicked and left navigation is opened');
                utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
                browser.wait(EC.elementToBeClickable(homePagePO.changeCompanyMobile), waitTimeout);
                homePagePO.changeCompanyMobile.click();
                browser.wait(EC.elementToBeClickable(homePagePO.vectorUS), waitTimeout);
                reportInfo.log('Change Company link is clicked from the left navigation');
                homePagePO.vectorUS.isDisplayed().then(function () {
                    homePagePO.vectorUS.click();
                    utilities.attachScreenshot();
                    reportInfo.log('Vector US is selected');
                    homePagePO.confirmCompanySwitchModal.isPresent().then(async function (flag) {
                        if (flag == true) {
                            utilities.waitForElement(homePagePO.companySwitchContent, waitTimeout);
                            utilities.HighlightElement(homePagePO.confirmCompanySaveOrderYes);
                            browser.executeScript("document.getElementsByTagName('ion-radio')[1].click()");
                            utilities.pageWaitSec(3);
                            utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
                            utilities.HighlightElement(shoppingCartPO.saveOrderReasonField);
                            shoppingCartPO.saveOrderReasonField.sendKeys('Switch Company Save Order');
                            utilities.waitForElement(homePagePO.switchCompanyButton1, waitTimeout);
                            browser.sleep(3000);
                            utilities.scrollTo(homePagePO.switchCompanyButton1);
                            browser.sleep(3000);
                            homePagePO.switchCompanyButton1.click();
                            // browser.executeScript(switchCompany);
                            utilities.pageWaitSec(20);
                            utilities.pageWait();
                            reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                        }
                    })
                    homePagePO.messageHeader.isPresent().then(function (flag) {
                        if (flag == true) {
                            utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
                            browser.wait(EC.visibilityOf(homePagePO.messageHeader), waitTimeout);
                            utilities.scrollTo(homePagePO.messageGotItButton);
                            utilities.waitUtilElementPresent(homePagePO.messageGotItButton, waitTimeout);
                            homePagePO.messageGotItButton.click();
                            utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
                        }
                    })

                })
            })
        } else {
            var homePagePO = new homePageObj();
            var shoppingCartPO = new shoppingCartObj();
            utilities.waitForElement(homePagePO.contactProfile, waitTimeout);
            utilities.HighlightElement(homePagePO.contactProfile);
            homePagePO.contactProfile.click();
            reportInfo.log('Clicked on the contact profile icon in the left top of the page');
            utilities.waitForElement(homePagePO.changeCompany, waitTimeout);
            homePagePO.changeCompany.click();
            utilities.attachScreenshot();
            reportInfo.log('Change Company link is clicked from the left navigation');
            utilities.waitForElement(homePagePO.changeCompanyGoBack, waitTimeout);
            homePagePO.changeCompanyGoBack.isDisplayed().then(function () {
                homePagePO.vectorUS.click();
                utilities.attachScreenshot();
                reportInfo.log('Vector US is selected');
                homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                    if (flag == true) {
                        utilities.waitForElement(homePagePO.companySwitchContent, waitTimeout);
                        utilities.HighlightElement(homePagePO.confirmCompanySaveOrderYes);
                        utilities.scrollTo(homePagePO.confirmCompanySaveOrderYes);
                        homePagePO.confirmCompanySaveOrderYes.click();
                        utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
                        utilities.scrollTo(shoppingCartPO.saveOrderReasonField);
                        shoppingCartPO.saveOrderReasonField.sendKeys('testing switchcompany save order');
                        utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                        homePagePO.switchCompanyButton.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                    }
                })
            })
            homePagePO.messageHeader.isPresent().then(function (result) {
                utilities.log("homePagePO.messageHeader found ", result);
                if (result) {
                   // console.log("homePagePO.messageHeader found");
                    utilities.HighlightElement(homePagePO.messageHeader);
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    browser.executeScript("arguments[0].click();", homePagePO.messageGotItButton);
                    // browser.executeScript(clickGotItButton);
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    reportInfo.log('Got it button is clicked in the message modal');
                    utilities.attachScreenshot();
                }
            });
        }
    }

    this.switchToCutcoUSAndSaveOrder = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var homePagePO = new homePageObj();
            var shoppingCartPO = new shoppingCartObj();
            utilities.attachScreenshot();
            utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);

            utilities.pageWaitSec(3);
            browser.executeScript("document.getElementsByTagName('ion-menu-button')[1].click();");

            reportInfo.log('Humburger menu is clicked and left navigation is opened');
            utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
            browser.wait(EC.elementToBeClickable(homePagePO.changeCompanyMobile), waitTimeout);
            homePagePO.changeCompanyMobile.click();
            reportInfo.log('Change Company link is clicked from the left navigation');
            homePagePO.cutcoHomeUS.isDisplayed().then(function () {
                homePagePO.cutcoHomeUS.click();
                utilities.attachScreenshot();
                reportInfo.log('Vector US is selected');
                homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                    if (flag == true) {
                        utilities.waitForElement(homePagePO.companySwitchContent, waitTimeout);
                        utilities.HighlightElement(homePagePO.confirmCompanySaveOrderYes);
                        // homePagePO.confirmCompanySaveOrderYes.click();
                        browser.executeScript("document.getElementsByTagName('ion-radio')[1].click()");
                        utilities.pageWaitSec(3);
                        utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
                        utilities.HighlightElement(shoppingCartPO.saveOrderReasonField);
                        shoppingCartPO.saveOrderReasonField.sendKeys('Switch Company Save Order');
                        utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                        // homePagePO.switchCompanyButton.click();
                        browser.executeScript("document.getElementsByTagName('ion-button')[7].click()");
                        utilities.pageWaitSec(3);
                        utilities.attachScreenshot();
                        reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                        utilities.waitForElement(homePagePO.cutcoLogo, waitTimeout);
                    }
                })
                utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
                browser.wait(EC.visibilityOf(homePagePO.messageHeader), waitTimeout);
                utilities.scrollTo(homePagePO.messageGotItButton);
                utilities.waitUtilElementPresent(homePagePO.messageGotItButton, waitTimeout);
                homePagePO.messageGotItButton.click();
                utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
            })
            browser.sleep(8000);
            homePagePO.messageHeader.isPresent().then(function (result) {
                utilities.log("homePagePO.messageHeader found ", result);
                if (result) {
                 //   console.log("homePagePO.messageHeader found");
                    utilities.HighlightElement(homePagePO.messageHeader);
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    browser.executeScript("arguments[0].click();", homePagePO.messageGotItButton);
                    // browser.executeScript(clickGotItButton);
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    reportInfo.log('Got it button is clicked in the message modal');
                    utilities.attachScreenshot();
                }
            });

        } else {
            var homePagePO = new homePageObj();
            var shoppingCartPO = new shoppingCartObj();
            utilities.waitForElement(homePagePO.contactProfile, waitTimeout);
            utilities.HighlightElement(homePagePO.contactProfile);
            homePagePO.contactProfile.click();
            reportInfo.log('Clicked on the contact profile icon in the left top of the page');
            utilities.waitForElement(homePagePO.changeCompany, waitTimeout);
            homePagePO.changeCompany.click();
            utilities.attachScreenshot();
            reportInfo.log('Change Company link is clicked from the left navigation');
            utilities.waitForElement(homePagePO.changeCompanyGoBack, waitTimeout);
            homePagePO.changeCompanyGoBack.isDisplayed().then(function () {
                homePagePO.cutcoHomeUS.click();
                utilities.attachScreenshot();
                reportInfo.log('Vector US is selected');
                homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                    if (flag == true) {
                        utilities.waitForElement(homePagePO.companySwitchContent, waitTimeout);
                        utilities.HighlightElement(homePagePO.confirmCompanySaveOrderYes);
                        utilities.scrollTo(homePagePO.confirmCompanySaveOrderYes);
                        homePagePO.confirmCompanySaveOrderYes.click();
                        utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
                        utilities.scrollTo(shoppingCartPO.saveOrderReasonField);
                        shoppingCartPO.saveOrderReasonField.sendKeys('testing switchcompany save order');
                        utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                        homePagePO.switchCompanyButton.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                    }
                })
            })
            utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
            utilities.HighlightElement(homePagePO.messageHeader);
            utilities.scrollTo(homePagePO.messageGotItButton);
            reportInfo.log('Wait for the message modal and Got it option in the home page');
            utilities.HighlightElement(homePagePO.messageGotItButton);
            browser.executeScript(clickGotItButton);
            utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
            reportInfo.log('Got it button is clicked in the message modal');
            utilities.attachScreenshot();
        }
    }


    this.switchToVectorCAAndSaveOrder = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var homePagePO = new homePageObj();
            var shoppingCartPO = new shoppingCartObj();
            utilities.attachScreenshot();
            utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);

            browser.executeScript(clickHam);
            utilities.pageWaitSec(3);

            reportInfo.log('Humburger menu is clicked and left navigation is opened');
            utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
            browser.wait(EC.elementToBeClickable(homePagePO.changeCompanyMobile), waitTimeout);
            homePagePO.changeCompanyMobile.click();
            reportInfo.log('Change Company link is clicked from the left navigation');
            homePagePO.vectorCA.isDisplayed().then(function () {
                homePagePO.vectorCA.click();
                utilities.attachScreenshot();
                reportInfo.log('Vector CA is selected');
                homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                    if (flag == true) {
                        utilities.scrollTo(homePagePO.confirmCompanySaveOrderYes);
                        utilities.waitForElement(homePagePO.companySwitchContent, waitTimeout);
                        utilities.HighlightElement(homePagePO.confirmCompanySaveOrderYes);

                        browser.executeScript("document.getElementsByTagName('ion-radio')[1].click()");
                        utilities.pageWaitSec(3);
                        utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
                        utilities.HighlightElement(shoppingCartPO.saveOrderReasonField);
                        shoppingCartPO.saveOrderReasonField.sendKeys('testing switchcompany save order');
                        utilities.click(homePagePO.confirmCompanySaveOrderYes);
                        homePagePO.confirmCompanySaveOrderYes.click();
                        utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                        utilities.scrollTo(homePagePO.switchCompanyButton);
                        utilities.HighlightElement(homePagePO.switchCompanyButton);
                        homePagePO.switchCompanyButton.click();
                        utilities.pageWaitSec(3);
                        utilities.attachScreenshot();
                        reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                        browser.sleep(5000);
                    }
                })
                browser.sleep(10000);
                homePagePO.messageHeader.isPresent().then(function (result) {
                    utilities.log("homePagePO.messageHeader found ", result);
                    if (result) {
                      //  console.log("homePagePO.messageHeader found");
                        utilities.HighlightElement(homePagePO.messageHeader);
                        utilities.scrollTo(homePagePO.messageGotItButton);
                        reportInfo.log('Wait for the message modal and Got it option in the home page');
                        utilities.HighlightElement(homePagePO.messageGotItButton);
                        utilities.click(homePagePO.messageGotItButton);
                        reportInfo.log('Got it button is clicked in the message modal');
                        utilities.attachScreenshot();
                    }
                });
            })
        } else {
            var homePagePO = new homePageObj();
            var shoppingCartPO = new shoppingCartObj();
            utilities.waitForElement(homePagePO.contactProfile, waitTimeout);
            utilities.HighlightElement(homePagePO.contactProfile);
            homePagePO.contactProfile.click();
            reportInfo.log('Clicked on the contact profile icon in the left top of the page');
            utilities.waitForElement(homePagePO.changeCompany, waitTimeout);
            homePagePO.changeCompany.click();
            utilities.attachScreenshot();
            reportInfo.log('Change Company link is clicked from the left navigation');
            utilities.waitForElement(homePagePO.changeCompanyGoBack, waitTimeout);
            homePagePO.changeCompanyGoBack.isDisplayed().then(function () {
                homePagePO.vectorCA.click();
                utilities.attachScreenshot();
                reportInfo.log('Vector US is selected');
                homePagePO.confirmCompanySwitchModal.isPresent().then(function (flag) {
                    if (flag == true) {
                        utilities.waitForElement(homePagePO.companySwitchContent, waitTimeout);
                        utilities.HighlightElement(homePagePO.confirmCompanySaveOrderYes);
                        utilities.scrollTo(homePagePO.confirmCompanySaveOrderYes);
                        homePagePO.confirmCompanySaveOrderYes.click();
                        utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
                        utilities.scrollTo(shoppingCartPO.saveOrderReasonField);
                        shoppingCartPO.saveOrderReasonField.sendKeys('testing switchcompany save order');
                        utilities.waitForElement(homePagePO.switchCompanyButton, waitTimeout);
                        homePagePO.switchCompanyButton.click();
                        utilities.attachScreenshot();
                        reportInfo.log('Switch Company Button is clicked in the Switch Company modal');
                    }
                })
            })
            browser.sleep(3000);
            homePagePO.messageHeader.isPresent().then(function (result) {
                utilities.log("homePagePO.messageHeader found ", result);
                if (result) {
                  //  console.log("homePagePO.messageHeader found");
                    utilities.HighlightElement(homePagePO.messageHeader);
                    utilities.scrollTo(homePagePO.messageGotItButton);
                    reportInfo.log('Wait for the message modal and Got it option in the home page');
                    utilities.HighlightElement(homePagePO.messageGotItButton);
                    browser.executeScript("arguments[0].click();", homePagePO.messageGotItButton);
                    // browser.executeScript(clickGotItButton);
                    utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
                    reportInfo.log('Got it button is clicked in the message modal');
                    utilities.attachScreenshot();
                }
            });

        }


    }

    this.resumeOrderSectionValidations = function () {
        var homePagePO = new homePageObj();
        utilities.waitUtilElementPresent(homePagePO.pendingOrderSummaryFirst, waitTimeout);
        var pendingsummarycount;
        homePagePO.pendingOrderSummaryCount.count().then(function (count) {
            pendingsummarycount = count;
            utilities.log(" ***** pendingsummarycount ***** ", count);

            if (pendingsummarycount === 4) {
                utilities.log("count in if loop :", pendingsummarycount);
                utilities.HighlightElement(homePagePO.pendingOrderSummaryFirst);
                utilities.HighlightElement(homePagePO.showAllLink);
                homePagePO.showAllLink.click();
                utilities.waitForElement(homePagePO.allPendingOrderModal, waitTimeout);
                utilities.HighlightElement(homePagePO.showAllPendingOrderFirst);
                utilities.scrollTo(homePagePO.showAllPendingOrderLast);
                utilities.HighlightElement(homePagePO.showAllPendingOrderLast, waitTimeout);
            }
        });
    }

    this.switchCompanyButton = function () {
        var homePagePO = new homePageObj();
        utilities.waitForElement(homePagePO.companySwitchContent, waitTimeout);
        utilities.HighlightElement(homePagePO.companySwitchContent);
        homePagePO.switchCompanyButton.click();
    }

    this.switchCompanySaveForlater = function () {
        var homePagePO = new homePageObj();
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(homePagePO.companySwitchContent, waitTimeout);
        utilities.HighlightElement(homePagePO.confirmCompanySaveOrderYes);
        homePagePO.confirmCompanySaveOrderYes.click();
        shoppingCartPO.saveOrderReasonField.sendKeys('testing switchcompany save order');
    }

    this.loginCompleteSetupValidations = function () {
        var homePagePO = new homePageObj();
        utilities.waitForElement(homePagePO.completeSetupButton, waitTimeout);
        utilities.HighlightElement(homePagePO.completeSetupButton);
        utilities.HighlightElement(homePagePO.logoutButton);
        homePagePO.completeSetupButton.click();
        utilities.waitForElement(homePagePO.vectorLoginScreen, waitTimeout);
        utilities.HighlightElement(homePagePO.vectorLoginScreen);

    }

    this.profileValidations = function () {
        var homePagePO = new homePageObj();
        utilities.waitForElement(homePagePO.profileName, waitTimeout);
        utilities.HighlightElement(homePagePO.profileName);
        utilities.HighlightElement(homePagePO.profileNumber);
        utilities.HighlightElement(homePagePO.profilePlace);
        utilities.waitForElement(homePagePO.contactProfile, waitTimeout);
        homePagePO.contactProfile.click();
        reportInfo.log('Clicked on the contact profile icon in the left top of the page');
        utilities.waitForElement(homePagePO.changeCompany, waitTimeout);
        utilities.HighlightElement(homePagePO.changeCompany);
        homePagePO.changeCompany.click();
        utilities.HighlightElement(homePagePO.vectorCA);
        utilities.HighlightElement(homePagePO.vectorUS);
        utilities.HighlightElement(homePagePO.cutcoHomeUS);
    }
    this.inactiveProfileValidations = function () {

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var homePagePO = new homePageObj();
            utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.hamburgerMenuMobile);
            browser.executeScript(clickHamburgerMobile);
            utilities.waitUtilElementPresent(homePagePO.companyNameMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.companyNameMobile);
            utilities.HighlightElement(homePagePO.logoutMobile);
            // utilities.HighlightElement(homePagePO.profilePlace);
            reportInfo.log('Clicked on the contact profile icon in the left top of the page and verifying whether the change company option is not available');
            browser.executeScript(clickHamburgerMobile);
        } else {
            var homePagePO = new homePageObj();
            utilities.waitForElement(homePagePO.profileName, waitTimeout);
            utilities.HighlightElement(homePagePO.profileName);
            utilities.HighlightElement(homePagePO.profileNumber);
            utilities.HighlightElement(homePagePO.profilePlace);
            utilities.waitForElement(homePagePO.contactProfile, waitTimeout);
            homePagePO.contactProfile.click();
            reportInfo.log('Clicked on the contact profile icon in the left top of the page and verifying whether the change company option is not available');
            //expect(homePagePO.changeCompany.isPresent()).toBe(false);
        }
    }
    this.verifyPendingOrderName = function () {
        var homePagePO = new homePageObj();
        var CheckFirstName = testInputs.USAddress.FirstName;
        var CheckLastName = testInputs.USAddress.LastName;
        utilities.waitUtilElementPresent(homePagePO.pendingOrderHeader);
        utilities.HighlightElement(homePagePO.pendingOrderHeader);
        homePagePO.pendingOrderHeader.click();
        utilities.waitForElement(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.pendingOrderName);
    }

    this.selectPendingOrder = function () {
        var homePagePO = new homePageObj();
        utilities.waitUtilElementPresent(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.comments);
        homePagePO.comments.click();
        browser.sleep(10000);
    }

    this.MessageNotification = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var homePagePO = new homePageObj();

            //Click on the notification icon and Wait for the message modal
            utilities.waitUtilElementPresent(homePagePO.messageNotificationMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.messageNotificationMobile);
            // homePagePO.messageNotificationMobile.click();
            browser.executeScript("document.getElementsByName('notifications')[1].click()");
            reportInfo.log('Message Notification icon is clicked');
            utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
            utilities.HighlightElement(homePagePO.messageHeader);
            homePagePO.messageHeader.getText().then(function (text) {
                utilities.log('****** Stored Bonus Product Name ******', text);
                // assert.equal(text, 'MESSAGES');
            });
            homePagePO.messageCloseButton.click();
            utilities.attachScreenshot();
            reportInfo.log('Message Close button is clicked in the message notifcation modal');
            utilities.waitForElement(homePagePO.messageNotificationMobile, waitTimeout);
        } else {
            var homePagePO = new homePageObj();

            //Click on the notification icon and Wait for the message modal
            utilities.waitUtilElementPresent(homePagePO.messageNotification, waitTimeout);
            utilities.HighlightElement(homePagePO.messageNotification);
            utilities.pageWaitSec(5);
            homePagePO.messageNotification.click();
            reportInfo.log('Message Notification icon is clicked');
            utilities.waitUtilElementPresent(homePagePO.messageHeader, waitTimeout);
            utilities.HighlightElement(homePagePO.messageHeader);
            homePagePO.messageHeader.getText().then(function (text) {
                utilities.log('****** Stored Bonus Product Name ******', text);
                // assert.equal(text, 'MESSAGES');
            });
            homePagePO.messageCloseButton.click();
            utilities.attachScreenshot();
            reportInfo.log('Message Close button is clicked in the message notifcation modal');

            //Wait for the home page to display after closing the message modal
            utilities.waitForElement(homePagePO.contactProfile, waitTimeout);
            utilities.attachScreenshot();
            homePagePO.contactProfile.isPresent().then(function () { }, 120000)
        }

    }


    this.landingpageVerfication = function () {
        var homePagePO = new homePageObj();

        //Wait for the page to load and verifying the landed page
        browser.wait(EC.visibilityOf(homePagePO.contextSwitcher), 35000).then(function () {
            reportInfo.log('Wait for the home page to load and verifying the landed page');
            utilities.attachScreenshot();
            utilities.HighlightElement(homePagePO.contextSwitcher);
            browser.wait(EC.elementToBeClickable(homePagePO.logoutButton), 5000);
        });

        //Check for the objects in the page
        utilities.waitForElement(homePagePO.contextSwitcher, waitTimeout);
        utilities.waitForElement(homePagePO.logoutButton, waitTimeout);
    }

    this.logout = function () {
        var homePagePO = new homePageObj();
        var loginPO = new loginPOj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(homePagePO.hamburgerMenuMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.hamburgerMenuMobile);
            browser.executeScript(clickHamburgerMobile);
            utilities.waitForElement(homePagePO.logoutMobile, waitTimeout);
            utilities.HighlightElement(homePagePO.logoutMobile);
            homePagePO.logoutMobile.click();
            reportInfo.log('Mobile - Logout button is clicked');
            utilities.waitUtilElementPresent(loginPO.usernameText, waitTimeout);
            browser.sleep(3000);
            utilities.HighlightElement(loginPO.usernameText);
        } else {
            utilities.waitUtilElementPresent(homePagePO.contactProfile, waitTimeout);
            utilities.HighlightElement(homePagePO.contactProfile);
            homePagePO.contactProfile.click();
            utilities.HighlightElement(homePagePO.logoutButton);
            homePagePO.logoutButton.click();
            browser.sleep(3000);
            utilities.waitUtilElementPresent(homePagePO.loginButton);
            // utilities.click(homePagePO.loginButton);
            reportInfo.log('Logout button is clicked');
        }
    }

    this.selectLITFromLeftNavigation = function () {
        var homePagePO = new homePageObj();
        var menuListPO = new menuListObj();
        var browsePO = new browseObj();

        utilities.waitUtilElementPresent(homePagePO.hamburgerMenu, waitTimeout);
        utilities.HighlightElement(homePagePO.hamburgerMenu);
        homePagePO.hamburgerMenu.click();

        utilities.waitForElement(menuListPO.litLink, waitTimeout);
        utilities.HighlightElement(menuListPO.litLink);
        menuListPO.litLink.click();

        browser.sleep(10000);
    }

    this.verifyLIT = function () {
        var homePagePO = new homePageObj();
        var menuListPO = new menuListObj();

        utilities.waitForElement(homePagePO.hamburgerMenu, waitTimeout);
        utilities.HighlightElement(homePagePO.hamburgerMenu);
        homePagePO.hamburgerMenu.click();
        expect(homePagePO.litLink);

    }

    this.checkContextSwitcherNames = function () {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var homePagePO = new homePageObj();

            browser.executeScript(clickHam);
            utilities.HighlightElement(homePagePO.companyNameMobile);
            homePagePO.companyNameMobile.getText().then(function (text) {
                store = text;
               // console.log("**** store **** ", store);
               // console.log("**** store index value **** ", store.indexOf("Cutco"));

                utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
                reportInfo.log('Humburger menu is clicked and left navigation is opened');
                utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
                homePagePO.changeCompanyMobile.click();
                reportInfo.log('Change Company link is clicked from the left navigation');
                homePagePO.cutcoHomeUS.isDisplayed();
                //  expect(homePagePO.cutcoHomeUS).to.exist;
                reportInfo.log('Cutco Home US is verified');
                //  expect(homePagePO.vectorCA).to.exist;
                reportInfo.log('Vector CA Context  is verified');
                //  expect(homePagePO.vectorUS).to.exist;
                reportInfo.log('Vector US Context  is verified');

                homePagePO.changeCompanyGoBack.isDisplayed().then(function () {
                    utilities.HighlightElement(homePagePO.changeCompanyGoBack);
                    // homePagePO.changeCompanyGoBack.click();
                    browser.executeScript("document.getElementsByName('arrow-back')[0].click()");
                    utilities.waitForElement(homePagePO.companyNameMobile, waitTimeout);
                    utilities.HighlightElement(homePagePO.companyNameMobile);
                    reportInfo.log('Change Company Back option is working as expected');
                })
            })
        }
    }

    this.checkCompanyNameSelected = function () {
        var homePagePO = new homePageObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript(clickHam);
            utilities.HighlightElement(homePagePO.companyNameMobile);
            homePagePO.companyNameMobile.getText().then(function (text) {
                store = text;

                utilities.waitForElement(homePagePO.hamburgerMenuMobile, waitTimeout);
                reportInfo.log('Humburger menu is clicked and left navigation is opened');
                utilities.waitForElement(homePagePO.changeCompanyMobile, waitTimeout);
                homePagePO.changeCompanyMobile.click();

                utilities.waitForElement(homePagePO.cutcoHomeUS, waitTimeout);
                homePagePO.cutcoHomeUS.isDisplayed();
                homePagePO.companyNameCheck(store);
                reportInfo.log('Company Context has tick mark and Verified -' + store);
            })
        }
    }




    function clickHam() {
        const segmentButton = document.getElementById('header_menu_btn');
        segmentButton.shadowRoot.querySelector('button').click();
    }

    function clickHamburgerMobile() {
        var arr = document.getElementsByTagName('ion-split-pane')
        var ionItemOptions = arr[0].getElementsByTagName('ion-menu-button');
        ionItemOptions[0].click();
    }

    async function clickHamiOS() {
        document.getElementsByTagName('ion-menu-button')[1].click();

    }


    async function clickSaveOrder() {
        const saveOrder = document.getElementsByClassName('button button-solid ion-activatable ion-focusable hydrated')[16];
        await saveOrder.componentOnReady();
        segmentButton.shadowRoot.querySelector('button').click();
    }

    async function clickGotItButton() {
        var gotItButton = document.getElementsByClassName('acknowledge-button')[0];
        gotItButton.shadowRoot.querySelector('button').click();
    }

    async function switchCompany() {
        var switchCompanyWrapper = document.getElementsByClassName('cc-button-wrapper');
        var switchCompanyButtonWrapper = switchCompanyWrapper[1].getElementsByClassName('button-solid');
        switchCompanyButtonWrapper[1].click()
    }

}

module.exports = new homePage();