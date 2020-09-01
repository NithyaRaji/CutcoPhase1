var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var browserDetails = require('./browserDetails.js');
var productDetailsObj = require('../com.sirius.pageObjects/productDetailsPage_po.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('./utilities.js');
var productDetails = require('./productDetail.js');
var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');
var homePage = require('./homePage.js');
var addressPageObj = require('../com.sirius.pageObjects/addressesPage_po.js');
var paymentPageObj = require('../com.sirius.pageObjects/paymentPage_po.js');
var shippingPageObj = require('../com.sirius.pageObjects/shippingPage_po.js');
var testInputs = require('../com.sirius.testData/data.json');
var browseObj = require('../com.sirius.pageObjects/browseByCategory_po');
var path = require('path');

var EC = protractor.ExpectedConditions;
var waitTimeout = 400000;

let paymentPage = function () {

    this.promoBillingSaveUS = function () {
        var paymentPO = new paymentPageObj();
        var shoppingCartPO = new shoppingCartObj();
        utilities.HighlightElement(paymentPO.twoDayShippingMethod);
        paymentPO.twoDayShippingMethod.click();
        utilities.pageWaitSec(5);
        var save = element(by.id('btn_saveOrder_sp'));
        utilities.waitForElement(save);
        utilities.scrollTo(save);
        utilities.HighlightElement(save);
        save.click();
        utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
        shoppingCartPO.saveOrderReasonField.sendKeys('save order with adjustments');
        utilities.HighlightElement(paymentPO.saveOrderOverlayButton);
        paymentPO.saveOrderOverlayButton.click();
    }

    this.promoBillingSaveCA = function () {
        var paymentPO = new paymentPageObj();
        var shoppingCartPO = new shoppingCartObj();
        utilities.HighlightElement(paymentPO.expressShippingMethod);
        paymentPO.expressShippingMethod.click();
        utilities.pageWaitSec(5);
        var save = element(by.id('btn_saveOrder_sp'));
        utilities.waitForElement(save);
        utilities.scrollTo(save);
        utilities.HighlightElement(save);
        save.click();
        utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
        shoppingCartPO.saveOrderReasonField.sendKeys('save order with adjustments');
        utilities.HighlightElement(paymentPO.saveOrderOverlayButton);
        paymentPO.saveOrderOverlayButton.click();
    }


    this.verifyCADeliveryOptions = function () {
        expect(element(by.id('radios_shippingMethod_REG')));
        expect(element(by.id('radios_shippingMethod_1DY')));
    }

    this.verifyOleanDeliveryOptions = function () {
        expect(element(by.id('radios_shippingMethod_REG')));
        expect(element(by.id('radios_shippingMethod_2DY')));
        expect(element(by.id('radios_shippingMethod_1DY')));
    }

    this.verifyBrandingDeliveryOptions = function () {
        expect(element(by.id('radios_shippingMethod_7TT')));
        expect(element(by.id('radios_shippingMethod_7T')));
    }

    this.adjustTotalValue = function () {
        var paymentPagePO = new paymentPageObj();
        var orderTotalTextStore;
        paymentPagePO.orderTotalText.getText().then(function (text) {
            orderTotalTextStore = text.replace(/[^0-9\.]+/g, "");
        });
        if (browserDetails.executionName == 'iphone') {
            utilities.scrollTo(paymentPagePO.adjustTotalInputTextBoxiOS);
            var AdjustValue = 1;
            paymentPagePO.adjustTotalInputTextBoxiOS.sendKeys(AdjustValue).then(function () {
                utilities.waitUtilElementPresent(paymentPagePO.adjustTotalUpdateLink);
                utilities.HighlightElement(paymentPagePO.adjustTotalUpdateLink);
                paymentPagePO.adjustTotalUpdateLink.click();
                utilities.HighlightElement(paymentPagePO.paymentTotalAfterAdjustment);
            })
        } else {
            utilities.scrollTo(paymentPagePO.adjustTotalInputTextBox);
            var AdjustValue = 1;
            paymentPagePO.adjustTotalInputTextBox.sendKeys(AdjustValue).then(function () {
                utilities.waitUtilElementPresent(paymentPagePO.adjustTotalUpdateLink);
                utilities.HighlightElement(paymentPagePO.adjustTotalUpdateLink);
                paymentPagePO.adjustTotalUpdateLink.click();
                utilities.HighlightElement(paymentPagePO.paymentTotalAfterAdjustment);
            })
        }

        var paymentTotalAfterAdjustmentStore;
        utilities.waitUtilElementPresent(paymentPagePO.paymentTotalAfterAdjustment);
        utilities.HighlightElement(paymentPagePO.paymentTotalAfterAdjustment);
        paymentPagePO.paymentTotalAfterAdjustment.getText().then(function (text) {
            paymentTotalAfterAdjustmentStore = text.replace(/[^0-9\.]+/g, "");
            var orderTotalCheck = (orderTotalTextStore - paymentTotalAfterAdjustmentStore);
            utilities.log(" orderTotalCheck ", orderTotalCheck);
        });
    }

    this.VerifyMaxadjustTotalValueError = function () {
        var paymentPagePO = new paymentPageObj();
        var orderTotalTextStore;
        if (browserDetails.executionName == 'iphone') {
            utilities.waitForElement(paymentPagePO.adjustTotalInputTextBoxiOS, waitTimeout);
            var AdjustValue = 10000;
            paymentPagePO.adjustTotalInputTextBoxiOS.sendKeys(AdjustValue);
            browser.sleep(5000);

        } else {
            paymentPagePO.orderTotalText.getText().then(function (text) {
                orderTotalTextStore = text.replace(/[^0-9\.]+/g, "");
            });
            utilities.waitForElement(paymentPagePO.adjustTotalInputTextBox, waitTimeout);
            var AdjustValue = 10000;
            paymentPagePO.adjustTotalInputTextBox.sendKeys(AdjustValue);
        }
        utilities.HighlightElement(paymentPagePO.maxAdjustErrorCheck);
        reportInfo.log("Maximum adjustment error is getting displayed after entering the maximum amount in the adjust total text field");
    }

    this.checkAdjustTotalValue = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.HighlightElement(paymentPagePO.billingAddressSection);
        utilities.scrollTo(paymentPagePO.adjustTotalLinkCheckbox);
        utilities.HighlightElement(paymentPagePO.adjustTotalLinkCheckbox);
        browser.executeScript("document.getElementById('cb_adjustTotals_aot').click()");
        browser.sleep(2000);
    }

    this.uncheckAdjustTotalValue = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.scrollTo(paymentPagePO.billingAddressSection);
        utilities.waitForElement(paymentPagePO.billingAddressSection, waitTimeout);
        utilities.HighlightElement(paymentPagePO.billingAddressSection);
        utilities.scrollTo(paymentPagePO.adjustTotalLinkCheckbox);
        utilities.HighlightElement(paymentPagePO.adjustTotalLinkCheckbox);
        paymentPagePO.adjustTotalLinkCheckbox.click();
        if (!paymentPagePO.adjustTotalInputTextBox.isDisplayed) {
            utilities.log("Adjust total textbox not displayed");
        }
    }

    this.saveOrderBillingPage = function () {
        var paymentPagePO = new paymentPageObj();
        var shoppingCartPO = new shoppingCartObj();
        var homePagePO = new homePageObj();
        utilities.scrollTo(paymentPagePO.saveButton, waitTimeout);
        utilities.waitForElement(paymentPagePO.saveButton, waitTimeout);
        utilities.HighlightElement(paymentPagePO.saveButton);
        paymentPagePO.saveButton.click();
        utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
        shoppingCartPO.saveOrderReasonField.sendKeys('save order with adjustments');
        utilities.HighlightElement(paymentPagePO.saveOrderOverlayButton);
        paymentPagePO.saveOrderOverlayButton.click();
        utilities.waitUtilElementPresent(homePagePO.pendingOrderHeader);
        utilities.HighlightElement(homePagePO.pendingOrderHeader);
        homePagePO.pendingOrderHeader.click();
        utilities.waitUtilElementPresent(homePagePO.comments);
        utilities.waitUtilElementPresent(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.comments);
    }

    this.verifyAdjustTotal = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.scrollTo(paymentPagePO.billingAddressSection);
        utilities.waitForElement(paymentPagePO.billingAddressSection, waitTimeout);
        utilities.HighlightElement(paymentPagePO.billingAddressSection);
        utilities.scrollTo(paymentPagePO.adjustTotalLinkCheckbox);
        utilities.HighlightElement(paymentPagePO.adjustTotalLinkCheckbox);
    }

    this.PlaceOrderButton = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.scrollTo(paymentPagePO.placeOrderButton);
        utilities.waitUtilElementPresent(paymentPagePO.placeOrderButton, waitTimeout);
        utilities.HighlightElement(paymentPagePO.placeOrderButton);
        // paymentPagePO.placeOrderButton.click();
        browser.executeScript("document.getElementById('btn_placeOrder').click()");
        utilities.pageWaitSec(8);
        utilities.waitUtilElementPresent(paymentPagePO.orderInfo, waitTimeout);
        utilities.HighlightElement(paymentPagePO.orderInfo);
        // utilities.waitForElement(paymentPagePO.imDoneButton, waitTimeout);
        browser.sleep(9000);
        utilities.scrollTo(paymentPagePO.imDoneButton);
    }


    this.PlaceOrderButtonCheckout = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.scrollTo(paymentPagePO.placeOrderButton);
        utilities.waitUtilElementPresent(paymentPagePO.placeOrderButton, waitTimeout);
        utilities.HighlightElement(paymentPagePO.placeOrderButton);
        paymentPagePO.placeOrderButton.click();
        utilities.waitUtilElementPresent(paymentPagePO.orderInfo, waitTimeout);
        utilities.HighlightElement(paymentPagePO.orderInfo);
        utilities.waitForElement(paymentPagePO.imDoneButton, waitTimeout);
        utilities.scrollTo(paymentPagePO.imDoneButton);
    }

    this.PlaceOrderButtonEventHandleThis = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.scrollTo(paymentPagePO.customerNotPresentCheckbox);
        utilities.HighlightElement(paymentPagePO.customerNotPresentCheckbox);
        paymentPagePO.customerNotPresentCheckbox.click();

        utilities.HighlightElement(paymentPagePO.placeOrderButton);
        utilities.click(paymentPagePO.placeOrderButton);
        browser.sleep(7000);
        paymentPagePO.eventHandleThis.isPresent().then(function (result) {
            utilities.log("paymentPagePO.eventHandleThis found ", result);
            if (result) {
                //console.log("selecting let event handle this");
                utilities.waitUtilElementPresent(paymentPagePO.eventHandleThis, waitTimeout);
                utilities.HighlightElement(paymentPagePO.eventHandleThis);
                paymentPagePO.eventHandleThis.click();
            }
        });

        utilities.waitUtilElementPresent(paymentPagePO.orderConfirmationMessage, waitTimeout);
        utilities.HighlightElement(paymentPagePO.orderConfirmationMessage);

    }

    this.PlaceOrderButtonEventHandleThis1 = function () {
        var paymentPagePO = new paymentPageObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.sleep(3000);
            utilities.scrollTo(paymentPagePO.placeOrderButton);
            utilities.waitUtilElementPresent(paymentPagePO.placeOrderButton, waitTimeout);
            utilities.waitUtilElementPresent(paymentPagePO.placeOrderButton, waitTimeout);
            reportInfo.log("Customer Signature Section is loaded completely");
        }

        utilities.HighlightElement(paymentPagePO.placeOrderButton);
        utilities.click(paymentPagePO.placeOrderButton);
        browser.sleep(7000);
        paymentPagePO.eventHandleThis.isPresent().then(function (result) {
            utilities.log("paymentPagePO.eventHandleThis found ", result);
            if (result) {
                // console.log("selecting let event handle this");
                utilities.waitUtilElementPresent(paymentPagePO.eventHandleThis, waitTimeout);
                utilities.HighlightElement(paymentPagePO.eventHandleThis);
                paymentPagePO.eventHandleThis.click();
            }
        });

        utilities.waitUtilElementPresent(paymentPagePO.orderConfirmationMessage, waitTimeout);
        utilities.HighlightElement(paymentPagePO.orderConfirmationMessage);

    }

    this.imdoneButtonClick = function () {
        var paymentPagePO = new paymentPageObj();
        var productDetailsPO = new productDetailsObj();
        var browsePO = new browseObj();

        utilities.waitForElement(paymentPagePO.imDoneButton, waitTimeout);
        utilities.scrollTo(paymentPagePO.imDoneButton);
        utilities.HighlightElement(paymentPagePO.imDoneButton);
        browser.executeScript(imdonebuttonclick);

        utilities.waitUtilElementPresent(browsePO.productName, waitTimeout);
        utilities.HighlightElement(browsePO.productName);
    }

    this.imdoneButtonClickAdmin = function () {
        var paymentPagePO = new paymentPageObj();
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(paymentPagePO.imDoneButton, waitTimeout);

        utilities.scrollTo(paymentPagePO.imDoneButton);
        utilities.HighlightElement(paymentPagePO.imDoneButton);
        browser.executeScript(imdonebuttonclick);
        utilities.waitUtilElementPresent(shoppingCartPO.noItemsInCartMessage, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.noItemsInCartMessage);
    }


    this.cardDetails = function () {
        var paymentPagePO = new paymentPageObj();

        utilities.waitForElement(paymentPagePO.billingAddressSection, waitTimeout);


        utilities.scrollTo(paymentPagePO.orderTotalText);
        utilities.scrollTo(paymentPagePO.cardDetailsNumberTextbox);
        utilities.HighlightElement(paymentPagePO.cardDetailsNumberTextbox);
        paymentPagePO.cardDetailsNumberTextbox.sendKeys(testInputs.MasterCard.cardDetail);
        utilities.waitUtilElementPresent(paymentPagePO.cardDetailsMonthTextbox, waitTimeout);

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript("document.getElementById('input_expDate_pd').value='05/2023'");

            //Select customer signature
            // browser.executeScript(selectCustomerNotPresentInSignature);
            utilities.scrollTo(paymentPagePO.customerNotPresentCheckbox);
            utilities.HighlightElement(paymentPagePO.customerNotPresentCheckbox);
            paymentPagePO.customerNotPresentCheckbox.click();
            utilities.waitUtilElementPresent(paymentPagePO.placeOrderButton, waitTimeout);
        } else {
            utilities.waitUtilElementPresent(paymentPagePO.cardDetailsMonthTextbox, waitTimeout);
            utilities.scrollTo(paymentPagePO.cardDetailsMonthTextbox);
            paymentPagePO.cardDetailsMonthTextbox.sendKeys(testInputs.MasterCard.CardMonths);
            utilities.pageWait(5000);
            utilities.waitForElement(paymentPagePO.cardDetailsMonthTextbox, waitTimeout);
            utilities.HighlightElement(paymentPagePO.cardDetailsMonthTextbox);
            paymentPagePO.cardDetailsMonthTextbox.sendKeys(testInputs.MasterCard.CardYear);
            //browser.executeScript(selectCustomerNotPresentInSignature);
            utilities.scrollTo(paymentPagePO.customerNotPresentCheckbox);
            utilities.HighlightElement(paymentPagePO.customerNotPresentCheckbox);
            paymentPagePO.customerNotPresentCheckbox.click();
            browser.sleep(3000);
            utilities.scrollTo(paymentPagePO.placeOrderButton);
            utilities.waitUtilElementPresent(paymentPagePO.placeOrderButton, waitTimeout);
        }
    }

    this.cardDetailsCheckout = function (testInputs) {
        var paymentPagePO = new paymentPageObj();
        var cardDetails = testInputs;
        browser.sleep(5000);
        browser.waitForAngularEnabled(false);
        utilities.scrollTo(paymentPagePO.customerNotPresentCheckbox);
        browser.switchTo().frame(element(by.id("braintree-hosted-field-number")).getWebElement());
        browser.sleep(5000);
        utilities.HighlightElement(paymentPagePO.cardDetailsNumberTextbox)
        paymentPagePO.cardDetailsNumberTextbox.sendKeys(cardDetails.cardDetail);
        browser.switchTo().defaultContent();
        utilities.pageWait(5000);
        browser.switchTo().frame(element(by.id("braintree-hosted-field-cvv")).getWebElement());
        utilities.HighlightElement(paymentPagePO.cvvTextbox)
        paymentPagePO.cvvTextbox.sendKeys("123");
        browser.switchTo().defaultContent();
        browser.switchTo().frame(element(by.id("braintree-hosted-field-expirationMonth")).getWebElement());
        utilities.pageWait(5000);
        browser.sleep(15000);
        paymentPagePO.expMonth.click();
        browser.switchTo().defaultContent();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitForElement(paymentPagePO.expyearMobile);
            utilities.HighlightElement(paymentPagePO.expyearMobile);
            paymentPagePO.expyearMobile.click();
            utilities.pageWaitSec(5);
            utilities.HighlightElement(paymentPagePO.expyearMobileOK);
            paymentPagePO.expyearMobileOK.click();
        }
        else {
            browser.switchTo().frame(element(by.id("braintree-hosted-field-expirationYear")).getWebElement());
            utilities.waitForElement(paymentPagePO.year);
            utilities.HighlightElement(paymentPagePO.year);
            paymentPagePO.expyear.click();
            utilities.pageWaitSec(5);
            browser.switchTo().defaultContent();
        }

        utilities.scrollTo(paymentPagePO.customerNotPresentCheckbox);
        utilities.HighlightElement(paymentPagePO.customerNotPresentCheckbox);
        paymentPagePO.customerNotPresentCheckbox.click();
    }

    this.cardDetailsCheckout1 = function (testInputs) {
        var paymentPagePO = new paymentPageObj();
        var cardDetails = testInputs;
        // browser.sleep(3000);
        // utilities.waitForElement(paymentPagePO.cardDetailsNumberTextbox, waitTimeout);
        // utilities.scrollTo(paymentPagePO.cardDetailsNumberTextbox);
        // utilities.waitForElement(paymentPagePO.cardDetailsNumberTextbox, waitTimeout);
        // utilities.HighlightElement(paymentPagePO.cardDetailsNumberTextbox);
        // paymentPagePO.cardDetailsNumberTextbox.sendKeys(cardDetails.cardDetail);
        // utilities.pageWait(5000);
        // utilities.HighlightElement(paymentPagePO.year);
        // paymentPagePO.year.click();
        // utilities.waitForElement(paymentPagePO.expyear);
        // utilities.HighlightElement(paymentPagePO.expyear);
        // paymentPagePO.expyear.click();
        // utilities.pageWaitSec(5);
        browser.sleep(5000);
        browser.waitForAngularEnabled(false);
        utilities.scrollTo(paymentPagePO.customerNotPresentCheckbox);
        browser.switchTo().frame(element(by.id("braintree-hosted-field-number")).getWebElement());
        browser.sleep(5000);
        utilities.HighlightElement(paymentPagePO.cardDetailsNumberTextbox)
        paymentPagePO.cardDetailsNumberTextbox.sendKeys(cardDetails.cardDetail);
        browser.switchTo().defaultContent();
        utilities.pageWait(5000);
        browser.switchTo().frame(element(by.id("braintree-hosted-field-cvv")).getWebElement());
        utilities.HighlightElement(paymentPagePO.cvvTextbox)
        paymentPagePO.cvvTextbox.sendKeys("123");
        browser.switchTo().defaultContent();
        browser.switchTo().frame(element(by.id("braintree-hosted-field-expirationMonth")).getWebElement());
        utilities.pageWait(5000);
        browser.sleep(15000);
        paymentPagePO.expMonth.click();
        browser.switchTo().defaultContent();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitForElement(paymentPagePO.expyearMobile);
            utilities.HighlightElement(paymentPagePO.expyearMobile);
            paymentPagePO.expyearMobile.click();
            utilities.pageWaitSec(5);
            utilities.HighlightElement(paymentPagePO.expyearMobileOK);
            paymentPagePO.expyearMobileOK.click();
        }
        else {
            browser.switchTo().frame(element(by.id("braintree-hosted-field-expirationYear")).getWebElement());
            utilities.waitForElement(paymentPagePO.year);
            utilities.HighlightElement(paymentPagePO.year);
            paymentPagePO.expyear.click();
            utilities.pageWaitSec(5);
            browser.switchTo().defaultContent();
        }


    }

    this.starCardDetails = function (cardNumber, AuthDate, code, amount) {
        var paymentPagePO = new paymentPageObj();
        // utilities.waitUtilElementPresent(paymentPagePO.checkoutProgressPlaceOrderPage, waitTimeout);
        utilities.scrollTo(paymentPagePO.paymentDetailsHeader);
        utilities.waitUtilElementPresent(paymentPagePO.paymentDetailsHeader, waitTimeout);
        utilities.HighlightElement(paymentPagePO.paymentDetailsHeader);
        utilities.scrollTo(paymentPagePO.starCardNumber);
        utilities.click(paymentPagePO.starCardNumber);
        paymentPagePO.starCardNumber.sendKeys(cardNumber);
        browser.sleep(3000);
        utilities.waitUtilElementPresent(paymentPagePO.authorizationDate, waitTimeout);
        utilities.scrollTo(paymentPagePO.authorizationDate);
        utilities.click(paymentPagePO.authorizationDate);
        paymentPagePO.authorizationDate.sendKeys(AuthDate);
        utilities.waitUtilElementPresent(paymentPagePO.authorizationCode, waitTimeout);
        utilities.scrollTo(paymentPagePO.authorizationCode);
        utilities.click(paymentPagePO.authorizationCode);
        paymentPagePO.authorizationCode.sendKeys(code);
        utilities.waitUtilElementPresent(paymentPagePO.authorizationAmount, waitTimeout);
        utilities.scrollTo(paymentPagePO.authorizationAmount);
        utilities.click(paymentPagePO.authorizationAmount);
        paymentPagePO.authorizationAmount.sendKeys(amount);
        browser.sleep(3000);
        // if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
        //Select customer signature
        //browser.executeScript(selectCustomerNotPresentInSignature);
        // utilities.scrollTo(paymentPagePO.customerNotPresentCheckbox);
        // utilities.HighlightElement(paymentPagePO.customerNotPresentCheckbox);
        // paymentPagePO.customerNotPresentCheckbox.click();
        browser.sleep(3000);
        utilities.waitUtilElementPresent(paymentPagePO.placeOrderButton, waitTimeout);
        // }
    }

    this.customerNotPresentClick = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.scrollTo(paymentPagePO.customerNotPresentCheckbox);
        utilities.HighlightElement(paymentPagePO.customerNotPresentCheckbox);
        paymentPagePO.customerNotPresentCheckbox.click();
    }



    this.achCardDetails = function () {
        var paymentPagePO = new paymentPageObj();

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.sleep(5000);
            utilities.HighlightElement(paymentPagePO.specialInstructionsCheckbox);
            utilities.scrollTo(paymentPagePO.paymentDetailsHeader);
            utilities.HighlightElement(paymentPagePO.paymentDetailsHeader);
            utilities.scrollTo(paymentPagePO.routingNumber);
            paymentPagePO.routingNumber.click();
            paymentPagePO.routingNumber.sendKeys('021000021');
            paymentPagePO.accountNumber.click();
            paymentPagePO.accountNumber.sendKeys('12345');
        } else {
            utilities.HighlightElement(paymentPagePO.specialInstructionsCheckbox);
            utilities.scrollTo(paymentPagePO.paymentDetailsHeader);
            utilities.HighlightElement(paymentPagePO.paymentDetailsHeader);
            utilities.scrollTo(paymentPagePO.routingNumber);
            browser.actions().mouseMove(paymentPagePO.routingNumber).click().perform();
            paymentPagePO.routingNumber.sendKeys('021000021');
            browser.actions().mouseMove(paymentPagePO.accountNumber).click().perform();
            paymentPagePO.accountNumber.sendKeys('12345');
        }

    }


    this.paperCheckDetails = function (checknumber) {
        var paymentPagePO = new paymentPageObj();
        utilities.HighlightElement(paymentPagePO.specialInstructionsCheckbox);
        utilities.scrollTo(paymentPagePO.paymentDetailsHeader);
        utilities.HighlightElement(paymentPagePO.paymentDetailsHeader);
        utilities.waitUtilElementPresent(paymentPagePO.checkNumber, waitTimeout);
        utilities.scrollTo(paymentPagePO.checkNumber);
        paymentPagePO.checkNumber.sendKeys(checknumber);
        browser.sleep(4000);
        //  if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
        //Select customer signature
        // browser.executeScript(selectCustomerNotPresentInSignature);
        utilities.scrollTo(paymentPagePO.customerNotPresentCheckbox);
        utilities.HighlightElement(paymentPagePO.customerNotPresentCheckbox);
        paymentPagePO.customerNotPresentCheckbox.click();
        utilities.waitUtilElementPresent(paymentPagePO.placeOrderButton, waitTimeout);
        // }
    }

    this.viewOrderReceipt = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.myReceipt, waitTimeout);
        utilities.HighlightElement(paymentPagePO.myReceipt);
        paymentPagePO.myReceipt.click();
        utilities.pageWait();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            utilities.pageWait();
            browser.getCurrentUrl().then(function (url) {
                utilities.log("**~~ current url ~~** ", url);
            })
        })
    }

    this.verifyOrderReceipt = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitUtilElementPresent(paymentPagePO.orderNumber, waitTimeout);
        utilities.HighlightElement(paymentPagePO.orderNumber);
        utilities.HighlightElement(paymentPagePO.orderDate);
        utilities.HighlightElement(paymentPagePO.configureEmailButton);
        utilities.HighlightElement(paymentPagePO.configureCustomerButton);
        utilities.HighlightElement(paymentPagePO.imDoneButton);
    }

    this.AdminAccountverifyOrderReceipt = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.orderNumber, waitTimeout);
        utilities.HighlightElement(paymentPagePO.orderNumber);
        utilities.HighlightElement(paymentPagePO.orderDate);
        utilities.HighlightElement(paymentPagePO.configureEmailButton);
        utilities.HighlightElement(paymentPagePO.configureCustomerButton);
        utilities.HighlightElement(paymentPagePO.imDoneButton);
        utilities.HighlightElement(paymentPagePO.adminWarningMsg);
    }

    async function selectCustomerNotPresentInSignature() {
        const customerNotPresent = document.getElementsByTagName('ion-checkbox')[2];
        customerNotPresent.shadowRoot.querySelector('button').click();
        const customerNotPresent1 = document.getElementsByTagName('ion-checkbox')[3];
        customerNotPresent1.shadowRoot.querySelector('button').click();
    }

    this.selectNextDayShipping = function () {
        var paymentPagePO = new paymentPageObj();

        paymentPagePO.twoDayShippingMethod.isPresent().then(function (result) {
            utilities.log("paymentPagePO.twoDayShippingMethod found ", result);
            if (result) {
                // console.log("selecting 2DY shipping");
                utilities.click(paymentPagePO.twoDayShippingMethod);
            }
        });
        paymentPagePO.expressShippingMethod.isPresent().then(function (result) {
            utilities.log("paymentPagePO.expressShippingMethod found ", result);
            if (result) {
                // console.log("selecting Next DY shipping");
                if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
                    paymentPagePO.expressShippingMethod.click();
                } else {
                    utilities.click(paymentPagePO.expressShippingMethod);
                }
            }
        });
        paymentPagePO.handDeliveredMethod.isPresent().then(function (result) {
            utilities.log("paymentPagePO.handDeliveredMethod found ", result);
            if (result) {
                // console.log("selecting Next DY shipping");
                utilities.click(paymentPagePO.handDeliveredMethod);
            }
        });
        //console.log("selecting GND shipping");
    }

    this.selectBeforeChristmas = function () {
        var paymentPagePO = new paymentPageObj();
        browser.executeScript(selectChristmas);

        utilities.waitUtilElementPresent(paymentPagePO.confirmShippingSelection, waitTimeout);
        utilities.HighlightElement(paymentPagePO.confirmShippingSelection);
        utilities.waitForElement(paymentPagePO.continueButton, waitTimeout);
        utilities.HighlightElement(paymentPagePO.continueButton);
        paymentPagePO.continueButton.click();

        utilities.waitUtilElementPresent(paymentPagePO.paymentMethodHeader, waitTimeout);
        utilities.HighlightElement(paymentPagePO.paymentMethodHeader);

    }


    this.checkHandDeliveredIsSelected = function () {
        var paymentPagePO = new paymentPageObj();

        utilities.HighlightElement(paymentPagePO.shippingMethodHeader);
        paymentPagePO.handDeliveredMethod.isPresent().then(function (result) {
            utilities.log("paymentPagePO.handDeliveredMethod found ", result);
            if (result) {
                // console.log("selecting handDeliveredMethod shipping");

            }
        });
        utilities.pageWaitSec(10);

    }


    this.selectCreditCard = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitUtilElementPresent(paymentPagePO.paymentMethodHeader, waitTimeout);
        utilities.HighlightElement(paymentPagePO.paymentMethodHeader);
        utilities.waitForElement(paymentPagePO.creditCardPayment);
        paymentPagePO.creditCardPayment.click();
    }

    this.selectACH = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitUtilElementPresent(paymentPagePO.paymentMethodHeader, waitTimeout);
        utilities.HighlightElement(paymentPagePO.paymentMethodHeader);
        browser.sleep(4000);
        if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript(paymentACHOption);
        }
        else {
            paymentPagePO.achCard.click();
            browser.sleep(3000);
        }
    }

    this.selectPaperCheckMOCard = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitUtilElementPresent(paymentPagePO.paymentMethodHeader, waitTimeout);
        if (browserDetails.executionName == 'ipad') {
            browser.executeScript("document.getElementsByClassName('payment-method-radio')[1].click();");
            browser.sleep(5000);
            utilities.HighlightElement(paymentPagePO.paperChequePayment);
        } else {
            paymentPagePO.paperChequePayment.click();
            utilities.HighlightElement(paymentPagePO.paperChequePayment);
        }
    }

    this.selectStarCard = function () {
        var paymentPagePO = new paymentPageObj();

        utilities.waitUtilElementPresent(paymentPagePO.paymentMethodHeader, waitTimeout);
        utilities.HighlightElement(paymentPagePO.paymentMethodHeader);
        browser.sleep(10000);
        utilities.scrollTo(paymentPagePO.militaryStarCard);
        utilities.HighlightElement(paymentPagePO.militaryStarCard);
        paymentPagePO.militaryStarCard.click();
        browser.sleep(2000);
    }

    this.selectTaxExemptBoth = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.exemptBothTaxable);
        utilities.HighlightElement(paymentPagePO.exemptBothTaxable);
        paymentPagePO.exemptBothTaxable.click();
        reportInfo.log("entering certificate number");
        //console.log("entering certificate number");
        utilities.waitForElement(paymentPagePO.certificateNumber);
        utilities.scrollTo(paymentPagePO.certificateNumber)
        utilities.HighlightElement(paymentPagePO.certificateNumber);
        browser.sleep(3000);
        paymentPagePO.certificateNumber.click();
        browser.sleep(3000);
        // paymentPagePO.certificateNumber.sendKeys('1234567890');
        browser.executeScript("document.getElementById('input_taxExemptNumber_sp').value = '1234567890';");
    }

    this.selectTaxExemptCheckout = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.taxExempt);
        utilities.HighlightElement(paymentPagePO.taxExempt);
        paymentPagePO.taxExempt.click();
        browser.sleep(2000);
        reportInfo.log("entering certificate number");
        utilities.waitUtilElementPresent(paymentPagePO.certificateNumber);
        utilities.scrollTo(paymentPagePO.certificateNumber)
        utilities.HighlightElement(paymentPagePO.certificateNumber);
        browser.sleep(3000);
        browser.executeScript("document.getElementById('input_taxExemptNumber_sp').value = '123456789';");
        //paymentPagePO.certificateNumber.sendKeys('1234567890');
        browser.sleep(3000);

    }

    this.selectTwoDayShipping = function () {
        var paymentPO = new paymentPageObj();
        utilities.waitForElement(paymentPO.twoDayShippingMethod);
        utilities.HighlightElement(paymentPO.twoDayShippingMethod);
        paymentPO.twoDayShippingMethod.click();
    }


    this.selectTaxExempt = function () {
        var paymentPagePO = new paymentPageObj();
        var paymentPagePO = new paymentPageObj();
        browser.executeScript("arguments[0].click();", paymentPagePO.exemptBothTaxable);
        reportInfo.log("entering certificate number");
        //console.log("entering certificate number");
        utilities.waitForElement(paymentPagePO.certificateNumber);
        utilities.scrollTo(paymentPagePO.certificateNumber)
        utilities.HighlightElement(paymentPagePO.certificateNumber);
        // paymentPagePO.certificateNumber.sendKeys('TestingCertificateNumber');
        browser.executeScript("document.getElementById('input_taxExemptNumber_sp').value = '1234567890';");
    }

    this.selectTaxExemptPST = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.exemptPstTaxable);
        utilities.HighlightElement(paymentPagePO.exemptPstTaxable);
        paymentPagePO.exemptPstTaxable.click();
        reportInfo.log("entering certificate number");
        // console.log("entering certificate number");
        utilities.waitForElement(paymentPagePO.certificateNumber);
        utilities.scrollTo(paymentPagePO.certificateNumber)
        utilities.HighlightElement(paymentPagePO.certificateNumber);
        // paymentPagePO.certificateNumber.sendKeys('TestingCertificateNumber');
        browser.executeScript("document.getElementById('input_taxExemptNumber_sp').value = '1234567890';");
    }

    this.selectTaxExemptGST = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.exemptGstTaxable);
        utilities.HighlightElement(paymentPagePO.exemptGstTaxable);
        paymentPagePO.exemptGstTaxable.click();
        reportInfo.log("entering certificate number");
        //console.log("entering certificate number");
        utilities.waitForElement(paymentPagePO.certificateNumber);
        utilities.scrollTo(paymentPagePO.certificateNumber)
        utilities.HighlightElement(paymentPagePO.certificateNumber);
        // paymentPagePO.certificateNumber.sendKeys('TestingCertificateNumber');
        browser.executeScript("document.getElementById('input_taxExemptNumber_sp').value = '1234567890';");
    }

    this.selectPaymentoption = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.onePaymentOption, waitTimeout);
        utilities.scrollTo(paymentPagePO.onePaymentOption);
        browser.sleep(4000);
        paymentPagePO.multiplePaymentOption.isPresent().then(function (result) {
            if (result) {
                utilities.waitUtilElementPresent(paymentPagePO.multiplePaymentOption, waitTimeout);
                utilities.scrollTo(paymentPagePO.multiplePaymentOption);
                utilities.HighlightElement(paymentPagePO.multiplePaymentOption);
                utilities.click(paymentPagePO.multiplePaymentOption);
                browser.executeScript("arguments[0].click();", paymentPagePO.multiplePaymentOption);
            } else {
                utilities.scrollTo(paymentPagePO.onePaymentOption);
                utilities.HighlightElement(paymentPagePO.onePaymentOption);
                // paymentPagePO.onePaymentOption.click();
            }
        });
    }


    this.clickNextButton = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.paymentNextButton);
        utilities.scrollTo(paymentPagePO.paymentNextButton);
        utilities.HighlightElement(paymentPagePO.paymentNextButton);
        utilities.click(paymentPagePO.paymentNextButton);
        browser.sleep(10000);
        paymentPagePO.taxFailedHeader.isPresent().then(function (result) {
            utilities.log("paymentPagePO.taxFailedHeader found ", result);
            if (result) {
                paymentPagePO.TaxField.sendKeys('5.00');
                paymentPagePO.confirmTaxField.sendKeys('5.00');
                utilities.HighlightElement(paymentPagePO.saveButton);
                paymentPagePO.saveButton.click();

            }
        })
        // utilities.waitUtilElementPresent(paymentPagePO.checkoutProgressPlaceOrderPage, waitTimeout);
        browser.sleep(10000);
    }

    this.clickNextButton1 = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitUtilElementPresent(paymentPagePO.paymentProgressHeader, waitTimeout);
        utilities.HighlightElement(paymentPagePO.paymentProgressHeader);
        utilities.scrollTo(paymentPagePO.paymentNextButton);
        utilities.HighlightElement(paymentPagePO.paymentNextButton);
        utilities.click(paymentPagePO.paymentNextButton);
        // utilities.waitUtilElementPresent(paymentPagePO.checkoutProgressPlaceOrderPage, waitTimeout);
        browser.sleep(10000);
    }

    this.uploadImg = function () {

        // var remote = require('../node_modules/protractor/node_modules/selenium-webdriver/remote');
        // browser.setFileDetector(new remote.FileDetector());

        var fileElem = element(by.css('input[type="file"]'));
        var abspath = path.resolve(__dirname, "../com.sirius.library/img.png")

        utilities.waitForElement(fileElem);
        utilities.scrollTo(fileElem);
        fileElem.sendKeys(abspath);

    }

    this.PlaceOrderButtonClick = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.scrollTo(paymentPagePO.placeOrderButton);
        utilities.waitUtilElementPresent(paymentPagePO.placeOrderButton, waitTimeout);
        utilities.HighlightElement(paymentPagePO.placeOrderButton);
        paymentPagePO.placeOrderButton.click();
        utilities.pageWaitSec(5);
    }

    this.imdoneButtonClick1 = function () {
        var paymentPagePO = new paymentPageObj();
        var productDetailsPO = new productDetailsObj();
        var browsePO = new browseObj();

        utilities.waitForElement(paymentPagePO.imDoneButton, waitTimeout);
        utilities.scrollTo(paymentPagePO.imDoneButton);
        utilities.HighlightElement(paymentPagePO.imDoneButton);
        browser.executeScript(imdonebuttonclick);

    }

    this.removeImg = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.removeImg);
        utilities.scrollTo(paymentPagePO.removeImg);
        utilities.HighlightElement(paymentPagePO.removeImg);
        paymentPagePO.removeImg.click();
    }

    this.verifyStarCardImgField = function () {
        var paymentPagePO = new paymentPageObj();
        expect(element(by.xpath("//ion-label[contains(text(),'Receipt Image')]")).isPresent());
        expect(paymentPagePO.removeImg.isPresent());
    }

    this.verifyStarCardDetails = function (card, date, authCode, amount) {
        var paymentPagePO = new paymentPageObj();
        utilities.scrollTo(paymentPagePO.starCardNumber);
        expect(paymentPagePO.starCardNumber.getAttribute('value')).toEqual(card);
        expect(paymentPagePO.authorizationDate.getAttribute('value')).toEqual(date);
        expect(paymentPagePO.authorizationCode.getAttribute('value')).toEqual(authCode);
        expect(paymentPagePO.authorizationAmount.getAttribute('value')).toEqual(amount + '.00');

    }

    /*
     *  Tax Exempt field reusables
     */

    this.verifyTaxExemptFields = function () {
        var paymentPagePO = new paymentPageObj();
        expect(paymentPagePO.taxImage1.isPresent());
        expect(paymentPagePO.taxImage2.isPresent());
        expect(paymentPagePO.taxImageSel1.isPresent());
        expect(paymentPagePO.taxImageSel2.isPresent());
    }

    this.uploadTaxImg = function () {

        // var remote = require('../node_modules/protractor/node_modules/selenium-webdriver/remote');
        // browser.setFileDetector(new remote.FileDetector());
        var paymentPagePO = new paymentPageObj();
        // var fileElem = element(by.css('input[type="file"]'));
        var abspath = path.resolve(__dirname, "../com.sirius.library/img.png")

        utilities.waitForElement(paymentPagePO.taxImage1);
        utilities.scrollTo(paymentPagePO.taxImage1);
        utilities.HighlightElement(paymentPagePO.taxImage1);
        paymentPagePO.taxImage1.sendKeys(abspath);
        paymentPagePO.taxImage2.sendKeys(abspath);

    }

    this.removeTaxImg = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.taxImageRem1);
        utilities.scrollTo(paymentPagePO.taxImageRem1);
        utilities.HighlightElement(paymentPagePO.taxImageRem1);
        paymentPagePO.taxImageRem1.click();
        utilities.HighlightElement(paymentPagePO.taxImageRem2);
        paymentPagePO.taxImageRem2.click();

        utilities.HighlightElement(paymentPagePO.taxImageRem1);
        utilities.HighlightElement(paymentPagePO.taxImageRem2);
    }

    this.selectYourCommission = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(paymentPagePO.yourCommission);
        utilities.scrollTo(paymentPagePO.yourCommission);
        utilities.HighlightElement(paymentPagePO.yourCommission);
        paymentPagePO.yourCommission.click();
    }

    this.SignAuthorize = function () {
        var paymentPagePO = new paymentPageObj();
        utilities.HighlightElement(paymentPagePO.signature);
        paymentPagePO.signature.click();

        utilities.waitForElement(paymentPagePO.signPad);
        utilities.scrollTo(paymentPagePO.signPad);
        utilities.HighlightElement(paymentPagePO.signPad);
        browser.actions().mouseMove(paymentPagePO.signPad).mouseDown().mouseMove(paymentPagePO.signPad, { x: 5, y: 5 }).mouseMove(paymentPagePO.signPad, { x: 2, y: 2 }).mouseUp().perform();

        utilities.HighlightElement(paymentPagePO.authorizeCheckBox);
        paymentPagePO.authorizeCheckBox.click();

        utilities.HighlightElement(paymentPagePO.signAccept);
        paymentPagePO.signAccept.click();
    }

    async function selectChristmas() {
        const christmascheckbox = document.getElementById('cb_beforeChristmas');
        christmascheckbox.click();
    }

    async function imdonebuttonclick() {
        var gotItButton = document.getElementById('btn_done_ocp')
        gotItButton.shadowRoot.querySelector('button').click();
    }

    function selectAdjustTotalCheckbox() {
        var adjustTotalCheckbox = document.getElementById('cb_adjustTotals_aot')
        adjustTotalCheckbox.shadowRoot.querySelector('button').click();
    }

    async function placeorderclick() {
        var gotItButton = document.getElementById('btn_placeOrder')
        gotItButton.shadowRoot.querySelector('button').click();
    }

    function paymentACHOption() {
        var paymentMethods = document.getElementById('radio_paymentMethod_sp');
        var ACH_Options = paymentMethods.getElementsByTagName('ion-item');
        ACH_Options[2].getElementsByTagName('ion-radio')[0].shadowRoot.querySelector('button').click();
    }
}
module.exports = new paymentPage();