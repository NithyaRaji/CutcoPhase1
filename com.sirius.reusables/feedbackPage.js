var browserDetails = require('./browserDetails.js');
var utilities = require('./utilities.js');
var loginPOj = require('../com.sirius.pageObjects/login_po.js');
var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var contactPageObj = require('../com.sirius.pageObjects/feedbackPage_po.js');
var menuListPageObj = require('../com.sirius.pageObjects/menuList_po.js');
var loginPOj = require('../com.sirius.pageObjects/login_po.js');
//const { expect } = require('chai');
//var dotenv = require("dotenv").config();

const {
    expect, util
} = require("chai");

var waitTime = 300000;

// email address validation is pending
let contactPage = function () {

    this.openHamburgerMenu = function () {
        var menuListPO = new menuListPageObj();
        var homePagePO = new homePageObj();
        var contactPO = new contactPageObj();

        utilities.waitForElement(homePagePO.hamburgerMenu, waitTime);
        utilities.HighlightElement(homePagePO.hamburgerMenu);
        homePagePO.hamburgerMenu.click();
        //  utilities.HighlightElement(menuListPO.contactLink);
        // menuListPO.contactLink.click();
        // expect((contactPO.contactUsTitle).isDisplayed());
    }

    this.problemSeverityLowSelect = function () {
        var contactPO = new contactPageObj();
        var menuListPO = new menuListPageObj();
        utilities.HighlightElement(menuListPO.contactLink);
        menuListPO.contactLink.click();
        utilities.HighlightElement(contactPO.contactTypeProblem);
        contactPO.contactTypeProblem.click();
        utilities.HighlightElement(contactPO.problemSeverityLow);
        contactPO.problemSeverityLow.click();

        expect((contactPO.contactUsTitle).isDisplayed());
        expect((contactPO.contactReasonTitle).isDisplayed());
    }

    this.problemSeverityMediumSelect = function () {
        var contactPO = new contactPageObj();
        var menuListPO = new menuListPageObj();
        utilities.HighlightElement(menuListPO.contactLink);
        menuListPO.contactLink.click();
        utilities.HighlightElement(contactPO.contactTypeProblem);
        contactPO.contactTypeProblem.click();
        utilities.HighlightElement(contactPO.problemSeverityMedium);
        contactPO.problemSeverityMedium.click();

        expect((contactPO.contactUsTitle).isDisplayed());
        expect((contactPO.contactReasonTitle).isDisplayed());
    }

    this.problemSeverityHighSelect = function () {
        var contactPO = new contactPageObj();
        var menuListPO = new menuListPageObj();
        utilities.HighlightElement(menuListPO.contactLink);
        menuListPO.contactLink.click();
        utilities.scrollTo(contactPO.contactTypeProblem);
        utilities.HighlightElement(contactPO.contactTypeProblem);
        contactPO.contactTypeProblem.click();
        utilities.HighlightElement(contactPO.problemSeverityHigh);
        contactPO.problemSeverityHigh.click();

        expect((contactPO.contactUsTitle).isDisplayed());
        expect((contactPO.contactReasonTitle).isDisplayed());
    }

    this.contactSuggestionSelect = function () {
        var contactPO = new contactPageObj();
        var menuListPO = new menuListPageObj();
        utilities.HighlightElement(menuListPO.contactLink);
        menuListPO.contactLink.click();
        utilities.HighlightElement(contactPO.contactTypeSuggestion);
        contactPO.contactTypeSuggestion.click();

        // expect(contactPO.problemSeverityTitle.isPresent()).toBeFalsy();
        // expect(contactPO.problemSeverityLow.isPresent()).toBeFalsy();
        // expect(contactPO.problemSeverityMedium.isPresent()).toBeFalsy();
        // expect(contactPO.problemSeverityHigh.isPresent()).toBeFalsy();
    }
    this.needHelpWithAnOrderSelect = function () {
        var contactPO = new contactPageObj();
        var menuListPO = new menuListPageObj();
        utilities.HighlightElement(menuListPO.contactLink);
        menuListPO.contactLink.click();
        utilities.scrollTo(contactPO.contactTypeHelpWithAnOrder);
        utilities.HighlightElement(contactPO.contactTypeHelpWithAnOrder);
        contactPO.contactTypeHelpWithAnOrder.click();

        expect((contactPO.contactUsTitle).isDisplayed());
        expect((contactPO.contactReasonTitle).isDisplayed());
    }

    this.contactInformationValidation = function () {
        var contactPO = new contactPageObj();

        contactPO.contactEmailAutoPopulated.clear();
        contactPO.contactEmailAutoPopulated.sendKeys('asfdfdffffd@gmail.com');
        contactPO.contactEmailAutoPopulated.clear();
        // browser.sleep(30000);
        // expect((contactPO.contactEmailRequiredMessage).isDisplayed()); - error needs to be resolved ***********
        utilities.HighlightElement(contactPO.contactEmailRequiredMessage);
        utilities.attachScreenshot();
        browser.sleep(2000);
        contactPO.contactEmailAutoPopulated.sendKeys('@');
        expect((contactPO.contactEmailInvalidMessage).isDisplayed());
        utilities.HighlightElement(contactPO.contactEmailInvalidMessage);
        utilities.HighlightElement(contactPO.contactDetailsTextArea);
        contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
        utilities.HighlightElement(contactPO.clearButton);
        contactPO.clearButton.click();
        expect((contactPO.contactDetailsRequiredWarning).isDisplayed());
        utilities.scrollTo(contactPO.contactDetailsRequiredWarning);
        utilities.HighlightElement(contactPO.contactDetailsRequiredWarning);
        utilities.attachScreenshot();
        contactPO.contactDetailsTextArea.sendKeys('测试');
        expect((contactPO.contactDetailsInvalidWarning).isDisplayed());
        utilities.HighlightElement(contactPO.contactDetailsInvalidWarning);
        utilities.attachScreenshot();
        utilities.scrollTo(contactPO.sendButtonDisabled);
        utilities.HighlightElement(contactPO.sendButtonDisabled);
        contactPO.cancelButton.click();
    }


    this.submitProblemContactLowSeverity = function () {

        var menuListPO = new menuListPageObj();
        var homePagePO = new homePageObj();
        var contactPO = new contactPageObj();

        contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
        utilities.scrollTo(contactPO.sendButtonEnabled);
        utilities.HighlightElement(contactPO.sendButtonEnabled);
        contactPO.sendButtonEnabled.click();
       // utilities.waitForElement(contactPO.confirmationMessageProblem, waitTime);
        utilities.HighlightElement(contactPO.confirmationMessageProblem);
        utilities.attachScreenshot();
        //expect((contactPO.createAnotherButton).isDisplayed());
        //utilities.HighlightElement(contactPO.doneButton);
        //contactPO.doneButton.click();
        //expect((menuListPO.contactLink).isDisplayed());

    }

    this.submitProblemContactMediumSeverity = function () {
        var menuListPO = new menuListPageObj();
        var homePagePO = new homePageObj();
        var contactPO = new contactPageObj();

        contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
        utilities.scrollTo(contactPO.sendButtonEnabled);
        utilities.HighlightElement(contactPO.sendButtonEnabled);
        contactPO.sendButtonEnabled.click();
       // utilities.waitForElement(contactPO.confirmationMessageProblem);
        utilities.HighlightElement(contactPO.confirmationMessageProblem);
        utilities.attachScreenshot();
        //expect((contactPO.createAnotherButton).isDisplayed());
        //utilities.HighlightElement(contactPO.doneButton);
        //contactPO.doneButton.click();
        //expect((menuListPO.contactLink).isDisplayed());
    }

    this.submitProblemContactHighSeverity = function () {
        var menuListPO = new menuListPageObj();
        var contactPO = new contactPageObj();

        contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
        utilities.scrollTo(contactPO.sendButtonEnabled);
        utilities.HighlightElement(contactPO.sendButtonEnabled);
        contactPO.sendButtonEnabled.click();
       // utilities.waitForElement(contactPO.confirmationMessageProblem, waitTime);
        utilities.HighlightElement(contactPO.confirmationMessageProblem);
        utilities.attachScreenshot();
        // expect((contactPO.createAnotherButton).isDisplayed());
        // utilities.HighlightElement(contactPO.doneButton);
        // contactPO.doneButton.click();
        // expect((menuListPO.contactLink).isDisplayed());
    }

    this.submitSuggestionContact = function () {
        var loginPO = new loginPOj();
        var menuListPO = new menuListPageObj();
        var contactPO = new contactPageObj();

        contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
        utilities.scrollTo(contactPO.sendButtonEnabled);
        utilities.HighlightElement(contactPO.sendButtonEnabled);
        contactPO.sendButtonEnabled.click();
       // utilities.waitForElement(contactPO.confirmationMessageSuggestion, waitTime);
        utilities.HighlightElement(contactPO.confirmationMessageSuggestion);
        utilities.attachScreenshot();
        // expect((contactPO.createAnotherButton).isDisplayed());
        // utilities.HighlightElement(contactPO.doneButton);
        // contactPO.doneButton.click();
        // expect((menuListPO.contactLink).isDisplayed());

    }

    this.submitNeedHelpWithAnOrder = function () {
        var menuListPO = new menuListPageObj();
        var contactPO = new contactPageObj();

        contactPO.orderNumberField.sendKeys("12345678");
        contactPO.customerNameField.sendKeys("AutomationTestuser");

        contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
        utilities.scrollTo(contactPO.sendButtonEnabled);
        utilities.HighlightElement(contactPO.sendButtonEnabled);
        contactPO.sendButtonEnabled.click();
       // utilities.waitForElement(contactPO.confirmationMessageOrderInquiry, waitTime);
        utilities.HighlightElement(contactPO.confirmationMessageOrderInquiry);
        utilities.attachScreenshot();
        // expect((contactPO.createAnotherButton).isDisplayed());
        // utilities.HighlightElement(contactPO.doneButton);
        // contactPO.doneButton.click();
        // expect((menuListPO.contactLink).isDisplayed());

    }

    this.createAnotherVerification = function() {
            var menuListPO = new menuListPageObj();
            var contactPO = new contactPageObj();
        
            utilities.HighlightElement(menuListPO.contactLink);
            menuListPO.contactLink.click();
            utilities.scrollTo(contactPO.contactTypeProblem);
            utilities.HighlightElement(contactPO.contactTypeProblem);
            contactPO.contactTypeProblem.click();
            utilities.HighlightElement(contactPO.problemSeverityHigh);
            contactPO.problemSeverityHigh.click();

            contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
            utilities.scrollTo(contactPO.sendButtonEnabled);
            utilities.HighlightElement(contactPO.sendButtonEnabled);
            contactPO.sendButtonEnabled.click();
            utilities.waitForElement(contactPO.confirmationMessageProblem, waitTime);
            utilities.HighlightElement(contactPO.confirmationMessageProblem);
            expect((contactPO.createAnotherButton).isDisplayed());

            utilities.HighlightElement(contactPO.createAnotherButton);
            contactPO.createAnotherButton.click();
            utilities.HighlightElement(contactPO.contactTypeSuggestion);
            contactPO.contactTypeSuggestion.click();
            contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
            utilities.scrollTo(contactPO.sendButtonEnabled);
            utilities.HighlightElement(contactPO.sendButtonEnabled);
            contactPO.sendButtonEnabled.click();
            utilities.waitForElement(contactPO.confirmationMessageSuggestion, waitTime);
            utilities.HighlightElement(contactPO.confirmationMessageSuggestion, waitTime);
            utilities.HighlightElement(contactPO.doneButton);
            contactPO.doneButton.click();
            expect((menuListPO.contactLink).isDisplayed());
             
    }

    this.needHelpWithAnOrder = function () {
        // var loginPO = new loginPOj();
        var menuListPO = new menuListPageObj();
        var contactPO = new contactPageObj();

        utilities.HighlightElement(menuListPO.contactLink);
        menuListPO.contactLink.click();
        expect((contactPO.contactUsTitle).isDisplayed());
        // expect((contactPO.contactDescription).isDisplayed());
        expect((contactPO.contactReasonTitle).isDisplayed());
        utilities.HighlightElement(contactPO.contactTypeSuggestion);
        contactPO.contactTypeSuggestion.click();
        utilities.HighlightElement(contactPO.contactDetailsTextArea);
        contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
        utilities.HighlightElement(contactPO.clearButton);
        contactPO.clearButton.click();
        utilities.HighlightElement(contactPO.contactDetailsWarningMessage);
        utilities.HighlightElement(contactPO.sendButtonDisabled);
        contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
        utilities.scrollTo(contactPO.sendButtonEnabled);
        utilities.HighlightElement(contactPO.sendButtonEnabled);
        contactPO.sendButtonEnabled.click();


        utilities.waitForElement(contactPO.confirmationMessageSuggestion, waitTime);
        utilities.HighlightElement(contactPO.confirmationMessageSuggestion);
        utilities.HighlightElement(contactPO.createAnotherButton);
        contactPO.createAnotherButton.click();

        utilities.HighlightElement(contactPO.contactTypeSuggestion);
        contactPO.contactTypeSuggestion.click();
        contactPO.contactDetailsTextArea.sendKeys("Automation test contact");
        utilities.scrollTo(contactPO.sendButtonEnabled);
        utilities.HighlightElement(contactPO.sendButtonEnabled);
        contactPO.sendButtonEnabled.click();

        utilities.waitForElement(contactPO.confirmationMessageSuggestion, waitTime);
        utilities.HighlightElement(contactPO.doneButton);
        contactPO.doneButton.click();
        expect((menuListPO.contactLink).isDisplayed());

    }

    this.contactCancelButtonVerification = function () {

        var contactPO = new contactPageObj();
        var menuListPO = new menuListPageObj();
        menuListPO.contactLink.click();
        browser.sleep(2000);
        utilities.scrollTo(contactPO.buttonPanel);
        utilities.HighlightElement(contactPO.cancelButton);
        contactPO.cancelButton.click();
        expect((menuListPO.contactLink).isDisplayed());
    }

};
module.exports = new contactPage();