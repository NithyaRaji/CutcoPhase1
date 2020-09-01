var utilities = require('./utilities.js');
var browserDetails = require('./browserDetails.js');
var addressPageObj = require('../com.sirius.pageObjects/addressesPage_po.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var testInputs = require('../com.sirius.testData/data.json');

var waitTimeout = 10000;

let addressValidation = function () {



    this.proceedWithoutAddress = function () {
        var addressPagePO = new addressPageObj();
        addressPagePO.customerType.isDisplayed().then(function () {

            utilities.pageWaitSec(5);
            utilities.scrollTo(addressPagePO.nextButton);
            utilities.waitForElement(addressPagePO.nextButton, waitTimeout);
            utilities.HighlightElement(addressPagePO.nextButton);
            utilities.attachScreenshot();
            addressPagePO.nextButton.click();
            utilities.pageWaitSec(15);
            utilities.HighlightElement(addressPagePO.CustTypeError);
            utilities.waitUtilElementPresent(addressPagePO.CustTypeError);
            expect(addressPagePO.CustTypeError.getText()).toEqual('Customer Type is required');
          //  console.log('---->', addressPagePO.CustTypeError.getText());
            utilities.HighlightElement(addressPagePO.firstNameError);
            utilities.waitUtilElementPresent(addressPagePO.firstNameError);
            expect(addressPagePO.firstNameError.getText()).toEqual('First name is required');
          //  console.log('---->', addressPagePO.firstNameError.getText());
            utilities.HighlightElement(addressPagePO.lastNameError);
            utilities.waitUtilElementPresent(addressPagePO.lastNameError);
            expect(addressPagePO.lastNameError.getText()).toEqual('Last name is required');
          //  console.log('---->', addressPagePO.lastNameError.getText());

            utilities.HighlightElement(addressPagePO.addressError);
            utilities.waitUtilElementPresent(addressPagePO.addressError);
            expect(addressPagePO.addressError.getText()).toEqual('Address is required');
           // console.log('---->', addressPagePO.addressError.getText());

            utilities.HighlightElement(addressPagePO.zipcodeError);
            utilities.waitUtilElementPresent(addressPagePO.zipcodeError);
            expect(addressPagePO.zipcodeError.getText()).toEqual('Zip Code is required');
           // console.log('---->', addressPagePO.zipcodeError.getText());

            utilities.HighlightElement(addressPagePO.phoneError);
            utilities.attachScreenshot();
            utilities.waitUtilElementPresent(addressPagePO.phoneError);
            expect(addressPagePO.phoneError.getText()).toEqual('Phone is required');
            // console.log('---->', addressPagePO.phoneError.getText());

        });
    }


    this.emailValidation = function (country) {
        var addressPagePO = new addressPageObj();

        utilities.pageWaitSec(5);

        utilities.HighlightElement(addressPagePO.customerType);
        addressPagePO.customerType.click();
        addressPagePO.customerTypeNew.click();

        utilities.waitForElement(addressPagePO.billFirstName);
        utilities.HighlightElement(addressPagePO.billFirstName);
        utilities.attachScreenshot();
        addressPagePO.billFirstName.sendKeys(testInputs.USAddress.FirstName);

        utilities.waitForElement(addressPagePO.billLastName);
        utilities.HighlightElement(addressPagePO.billLastName);
        utilities.pageWaitSec(5);
        addressPagePO.billLastName.sendKeys(testInputs.USAddress.LastName);

        utilities.waitForElement(addressPagePO.billAddress1);
        utilities.HighlightElement(addressPagePO.billAddress1);
        addressPagePO.billAddress1.sendKeys(testInputs.USAddress.Address1);

        if (country == 'US') {
            utilities.waitForElement(addressPagePO.billZipCode);
            utilities.HighlightElement(addressPagePO.billZipCode);
            utilities.scrollTo(addressPagePO.billZipCode);
            addressPagePO.billZipCode.sendKeys(testInputs.USAddress.ZipCode);

            utilities.waitForElement(addressPagePO.billPhoneNumber);
            utilities.HighlightElement(addressPagePO.billPhoneNumber);
            addressPagePO.billPhoneNumber.sendKeys(testInputs.USAddress.Phone);
        }
        else if (country == 'CA') {

            utilities.pageWaitSec(5);
            utilities.waitForElement(addressPagePO.billStateDropDown);
            utilities.HighlightElement(addressPagePO.billStateDropDown);
            addressPagePO.billStateDropDown.click();
            addressPagePO.selectState('Alberta');

            utilities.pageWaitSec(5);
            utilities.waitForElement(addressPagePO.billZipCode);
            utilities.HighlightElement(addressPagePO.billZipCode);
            utilities.scrollTo(addressPagePO.billZipCode);
            addressPagePO.billZipCode.sendKeys(testInputs.CAAddress.ZipCode);

            utilities.pageWaitSec(5);
            utilities.waitForElement(addressPagePO.billPhoneNumber);
            utilities.HighlightElement(addressPagePO.billPhoneNumber);
            addressPagePO.billPhoneNumber.sendKeys(testInputs.CAAddress.Phone);


        }

        utilities.pageWaitSec(5);
        utilities.waitForElement(addressPagePO.billEmail);
        utilities.HighlightElement(addressPagePO.billEmail);
        addressPagePO.billEmail.sendKeys('a"b(c)d,e:f;gi[j\k]l@yopmail.com');

        utilities.pageWaitSec(5);
        utilities.waitForElement(addressPagePO.nextButton);
        utilities.HighlightElement(addressPagePO.nextButton);
        addressPagePO.nextButton.click();

        utilities.HighlightElement(addressPagePO.emailError);
        utilities.waitForElement(addressPagePO.emailError);
        expect(addressPagePO.emailError.getText()).toEqual('Not a valid email');

        addressPagePO.billEmail.clear();
        addressPagePO.billEmail.sendKeys('Test..one@yopmail.com');


        utilities.pageWaitSec(5);
        utilities.HighlightElement(addressPagePO.nextButton);
        addressPagePO.nextButton.click();

        utilities.waitForElement(addressPagePO.emailError);
        expect(addressPagePO.emailError.getText()).toEqual('Not a valid email');

        addressPagePO.billEmail.clear();
        addressPagePO.billEmail.sendKeys('TESTONE@yopmail.com');

        utilities.pageWaitSec(5);
        utilities.waitForElement(addressPagePO.nextButton);
        utilities.pageWaitSec(5);

        utilities.HighlightElement(addressPagePO.nextButton);
        utilities.attachScreenshot();
        addressPagePO.nextButton.click();

        utilities.pageWaitSec(10);

    }

    this.promoValidateVectorUS = function () {

        var addressPagePO = new addressPageObj();

        utilities.pageWaitSec(5);
        utilities.attachScreenshot();
        expect(addressPagePO.billFirstName.getAttribute('value')).toEqual('Bm1');
        expect(addressPagePO.billLastName.getAttribute('value')).toEqual('Test');
        expect(addressPagePO.billAddress1.getAttribute('value')).toEqual('1116 E STATE ST');
        expect(addressPagePO.billCity.getAttribute('value')).toEqual('OLEAN');
        expect(addressPagePO.billEmail.getAttribute('value')).toEqual('bm1@yopmail.com');

    }

    this.promoValidateVectorCA = function () {

        var addressPagePO = new addressPageObj();

        utilities.pageWaitSec(5);
        utilities.attachScreenshot();
        expect(addressPagePO.billFirstName.getAttribute('value')).toEqual('Bm1');
        expect(addressPagePO.billLastName.getAttribute('value')).toEqual('Test');
        expect(addressPagePO.billAddress1.getAttribute('value')).toEqual('1-2172 WYECROFT RD');
        expect(addressPagePO.billCity.getAttribute('value')).toEqual('OAKVILLE');
        expect(addressPagePO.billEmail.getAttribute('value')).toEqual('bm1@yopmail.com');
    }

    this.promoValidateCutcoUS = function () {

        var addressPagePO = new addressPageObj();

        utilities.pageWaitSec(5);
        utilities.attachScreenshot();
        expect(addressPagePO.billFirstName.getAttribute('value')).toEqual('Admin1');
        expect(addressPagePO.billLastName.getAttribute('value')).toEqual('Test');
        expect(addressPagePO.billAddress1.getAttribute('value')).toEqual('1116 E STATE ST');
        expect(addressPagePO.billCity.getAttribute('value')).toEqual('OLEAN');
        expect(addressPagePO.billEmail.getAttribute('value')).toEqual('admin1@yopmail.com');

    }
    
       this.LITValidateUS = function() {
        var addressPagePO = new addressPageObj();
        utilities.pageWaitSec(5);
        utilities.attachScreenshot();
        expect(addressPagePO.billFirstName.getAttribute('value')).toEqual('Bm1');
        expect(addressPagePO.billLastName.getAttribute('value')).toEqual('Test');
        expect(addressPagePO.billAddress1.getAttribute('value')).toEqual('1116 E STATE ST');
        expect(addressPagePO.billCity.getAttribute('value')).toEqual('OLEAN');
    }

    this.LITValidateCA = function () {
        var addressPagePO = new addressPageObj();
        utilities.pageWaitSec(5);
        utilities.attachScreenshot();
        expect(addressPagePO.billFirstName.getAttribute('value')).toEqual('Bm1');
        expect(addressPagePO.billLastName.getAttribute('value')).toEqual('Test');
        expect(addressPagePO.billAddress1.getAttribute('value')).toEqual('1-2172 WYECROFT RD');
        expect(addressPagePO.billCity.getAttribute('value')).toEqual('OAKVILLE');
    }

}
module.exports = new addressValidation();
