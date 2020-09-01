var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var browserDetails = require('./browserDetails.js');
var productDetailsObj = require('../com.sirius.pageObjects/productDetailsPage_po.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('./utilities.js');
var productDetails = require('./productDetail.js');
var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');
var homePage = require('./homePage.js');
var addressPageObj = require('../com.sirius.pageObjects/addressesPage_po.js');
var testInputs = require('../com.sirius.testData/data.json');
var shippingPageObj = require('../com.sirius.pageObjects/shippingPage_po.js');
var paymentPageObj = require('../com.sirius.pageObjects/paymentPage_po.js');

// const {
//     expect
// } = require("chai");
// const {
//     assert
// } = require("chai");
var EC = protractor.ExpectedConditions;
var waitTimeout = 40000;

let addressPage = function () {

    this.savebutton = function () {
        var addressPagePO = new addressPageObj();
        var paymentPO = new paymentPageObj();
        utilities.scrollTo(addressPagePO.saveButton);
        utilities.HighlightElement(addressPagePO.saveButton);
        addressPagePO.saveButton.click();

        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
        utilities.attachScreenshot();
        shoppingCartPO.saveOrderReasonField.sendKeys('save order with adjustments');
        utilities.HighlightElement(paymentPO.saveOrderOverlayButton);
        paymentPO.saveOrderOverlayButton.click();
    }

    this.verifyStandardization = function () {
        var addressPagePO = new addressPageObj();
        expect(element(by.xpath('//div[contains(text(),"Billing Address You Entered")]')).isDisplayed());

        utilities.waitForElement(addressPagePO.continueButton);
        utilities.HighlightElement(addressPagePO.continueButton);
        utilities.attachScreenshot();
        addressPagePO.continueButton.click();
        expect(element(by.xpath('//div[contains(text(),"Shipping Address You Entered")]')).isDisplayed());
    }

    this.billingAddress = function () {
        var addressPagePO = new addressPageObj();
        var homePagePO = new homePageObj();
        var store;
        homePagePO.profilePlace.getText().then(function (text) {
            store = text;
            utilities.log("**** place **** ", store);
        })

        utilities.waitUtilElementPresent(addressPagePO.billAddress1, waitTimeout);
        addressPagePO.customerType.isDisplayed().then(function () {
            addressPagePO.customerType.click();
            utilities.HighlightElement(addressPagePO.customerType);
            utilities.attachScreenshot();
            browser.executeScript("document.getElementsByClassName('alert-radio-button alert-tappable alert-radio ion-focusable sc-ion-alert-md')[0].click()");
            utilities.waitForElement(addressPagePO.billDropDownOk, waitTimeout);
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            addressPagePO.billDropDownOk.click();
            utilities.pageWait();
            utilities.log("Billing Address Firstname :", testInputs.USAddress.FirstName);
            utilities.waitUtilElementPresent(addressPagePO.billFirstName, waitTimeout);
            addressPagePO.billFirstName.sendKeys(testInputs.USAddress.FirstName);
            utilities.scrollTo(addressPagePO.billLastName);
            utilities.HighlightElement(addressPagePO.billFirstName);
            addressPagePO.billLastName.sendKeys(testInputs.USAddress.LastName);
            if (store.includes("US")) {
                utilities.waitForElement(addressPagePO.billAddress1);
                utilities.scrollTo(addressPagePO.billAddress1);
                addressPagePO.billAddress1.sendKeys(testInputs.USAddress.Address1);
                utilities.waitForElement(addressPagePO.billCity);
                addressPagePO.billCity.sendKeys(testInputs.USAddress.City);
                utilities.HighlightElement(addressPagePO.billStateDropDown);
                utilities.scrollTo(addressPagePO.billStateDropDown);
                utilities.waitForElement(addressPagePO.billStateDropDown);
                addressPagePO.billStateDropDown.click();
                browser.executeScript("document.getElementsByClassName('alert-radio-label sc-ion-alert-md')[11].click()");
                utilities.waitForElement(addressPagePO.billDropDownOk, waitTimeout);
                utilities.HighlightElement(addressPagePO.billDropDownOk);
                utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
                addressPagePO.billDropDownOk.click();
                utilities.pageWait();

                utilities.waitForElement(addressPagePO.billZipCode);
                utilities.scrollTo(addressPagePO.billZipCode);
                addressPagePO.billZipCode.sendKeys(testInputs.USAddress.ZipCode);
                utilities.HighlightElement(addressPagePO.billZipCode);
                utilities.attachScreenshot();
                addressPagePO.billPhoneNumber.sendKeys(testInputs.USAddress.Phone);
            } else {
                utilities.waitForElement(addressPagePO.billAddress1);
                utilities.scrollTo(addressPagePO.billAddress1);
                utilities.waitUtilElementPresent(addressPagePO.billAddress1);
                addressPagePO.billAddress1.sendKeys(testInputs.CAAddress.Address1);
                utilities.waitForElement(addressPagePO.billCity);
                utilities.scrollTo(addressPagePO.billCity);
                addressPagePO.billCity.sendKeys(testInputs.CAAddress.City);
                utilities.waitUtilElementPresent(addressPagePO.billStateDropDown);
                utilities.scrollTo(addressPagePO.billStateDropDown);
                addressPagePO.billStateDropDown.click();

                utilities.waitForElement(addressPagePO.billDropDownOk, waitTimeout);
                browser.executeScript("document.getElementsByClassName('alert-radio-label sc-ion-alert-md')[7].click()");
                utilities.waitForElement(addressPagePO.billDropDownOk, waitTimeout);
                addressPagePO.billDropDownOk.click();
                utilities.waitForElement(addressPagePO.billZipCode, waitTimeout);
                utilities.pageWaitSec(4);
                utilities.scrollTo(addressPagePO.billZipCode);
                addressPagePO.billZipCode.sendKeys(testInputs.CAAddress.ZipCode);
                utilities.waitForElement(addressPagePO.billPhoneNumber, waitTimeout);
                utilities.HighlightElement(addressPagePO.billPhoneNumber);
                utilities.attachScreenshot();
                utilities.scrollTo(addressPagePO.billPhoneNumber);
                addressPagePO.billPhoneNumber.sendKeys(testInputs.USAddress.Phone);
                utilities.waitForElement(addressPagePO.billPhoneNumber, waitTimeout);
            }
        });
    }


    this.billingAddressUS = function () {
        var addressPagePO = new addressPageObj();
       // utilities.waitUtilElementPresent(addressPagePO.customerType, waitTimeout);
        utilities.pageWaitSec(10);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            if(browserDetails.executionName == 'iphone'){
                browser.executeScript("document.getElementsByClassName('ionic-selectable-cover')[0].click();");
            }
            else {
                addressPagePO.customerType.click();
            }
            utilities.waitUtilElementPresent(addressPagePO.customerTypeNewMobile, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerTypeNewMobile);
            addressPagePO.customerTypeNewMobile.click();
            utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            addressPagePO.billDropDownOk.click();
        }
        else{
            utilities.waitForElement(addressPagePO.customerType, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerType);
            utilities.attachScreenshot();
            addressPagePO.customerType.click();
            utilities.waitUtilElementPresent(addressPagePO.customerTypeNew, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerTypeNew);
            addressPagePO.customerTypeNew.click();
            reportInfo.log("Customer Type is clicked in the addresses page");
        }
        utilities.scrollTo(addressPagePO.billFirstName);
        utilities.pageWaitSec(5);
        utilities.HighlightElement(addressPagePO.billFirstName);
        utilities.waitUtilElementPresent(addressPagePO.billFirstName, waitTimeout);
        addressPagePO.billFirstName.sendKeys(testInputs.USAddress.FirstName);
        reportInfo.log("Firstname value is entered in the billing address section");
        utilities.scrollTo(addressPagePO.billLastName);
        utilities.HighlightElement(addressPagePO.billLastName);
        utilities.attachScreenshot();
        addressPagePO.billLastName.sendKeys(testInputs.USAddress.LastName);
        reportInfo.log("Lastname value is entered in the billing address section");
        utilities.waitForElement(addressPagePO.billAddress1);
        utilities.scrollTo(addressPagePO.billAddress1);
        addressPagePO.billAddress1.sendKeys(testInputs.USAddress.Address1);
        utilities.waitUtilElementPresent(addressPagePO.billCity, waitTimeout);
        addressPagePO.billCity.sendKeys(testInputs.USAddress.City);
        reportInfo.log("City value is entered in the billing address section");
        utilities.pageWaitSec(10);
        utilities.HighlightElement(addressPagePO.billStateDropDown);
        utilities.scrollTo(addressPagePO.billStateDropDown);

        utilities.waitUtilElementPresent(addressPagePO.billZipCode, waitTimeout);
        reportInfo.log("Zipcode value is entered in the billing address section");
        utilities.HighlightElement(addressPagePO.billZipCode);
        utilities.waitUtilElementPresent(addressPagePO.billPhoneNumber, waitTimeout);
        utilities.pageWaitSec(5);
        addressPagePO.billPhoneNumber.sendKeys(testInputs.USAddress.Phone);
        addressPagePO.billZipCode.sendKeys(testInputs.USAddress.ZipCode);
        reportInfo.log("Phone number value is entered in the billing address section");
        utilities.waitUtilElementPresent(addressPagePO.billEmailLabel, waitTimeout);
    }

    this.billingAddressUSCheckOut = function (testAddress) {
        var addressPagePO = new addressPageObj();
        var homePagePO = new homePageObj();
        var Address = testAddress;
        utilities.pageWaitSec(10);
        if (addressPagePO.provideEventDetailFirst.isPresent()) {
            browser.executeScript("document.getElementsByClassName('native-textarea')[0].value ='test';");
        }
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            if(browserDetails.executionName == 'iphone'){
                browser.executeScript("document.getElementsByClassName('ionic-selectable-cover')[0].click();");
            }
            else {
                addressPagePO.customerType.click();
            }
            utilities.waitUtilElementPresent(addressPagePO.customerTypeNewMobile, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerTypeNewMobile);
            addressPagePO.customerTypeNewMobile.click();
            utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            addressPagePO.billDropDownOk.click();
        }
        else{
            utilities.waitUtilElementPresent(addressPagePO.customerType, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerType);
             // addressPagePO.customerType.click();
        reportInfo.log("Customer Type is clicked in the addresses page");
        utilities.HighlightElement(addressPagePO.customerType);
            utilities.waitUtilElementPresent(addressPagePO.customerTypeNew, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerTypeNew);
            addressPagePO.customerTypeNew.click();
        }
        utilities.waitUtilElementPresent(addressPagePO.customerType, waitTimeout);
        utilities.HighlightElement(addressPagePO.customerType);
        utilities.waitForElement(addressPagePO.billFirstName, waitTimeout);
        utilities.HighlightElement(addressPagePO.billFirstName);
        addressPagePO.billFirstName.sendKeys(testAddress.FirstName);
        reportInfo.log("Firstname value is entered in the billing address section");
        utilities.scrollTo(addressPagePO.billLastName);
        utilities.HighlightElement(addressPagePO.billLastName);
        utilities.attachScreenshot();
        addressPagePO.billLastName.sendKeys(testAddress.LastName);
        reportInfo.log("Lastname value is entered in the billing address section");
        utilities.waitForElement(addressPagePO.billAddress1);
        utilities.scrollTo(addressPagePO.billAddress1);
        addressPagePO.billAddress1.sendKeys(testAddress.Address1);
        utilities.waitForElement(addressPagePO.billCity, waitTimeout);
        addressPagePO.billCity.sendKeys(testAddress.City);
        reportInfo.log("City value is entered in the billing address section");

        utilities.waitForElement(addressPagePO.billZipCode, waitTimeout);
        reportInfo.log("Zipcode value is entered in the billing address section");
        utilities.HighlightElement(addressPagePO.billZipCode);
        utilities.waitForElement(addressPagePO.billPhoneNumber, waitTimeout);
        utilities.pageWaitSec(5);
        addressPagePO.billPhoneNumber.sendKeys(testAddress.Phone);
        addressPagePO.billZipCode.sendKeys(testAddress.ZipCode);
        reportInfo.log("Phone number value is entered in the billing address section");
        utilities.waitForElement(addressPagePO.billEmailLabel, waitTimeout);
        addressPagePO.billEmailLabel.click();

    }

    this.billingAddressCA = function () {
        var addressPagePO = new addressPageObj();
     

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            if(browserDetails.executionName == 'iphone'){
                browser.executeScript("document.getElementsByClassName('ionic-selectable-cover')[0].click();");
            }
            else {
                addressPagePO.customerType.click();
            }
            utilities.waitUtilElementPresent(addressPagePO.customerTypeNewMobile, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerTypeNewMobile);
            addressPagePO.customerTypeNewMobile.click();
            utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            addressPagePO.billDropDownOk.click();
        }
        else{
            utilities.waitForElement(addressPagePO.customerType, waitTimeout);
            utilities.scrollTo(addressPagePO.customerType);
            addressPagePO.customerType.click();
            reportInfo.log("Customer Type is clicked in the addresses page");
            utilities.pageWaitSec(5);
            utilities.waitUtilElementPresent(addressPagePO.customerTypeNew, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerTypeNew);
            addressPagePO.customerTypeNew.click();
        }

        /* addressPagePO.customerType.click();
         utilities.HighlightElement(addressPagePO.customerType);
         if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
         browser.executeScript("document.getElementsByClassName('alert-radio-button alert-tappable alert-radio ion-focusable sc-ion-alert-md')[0].click()");
         utilities.pageWaitSec(10); }
         addressPagePO.customerTypeNew.click();
         utilities.waitForElement(addressPagePO.billDropDownOk, waitTimeout);
         reportInfo.log("Customer Type is selected in the addresses page")
         utilities.HighlightElement(addressPagePO.billDropDownOk);
         addressPagePO.billDropDownOk.click();*/
        // addressPagePO.provideEventDetail.count().then(function (stdcount) {
        //     var count = stdcount;
        // console.log ("text area *** " ,count)
        // if(count > 0 ) {
        //     browser.executeScript("document.getElementsByTagName('textarea')[0].value ='test'; ");
        //     } 
        // })
        // if (addressPagePO.provideEventDetailFirst.isPresent()) {
        //     browser.executeScript("document.getElementsByClassName('native-textarea')[0].click();");
        //     browser.executeScript("document.getElementsByClassName('native-textarea')[0].value ='test';");
        //     browser.sleep(3000);
        // }
        browser.sleep(5000);

        utilities.scrollTo(addressPagePO.billFirstName);
        utilities.pageWaitSec(5);
        utilities.HighlightElement(addressPagePO.billFirstName);
        utilities.waitUtilElementPresent(addressPagePO.billFirstName, waitTimeout);
        addressPagePO.billFirstName.sendKeys(testInputs.USAddress.FirstName);
        reportInfo.log("Firstname value is entered in the billing address section");
        utilities.scrollTo(addressPagePO.billLastName);
        utilities.HighlightElement(addressPagePO.billLastName);
        addressPagePO.billLastName.sendKeys(testInputs.USAddress.LastName);
        reportInfo.log("Lastname value is entered in the billing address section");
        utilities.waitUtilElementPresent(addressPagePO.billAddress1, waitTimeout);
        utilities.scrollTo(addressPagePO.billAddress1);
        utilities.waitForElement(addressPagePO.billAddress1, waitTimeout);
        addressPagePO.billAddress1.sendKeys(testInputs.CAAddress.Address1);
        reportInfo.log("Address1 value is entered in the billing address section");
        utilities.waitForElement(addressPagePO.billCity, waitTimeout);
        utilities.scrollTo(addressPagePO.billCity);
        addressPagePO.billCity.sendKeys(testInputs.CAAddress.City);
        reportInfo.log("City value is entered in the billing address section");
        utilities.waitForElement(addressPagePO.billStateDropDown, waitTimeout);
        browser.sleep(2000);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            // utilities.mouseclick(addressPagePO.billStateDropDown); 
           // browser.executeScript("document.getElementById('select_state').click();");
           browser.executeScript("document.getElementsByClassName('ionic-selectable-cover')[2].click();");
           browser.sleep(7000);
           utilities.pageWait();
           browser.executeScript("document.querySelector('ionic-selectable-modal ion-item:nth-child(3)').click();")
            browser.sleep(7000);
            reportInfo.log("State value is selected from the dropdown in the billing address section");
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            utilities.pageWaitSec(14);
            //browser.executeScript("document.getElementsByClassName('alert-radio-label sc-ion-alert-md')[11].click()");
            utilities.pageWaitSec(14);
            utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            addressPagePO.billDropDownOk.click();
        } else {
            addressPagePO.billStateDropDown.click();
            browser.sleep(5000);
            addressPagePO.customerTypeNew.click();
        }
        utilities.waitForElement(addressPagePO.billZipCode, waitTimeout);
        utilities.scrollTo(addressPagePO.billZipCode);
        browser.executeScript("document.getElementById('input_zipCode').value='K1A0G0'");
        reportInfo.log("Zipcode value is entered in the billing address section");
        utilities.waitForElement(addressPagePO.billPhoneNumber, waitTimeout);
        utilities.HighlightElement(addressPagePO.billPhoneNumber);
        utilities.attachScreenshot();
        addressPagePO.billPhoneNumber.sendKeys(testInputs.CAAddress.Phone);
        reportInfo.log("Phone number value is entered in the billing address section");
        utilities.waitForElement(addressPagePO.billPhoneNumber, waitTimeout);
        utilities.waitForElement(addressPagePO.billEmailLabel, waitTimeout);
        addressPagePO.billEmailLabel.click();
    }

    this.billingAddressCA1 = function () {
        var addressPagePO = new addressPageObj();

  
        utilities.pageWaitSec(10);
        // utilities.waitUtilElementPresent(addressPagePO.customerTypeNew, waitTimeout);
        // utilities.HighlightElement(addressPagePO.customerTypeNew);

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            if(browserDetails.executionName == 'iphone'){
                browser.executeScript("document.getElementsByClassName('ionic-selectable-cover')[0].click();");
            }
            else {
                addressPagePO.customerType.click();
            }
            utilities.waitUtilElementPresent(addressPagePO.customerTypeNewMobile, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerTypeNewMobile);
            addressPagePO.customerTypeNewMobile.click();
            utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            addressPagePO.billDropDownOk.click();
        }
        else{
            utilities.waitForElement(addressPagePO.billFirstName, waitTimeout);
            utilities.waitForElement(addressPagePO.customerType, waitTimeout);
            addressPagePO.customerType.click();
            utilities.waitUtilElementPresent(addressPagePO.customerTypeNew, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerTypeNew);
            addressPagePO.customerTypeNew.click();
        }

        browser.sleep(5000);

        utilities.scrollTo(addressPagePO.billFirstName);
        utilities.pageWaitSec(5);
        utilities.HighlightElement(addressPagePO.billFirstName);
        utilities.attachScreenshot();
        utilities.waitUtilElementPresent(addressPagePO.billFirstName, waitTimeout);
        addressPagePO.billFirstName.sendKeys(testInputs.USAddress.FirstName);
        reportInfo.log("Firstname value is entered in the billing address section");
        utilities.scrollTo(addressPagePO.billLastName);
        utilities.HighlightElement(addressPagePO.billLastName);
        addressPagePO.billLastName.sendKeys(testInputs.USAddress.LastName);
        reportInfo.log("Lastname value is entered in the billing address section");
        utilities.waitUtilElementPresent(addressPagePO.billAddress1, waitTimeout);
        utilities.scrollTo(addressPagePO.billAddress1);
        utilities.waitForElement(addressPagePO.billAddress1, waitTimeout);
        addressPagePO.billAddress1.sendKeys(testInputs.CAAddress.Address1);
        reportInfo.log("Address1 value is entered in the billing address section");
        utilities.waitForElement(addressPagePO.billCity, waitTimeout);
        utilities.scrollTo(addressPagePO.billCity);
        addressPagePO.billCity.sendKeys(testInputs.CAAddress.City);
       
        // utilities.mouseclick(addressPagePO.billStateDropDown);
        browser.sleep(5000);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
           // browser.executeScript("document.getElementById('select_state').click();");
           browser.executeScript("document.getElementsByClassName('ionic-selectable-cover')[2].click();");
            browser.sleep(7000);
            utilities.pageWait();
            browser.executeScript("document.querySelector('ionic-selectable-modal ion-item:nth-child(3)').click();")
            reportInfo.log("State value is selected from the dropdown in the billing address section");
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            utilities.pageWaitSec(14);
           // browser.executeScript("document.getElementsByClassName('alert-radio-label sc-ion-alert-md')[11].click()");
            utilities.pageWaitSec(14);
            utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            addressPagePO.billDropDownOk.click();
        }
        else {
            reportInfo.log("City value is entered in the billing address section");
            utilities.waitForElement(addressPagePO.billStateDropDown, waitTimeout);
            addressPagePO.billStateDropDown.click();
            browser.sleep(5000);
            addressPagePO.customerTypeNew.click();
        }
        utilities.waitForElement(addressPagePO.billZipCode, waitTimeout);
        utilities.scrollTo(addressPagePO.billZipCode);
        browser.executeScript("document.getElementById('input_zipCode').value='K1A0G0'");
        reportInfo.log("Zipcode value is entered in the billing address section");
        utilities.waitForElement(addressPagePO.billPhoneNumber, waitTimeout);
        utilities.HighlightElement(addressPagePO.billPhoneNumber);
        utilities.attachScreenshot();
        addressPagePO.billPhoneNumber.sendKeys(testInputs.CAAddress.Phone);
        reportInfo.log("Phone number value is entered in the billing address section");
        utilities.waitForElement(addressPagePO.billPhoneNumber, waitTimeout);
        utilities.waitForElement(addressPagePO.billEmailLabel, waitTimeout);
        addressPagePO.billEmailLabel.click();
    }


    this.billingAddressCACheckout = function (testAddress) {
        var addressPagePO = new addressPageObj();
        var homePagePO = new homePageObj();
        var Address = testAddress;
       // console.log("****Address***", testAddress, "***Address***", Address);
        utilities.waitUtilElementPresent(addressPagePO.billFirstName, waitTimeout);
        addressPagePO.provideEventDetail.count().then(function (stdcount) {
            var count = stdcount;
           // console.log("text area *** ", count)
            if (count > 1) {
                document.getElementsByClassName('native-textarea')[0].value = 'test';
            }
        })

        // browser.executeScript("document.getElementsByClassName('alert-radio-button alert-tappable alert-radio ion-focusable sc-ion-alert-md')[0].click()");
        // utilities.waitForElement(addressPagePO.billDropDownOk, waitTimeout);
        // utilities.HighlightElement(addressPagePO.billDropDownOk);
        // addressPagePO.billDropDownOk.click();

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            if(browserDetails.executionName == 'iphone'){
                browser.executeScript("document.getElementsByClassName('ionic-selectable-cover')[0].click();");
            }
            else {
                addressPagePO.customerType.click();
            }
            utilities.waitUtilElementPresent(addressPagePO.customerTypeNewMobile, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerTypeNewMobile);
            addressPagePO.customerTypeNewMobile.click();
            utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            addressPagePO.billDropDownOk.click();
        }
        else{
            addressPagePO.customerType.click();
            utilities.HighlightElement(addressPagePO.customerType);
            utilities.waitUtilElementPresent(addressPagePO.customerTypeNew, waitTimeout);
            utilities.HighlightElement(addressPagePO.customerTypeNew);
            addressPagePO.customerTypeNew.click();
        }

        utilities.waitUtilElementPresent(addressPagePO.billFirstName, waitTimeout);
        utilities.scrollTo(addressPagePO.billFirstName);
        addressPagePO.billFirstName.sendKeys(testAddress.FirstName);
        utilities.scrollTo(addressPagePO.billLastName);
        utilities.HighlightElement(addressPagePO.billLastName);
        addressPagePO.billLastName.sendKeys(testAddress.LastName);
        utilities.waitUtilElementPresent(addressPagePO.billAddress1, waitTimeout);
        utilities.scrollTo(addressPagePO.billAddress1);
        utilities.waitUtilElementPresent(addressPagePO.billAddress1, waitTimeout);
        addressPagePO.billAddress1.sendKeys(testAddress.Address1);
        utilities.waitUtilElementPresent(addressPagePO.billCity, waitTimeout);
        utilities.scrollTo(addressPagePO.billCity);
        addressPagePO.billCity.sendKeys(testAddress.City);

      
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
       browser.executeScript("document.getElementsByClassName('ionic-selectable-cover')[2].click();");
       utilities.pageWait();
       browser.executeScript("document.querySelector('ionic-selectable-modal ion-item:nth-child(3)').click();")
        }
        else {
       utilities.waitUtilElementPresent(addressPagePO.billStateDropDown, waitTimeout);
       utilities.scrollTo(addressPagePO.billStateDropDown);
       addressPagePO.billStateDropDown.click(); 
       utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
       //browser.executeScript("document.getElementsByClassName('alert-radio-label sc-ion-alert-md')[7].click()");
       utilities.pageWait();
        }


        utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
        addressPagePO.billDropDownOk.click();
        utilities.waitUtilElementPresent(addressPagePO.billZipCode, waitTimeout);
        utilities.scrollTo(addressPagePO.billZipCode);
        addressPagePO.billZipCode.sendKeys(testAddress.ZipCode);
        utilities.waitUtilElementPresent(addressPagePO.billPhoneNumber, waitTimeout);
        utilities.HighlightElement(addressPagePO.billPhoneNumber);
        utilities.attachScreenshot();
        addressPagePO.billPhoneNumber.sendKeys(testAddress.Phone);
        utilities.waitUtilElementPresent(addressPagePO.billPhoneNumber, waitTimeout);

    }

    this.searchCustomerName = function () {
        var addressPagePO = new addressPageObj();
        utilities.waitUtilElementPresent(addressPagePO.searchCustomer, waitTimeout);
        utilities.HighlightElement(addressPagePO.searchCustomer);
        browser.executeScript("document.getElementsByTagName('ion-input')[0].querySelector('input').dispatchEvent(new Event('focus'))");
        utilities.pageWaitSec(10);
        utilities.scrollTo(addressPagePO.customerSearchTextField);
        utilities.waitUtilElementPresent(addressPagePO.customerSearchTextField, waitTimeout);
        utilities.HighlightElement(addressPagePO.customerSearchTextField);
        addressPagePO.customerSearchTextField.click();
        addressPagePO.customerSearchTextField.sendKeys("a");
        reportInfo.log('A character value is entered in the customer serach field')
        utilities.HighlightElement(addressPagePO.customerSearchModalSearchButton);
        browser.executeScript("document.getElementById('btn_search_cs').click()");
        //utilities.waitUtilElementPresent(addressPagePO.customerDetailsResult, waitTimeout);
        utilities.waitForElement(addressPagePO.customerDetailsResult, waitTimeout);
        utilities.HighlightElement(addressPagePO.customerDetailsResult);
        utilities.attachScreenshot();
        utilities.scrollTo(addressPagePO.customerDetailsResultLast);
        utilities.HighlightElement(addressPagePO.customerDetailsResultLast);
        reportInfo.log('Customer Serach is working as expected');
    }

    // this.selectSearchCustomerName = function () {
    //     var addressPagePO = new addressPageObj();
    //     utilities.scrollTo(addressPagePO.customerDetailsResult);
    //     utilities.waitUtilElementPresent(addressPagePO.customerDetailsResult, waitTimeout);
    //     utilities.HighlightElement(addressPagePO.customerDetailsResult);
    //     utilities.attachScreenshot();
    //     addressPagePO.customerDetailsResult.click();
    //     utilities.waitForElement(addressPagePO.billFirstName, waitTimeout);
    //     utilities.HighlightElement(addressPagePO.billFirstName);
    // }

    this.selectSearchCustomerName = function () {
        var addressPagePO = new addressPageObj();
        utilities.waitForElement(addressPagePO.customerDetailsResult, waitTimeout);
        utilities.scrollTo(addressPagePO.customerDetailsResult);
        utilities.HighlightElement(addressPagePO.customerDetailsResult);
        utilities.attachScreenshot();
        addressPagePO.customerDetailCheckbox.click();
        utilities.waitForElement(addressPagePO.selectButton, waitTimeout);
        utilities.HighlightElement(addressPagePO.selectButton);
        addressPagePO.selectButton.click();
        utilities.waitForElement(addressPagePO.billFirstName, waitTimeout);
        utilities.HighlightElement(addressPagePO.billFirstName);
    }

    this.AdvancesearchCustomerName = function () {
        var addressPagePO = new addressPageObj();
        utilities.waitForElement(addressPagePO.searchCustomer, waitTimeout);
        utilities.HighlightElement(addressPagePO.searchCustomer);
        addressPagePO.searchCustomer.click();
        utilities.waitForElement(addressPagePO.customerSearchTextField, waitTimeout);
        addressPagePO.customerSearchTextField.click();
        addressPagePO.customerSearchTextField.sendKeys("a");
        addressPagePO.customerSearchModalAdvanceSearch.click();
        utilities.waitForElement(addressPagePO.customerSearchModalCustomerNumber, waitTimeout);
        addressPagePO.customerSearchModalCustomerNumber.sendKeys("1");
        addressPagePO.customerSearchModalFirstName.sendKeys("q");
        addressPagePO.customerSearchModalLastName.sendKeys("a");
        addressPagePO.customerSearchModalPhone.sendKeys("1");
        addressPagePO.customerSearchModalEmail.sendKeys("q@a.com");
        utilities.HighlightElement(addressPagePO.customerSearchModalSearchButton);
        utilities.attachScreenshot();
        addressPagePO.customerSearchModalSearchButton.click();
        utilities.waitForElement(addressPagePO.customerSearchNoResult, waitTimeout);
        utilities.HighlightElement(addressPagePO.customerSearchNoResult);
    }

    this.billingAddressSameAsShippingLink = function () {
        var addressPagePO = new addressPageObj();

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            addressPagePO.billEmailLabelMobile.click();
            utilities.scrollTo(addressPagePO.shippingSameAsBillingNo);
        }
        utilities.pageWaitSec(5);
        utilities.waitForElement(addressPagePO.shippingSameAsBillingYes, waitTimeout);
        utilities.scrollTo(addressPagePO.shippingSameAsBillingYes);
        utilities.HighlightElement(addressPagePO.shippingSameAsBillingYes);
        utilities.attachScreenshot();
        // addressPagePO.shippingSameAsBillingYes.click();
        browser.executeScript(shippingSameAsBillingYes);
        utilities.waitUtilElementPresent(addressPagePO.nextButton, waitTimeout);

    }

    this.billingAddressNotSameAsShipping = function (testAddress) {
        var addressPagePO = new addressPageObj();
        var homePagePO = new homePageObj();
        var Address = testAddress;
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            addressPagePO.billEmailLabelMobile.click();
            utilities.waitForElement(addressPagePO.billEmailLabel, waitTimeout);
            addressPagePO.billEmailLabel.click();
            utilities.scrollTo(addressPagePO.shippingSameAsBillingNo);
        }
        utilities.pageWaitSec(8);
        utilities.waitForElement(addressPagePO.shippingSameAsBillingNo, waitTimeout);
        utilities.scrollTo(addressPagePO.shippingSameAsBillingNo);

        utilities.HighlightElement(addressPagePO.shippingSameAsBillingNo);
        utilities.attachScreenshot();
        if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad' || browserDetails.executionName == 'android') {
            addressPagePO.shippingSameAsBillingNo.click();
            // browser.executeScript(shippingNoOption);
            browser.sleep(10000);
        } else {
            browser.actions().mouseMove(addressPagePO.shippingSameAsBillingNo).click().perform();
        }
        utilities.waitUtilElementPresent(addressPagePO.shipFirstName, waitTimeout);
        utilities.scrollTo(addressPagePO.shipFirstName);
        addressPagePO.shipFirstName.sendKeys(testAddress.FirstName);
        utilities.scrollTo(addressPagePO.shipLastName);
        utilities.HighlightElement(addressPagePO.shipLastName);
        addressPagePO.shipLastName.sendKeys(testAddress.LastName);
        utilities.scrollTo(addressPagePO.shipAddress1);
        addressPagePO.shipAddress1.sendKeys(testAddress.Address1);
        utilities.scrollTo(addressPagePO.shipCity);
        addressPagePO.shipCity.sendKeys(testAddress.City);
        utilities.scrollTo(addressPagePO.shipZipCode);
        addressPagePO.shipZipCode.sendKeys(testAddress.ZipCode);
        utilities.HighlightElement(addressPagePO.shipPhoneNumber);
        utilities.attachScreenshot();
        addressPagePO.shipPhoneNumber.sendKeys(testAddress.Phone);
        utilities.waitForElement(addressPagePO.shipAltPhoneNumber, waitTimeout);
        addressPagePO.shipAltPhoneNumberLabel.click();
    }

    this.billingAddressNotSameAsShippingCA = function (testAddress) {
        var addressPagePO = new addressPageObj();
        var homePagePO = new homePageObj();
        var Address = testAddress;
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            addressPagePO.billEmailLabelMobile.click();
        }
        utilities.pageWaitSec(8);
        utilities.waitForElement(addressPagePO.shippingSameAsBillingNo, waitTimeout);
        utilities.scrollTo(addressPagePO.shippingSameAsBillingNo);

        utilities.HighlightElement(addressPagePO.shippingSameAsBillingNo);
        // browser.executeScript("arguments[0].click();",addressPagePO.shippingSameAsBillingNo);
        addressPagePO.shippingSameAsBillingNo.click();
        utilities.scrollTo(addressPagePO.shipFirstName);
        addressPagePO.shipFirstName.sendKeys(testAddress.FirstName);
        utilities.scrollTo(addressPagePO.shipLastName);
        utilities.HighlightElement(addressPagePO.shipLastName);
        addressPagePO.shipLastName.sendKeys(testAddress.LastName);
        utilities.scrollTo(addressPagePO.shipAddress1);
        addressPagePO.shipAddress1.sendKeys(testAddress.Address1);
        utilities.scrollTo(addressPagePO.shipCity);
        addressPagePO.shipCity.sendKeys(testAddress.City);
        utilities.waitUtilElementPresent(addressPagePO.shipStateDropDown, waitTimeout);
        utilities.scrollTo(addressPagePO.shipStateDropDown);
        // addressPagePO.shipStateDropDown.click();
        //utilities.waitForElement(addressPagePO.billStateDropDown, waitTimeout);
        browser.sleep(2000);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            // utilities.mouseclick(addressPagePO.billStateDropDown); 
            browser.executeScript("document.getElementById('select_state').click();");
            browser.sleep(7000);
            reportInfo.log("State value is selected from the dropdown in the billing address section");
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            utilities.pageWaitSec(14);
            browser.executeScript("document.getElementsByClassName('alert-radio-label sc-ion-alert-md')[11].click()");
            utilities.pageWaitSec(14);
            utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            utilities.attachScreenshot();
            addressPagePO.billDropDownOk.click();
        } else {
            addressPagePO.shipStateDropDown.click();
            browser.sleep(5000);
            addressPagePO.customerTypeNew.click();
        }
        browser.sleep(2000);
        utilities.HighlightElement(addressPagePO.shipZipCode);
        addressPagePO.shipZipCode.sendKeys(testAddress.ZipCode);
        utilities.HighlightElement(addressPagePO.shipPhoneNumber);
        addressPagePO.shipPhoneNumber.sendKeys(testAddress.Phone);
        utilities.waitForElement(addressPagePO.shipAltPhoneNumber, waitTimeout);
        addressPagePO.shipAltPhoneNumber.click();
    }


    this.isShippingRequiredYes = function () {
        var addressPagePO = new addressPageObj();
        utilities.waitUtilElementPresent(addressPagePO.isShippingRequiredYes);
        utilities.scrollTo(addressPagePO.isShippingRequiredYes);
        utilities.attachScreenshot();
        addressPagePO.isShippingRequiredYes.click();
        reportInfo.log("Is shipping required Yes is selected");
    }

    this.isShippingRequiredNo = function () {
        var addressPagePO = new addressPageObj();
        utilities.scrollTo(addressPagePO.isShippingRequiredNo);
        utilities.HighlightElement(addressPagePO.isShippingRequiredNo);
        utilities.attachScreenshot();
        // browser.actions().mouseMove(addressPagePO.isShippingRequiredNo).click().perform();
        addressPagePO.isShippingRequiredNo.click();
        reportInfo.log("Is shipping required No is selected");
    }
    this.socialNameCheck = function () {
        var addressPagePO = new addressPageObj();
        utilities.waitForElement(addressPagePO.socialName, waitTimeout);
        utilities.HighlightElement(addressPagePO.socialName);
        utilities.attachScreenshot();
        var StoreSocialName;
        addressPagePO.socialName.getText().then(function (text) {
            StoreSocialName = text;
            //assert.include(StoreSocialName, socilDemoDateStore);
        });
    }

    this.eventNameCheck = function () {
        var addressPagePO = new addressPageObj();
        utilities.waitForElement(addressPagePO.eventName, waitTimeout);
        utilities.HighlightElement(addressPagePO.eventName);
        utilities.attachScreenshot();
        var StoreSocialName;
        // addressPagePO.eventName.getText().then(function (text) {
        //     StoreSocialName = text;
        //     utilities.log('****** Actual Comments ******', text);
        //     utilities.log(" **** eventDetailsNameStore  ***** ", eventDetailsNameStore);
        //     assert.include(StoreSocialName, eventDetailsNameStore);
        // });
    }

    this.nextButton = function () {
        var addressPagePO = new addressPageObj();
        utilities.scrollTo(addressPagePO.nextButton);
        utilities.HighlightElement(addressPagePO.nextButton);
        utilities.HighlightElement(addressPagePO.saveButton);
        utilities.attachScreenshot();
        addressPagePO.nextButton.click();
        browser.sleep(2000);
        reportInfo.log("Next button is clicked in the addresses page");
        utilities.waitUtilElementPresent(addressPagePO.standardizationAddress, waitTimeout);
        browser.sleep(2000);
        utilities.HighlightElement(addressPagePO.standardizationAddress);
    }

    this.nextButton1 = function () {
        var addressPagePO = new addressPageObj();
        utilities.scrollTo(addressPagePO.nextButton);
        utilities.HighlightElement(addressPagePO.nextButton);
        utilities.attachScreenshot();
        utilities.HighlightElement(addressPagePO.saveButton);
        addressPagePO.nextButton.click();
        browser.sleep(2000);
        reportInfo.log("Next button is clicked in the addresses page");
    }

    this.nextButtonCheckout = function () {
        var addressPagePO = new addressPageObj();
        utilities.HighlightElement(addressPagePO.nextButton);
        utilities.scrollTo(addressPagePO.nextButton);
        if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
           
            addressPagePO.nextButton.click();
        } else {
            utilities.click(addressPagePO.nextButton);
        }
        utilities.waitUtilElementPresent(addressPagePO.standardizationHeader, waitTimeout);
        utilities.HighlightElement(addressPagePO.standardizationHeader);
        utilities.attachScreenshot();
    }

    this.nextButtonCheckout1 = function () {
        var addressPagePO = new addressPageObj();
        var paymentPagePO = new paymentPageObj();
        utilities.waitUtilElementPresent(paymentPagePO.checkoutProgress, waitTimeout);
        utilities.HighlightElement(paymentPagePO.checkoutProgress);
        utilities.scrollTo(addressPagePO.nextButton);
        utilities.HighlightElement(addressPagePO.nextButton);
        utilities.attachScreenshot();
        utilities.waitUtilElementPresent(addressPagePO.nextButton, waitTimeout);
        utilities.click(addressPagePO.nextButton);

        utilities.waitUtilElementPresent(addressPagePO.standardizationHeader, waitTimeout);
        utilities.HighlightElement(addressPagePO.standardizationHeader);
    }

    this.standardizationAddressSelect = function () {
        var addressPagePO = new addressPageObj();
        browser.sleep(10000);
        utilities.waitUtilElementPresent(addressPagePO.standardizationAddress, waitTimeout);
        utilities.HighlightElement(addressPagePO.standardizationAddress);
        addressPagePO.standardizationAddressCount.count().then(function (stdcount) {
            var count = stdcount;
            if (count > 1) {
                utilities.waitUtilElementPresent(addressPagePO.suggestedBillingAddress, waitTimeout);
                utilities.HighlightElement(addressPagePO.suggestedBillingAddress);
                utilities.attachScreenshot();
                addressPagePO.suggestedBillingAddress.click();
            } else {
                //  addressPagePO.standardizationAddress.click();
                browser.executeScript("document.getElementsByClassName('address-option-radio')[0].click()");
                browser.sleep(10000);
            }
        })
        utilities.waitForElement(addressPagePO.continueButton, waitTimeout);
        utilities.HighlightElement(addressPagePO.continueButton);
    }

    this.standardizationAddressSelect1 = function () {
        var addressPagePO = new addressPageObj();
        utilities.waitForElement(addressPagePO.standardizationAddress, waitTimeout);
        utilities.HighlightElement(addressPagePO.standardizationAddress);
        utilities.attachScreenshot();
        addressPagePO.standardizationAddress.click();

        utilities.waitUtilElementPresent(addressPagePO.continueButton, waitTimeout);
        utilities.HighlightElement(addressPagePO.continueButton);
    }

    this.standardizationAddressSelectCheckout = function () {
        var addressPagePO = new addressPageObj();
        utilities.waitUtilElementPresent(addressPagePO.standardizationAddress, waitTimeout);
        utilities.HighlightElement(addressPagePO.standardizationAddress);
        utilities.attachScreenshot();
        addressPagePO.standardizationAddressCount.count().then(function (stdcount) {
            var count = stdcount;
            if (count > 1) {
                utilities.waitForElement(addressPagePO.suggestedBillingAddress, waitTimeout);
                utilities.scrollTo(addressPagePO.suggestedBillingAddress, waitTimeout);
                utilities.HighlightElement(addressPagePO.suggestedBillingAddress);
                addressPagePO.suggestedBillingAddress.click();
            } else {
                addressPagePO.enteredBillingAddress.click();
                browser.executeScript("document.getElementsByClassName('address-option-radio')[0].click()");
                browser.sleep(10000);
            }
        })
    }

    this.standardizationAddressContinueCheckout = function () {
        var addressPagePO = new addressPageObj();
        var shippingPagePO = new shippingPageObj();
        var paymentPagePO = new paymentPageObj();
        utilities.scrollTo(addressPagePO.continueButton);
        utilities.HighlightElement(addressPagePO.continueButton);
        utilities.attachScreenshot();
        browser.executeScript("document.getElementsByClassName('action-btn')[1].click()");

        utilities.waitUtilElementPresent(shippingPagePO.shippingMethods, waitTimeout);
    }

    this.standardizationAddressStandardizationCheckout = function () {
        var addressPagePO = new addressPageObj();
        var paymentPagePO = new paymentPageObj();
        utilities.waitForElement(addressPagePO.standardizationAddress, waitTimeout);
        utilities.HighlightElement(addressPagePO.standardizationAddress);
        utilities.attachScreenshot();
        addressPagePO.standardizationAddressCount.count().then(function (stdcount) {
            var count = stdcount;
           // console.log("**** address count **** ", count)
            if (count > 1) {
                utilities.log("&&&& selected First address &&&&& ");
                utilities.waitForElement(addressPagePO.suggestedBillingAddress, waitTimeout);
                utilities.scrollTo(addressPagePO.suggestedBillingAddress);
                utilities.HighlightElement(addressPagePO.suggestedBillingAddress);
                addressPagePO.suggestedBillingAddress.click();
            } else {
                utilities.log("&&&& selected Second address &&&&& ");
                addressPagePO.enteredBillingAddress.click();
            }
        })


        utilities.scrollTo(addressPagePO.continueButton);
        utilities.HighlightElement(addressPagePO.continueButton);
        utilities.attachScreenshot();
        browser.executeScript("document.getElementsByClassName('action-btn')[1].click();");
        browser.sleep(5000);
        addressPagePO.standardizationHeader.isPresent().then(function (result) {
            if (result) {
                utilities.scrollTo(addressPagePO.continueButton);
                utilities.HighlightElement(addressPagePO.continueButton);
                browser.executeScript("document.getElementsByClassName('action-btn')[1].click();");
            }
        })
        // utilities.waitUtilElementPresent(paymentPagePO.checkoutProgressPlaceOrderPage, waitTimeout);
        browser.sleep(10000);

    }

    this.standardizationAddressContinueCheckout = function () {
        var addressPagePO = new addressPageObj();
        var shippingPagePO = new shippingPageObj();
        var paymentPagePO = new paymentPageObj();
        // utilities.waitUtilElementPresent(addressPagePO.standardizationBillingAddress, waitTimeout);
        utilities.scrollTo(addressPagePO.continueButton);
        utilities.HighlightElement(addressPagePO.continueButton);
        utilities.attachScreenshot();
        browser.executeScript("document.getElementsByClassName('action-btn')[1].click();");


        utilities.pageWaitSec(10);
        utilities.waitUtilElementPresent(paymentPagePO.paymentProgressHeader, waitTimeout);
        utilities.HighlightElement(paymentPagePO.paymentProgressHeader);

    }

        this.standardizationSelectContinue = function() {
        var addressPagePO = new addressPageObj();
        utilities.waitForElement(addressPagePO.standardizationAddress, waitTimeout);
        utilities.HighlightElement(addressPagePO.standardizationAddress);
    //    utilities.attachScreenshot();
     //   addressPagePO.standardizationAddress.click();
        browser.executeScript("document.getElementsByClassName('address-option-radio')[0].click()");
        utilities.pageWaitSec(5);
        utilities.waitForElement(addressPagePO.continueButton, waitTimeout);
        utilities.HighlightElement(addressPagePO.continueButton);
        addressPagePO.continueButton.click();
        utilities.pageWaitSec(5);
    }

       this.shippingNotSameClick = function() {
        var addressPagePO = new addressPageObj();
        utilities.waitForElement(addressPagePO.shippingSameAsBillingNo, waitTimeout);
        utilities.scrollTo(addressPagePO.shippingSameAsBillingNo);
        utilities.HighlightElement(addressPagePO.shippingSameAsBillingNo);
        addressPagePO.shippingSameAsBillingNo.click();
    }

    this.standardizationAddressContinue = function () {
        var addressPagePO = new addressPageObj();
        var shippingPagePO = new shippingPageObj();
        utilities.waitForElement(addressPagePO.standardizationAddress, waitTimeout);
        if (browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(addressPagePO.continueButton, waitTimeout);
            utilities.HighlightElement(addressPagePO.continueButton);
            utilities.attachScreenshot();
            browser.sleep(5000);
            addressPagePO.continueButton.click();
            utilities.waitUtilElementPresent(shippingPagePO.shippingMethods, waitTimeout);
        } else {
            utilities.HighlightElement(addressPagePO.continueButton);
            browser.executeScript("document.getElementsByClassName('action-btn')[1].click()");
            browser.sleep(2000);
            utilities.waitUtilElementPresent(shippingPagePO.shippingMethods, waitTimeout);
        }
        utilities.HighlightElement(shippingPagePO.shippingMethods);
        reportInfo.log("Select the standardization Address and Clicked on Continue Button");
    }

    async function shippingSameAsBillingYes() {
        const sameshipping = document.getElementsByTagName('ion-segment-button')[6];
        sameshipping.componentOnReady();
        sameshipping.shadowRoot.querySelector('button').click();
    }

    async function shippingNotSame() {
        const notsame = document.getElementsByTagName('ion-segment-button')[10];
        notsame.shadowRoot.querySelector('button').click();
    }
    async function billingstate(state) {
        var x = shippingDropdownLength.then(function () {
            for (var i = 0; i < x.length; i++) {
                browser.executeScript("document.getElementsByClassName('alert-radio-label sc-ion-alert-md')[" + i + "].innerText").then(function (counter) {
                    utilities.log("**** counter **** ", counter);
                    if (counter == state) {
                        browser.executeScript("document.getElementsByClassName('alert-radio-label sc-ion-alert-md')[" + i + "].click();");
                    }
                });
            }
        });
    }

}
module.exports = new addressPage();