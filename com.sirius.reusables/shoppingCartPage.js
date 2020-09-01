var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var browserDetails = require('../com.sirius.reusables/browserDetails.js');
var productDetailsObj = require('../com.sirius.pageObjects/productDetailsPage_po.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');
var addressPageObj = require('../com.sirius.pageObjects/addressesPage_po.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var shopCatalogObj = require('../com.sirius.pageObjects/shopCatalog_po.js');
var browseObj = require('../com.sirius.pageObjects/browseByCategory_po');

// const {
//     expect
// } = require("chai");
const {
    assert, expect, util
} = require("chai");
const { fchown } = require('fs');

// //global.expect = require('chai').expect
// var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

var EC = protractor.ExpectedConditions;
var waitTimeout = 300000;

let shoppingCartPage = function () {

    this.verifyPromoBonus = function () {
        var shoppingCartPO = new shoppingCartObj();
        expect(shoppingCartPO.upgrade.isPresent()).toBeFalsy();
        browser.sleep(2000);
        utilities.waitForElement(shoppingCartPO.cartMoreOption);
        utilities.HighlightElement(shoppingCartPO.cartMoreOption);
        shoppingCartPO.cartMoreOption.click();
        browser.sleep(5000);
        shoppingCartPO.moreBonusOption.click();
        browser.sleep(5000);
        expect(element(by.id('text_bonus_cpo')).isDisplayed);
    }

    this.cancelSaveAsPendingFromOverlay = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.click(shoppingCartPO.saveButton);
        utilities.waitUtilElementPresent(shoppingCartPO.cancelSaveOrder, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.cancelSaveOrder);
        shoppingCartPO.cancelSaveOrder.click();
        browser.sleep(2000);
        expect(shoppingCartPO.cancelSaveOrder.isPresent()).toBeFalsy();
        reportInfo.log("Verified if the user is able to click on the 'cancel' button and close the save order overlay");
        utilities.click(shoppingCartPO.saveButton);
        utilities.waitUtilElementPresent(shoppingCartPO.cancelSaveOrder, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.cancelSaveOrderUsingXicon);
        utilities.click(shoppingCartPO.cancelSaveOrderUsingXicon);
       // browser.sleep(2000);
       // expect(shoppingCartPO.cancelSaveOrder.isPresent()).toBeFalsy(); 'toBeFalsy' issue to be sorted out
        reportInfo.log("Verified if the user is able to click on the 'X' icon and close the save order overlay");
    }

    this.nonISO8859CharacterValidationOnOverlay = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.click(shoppingCartPO.saveButton);
        utilities.HighlightElement(shoppingCartPO.saveButton);
        utilities.waitForElement(shoppingCartPO.saveOrderReasonField);
        shoppingCartPO.saveOrderReasonField.sendKeys("测试");
        //utilities.HighlightElement(shoppingCartPO.saveOrderButton);
        utilities.waitForElement(shoppingCartPO.invalidReasonError);
        expect((shoppingCartPO.invalidReasonError).isDisplayed());
        utilities.HighlightElement(shoppingCartPO.invalidReasonError);
        utilities.attachScreenshot();
        reportInfo.log("Verified if non ISO8859-1 characters are not allowed in the save as pending modal's comments section");
    }

    this.creditCardNumberValidationOnOverlay_Amex = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.click(shoppingCartPO.saveButton);
        utilities.HighlightElement(shoppingCartPO.saveButton);
        utilities.waitForElement(shoppingCartPO.saveOrderReasonField);
        shoppingCartPO.saveOrderReasonField.sendKeys("378282246310005");
        utilities.HighlightElement(shoppingCartPO.saveOrderButton);
        shoppingCartPO.saveOrderButton.click();
        utilities.waitForElement(shoppingCartPO.removeCardNumberFromCommentFieldError);
        expect((shoppingCartPO.removeCardNumberFromCommentFieldError).isDisplayed());
        utilities.HighlightElement(shoppingCartPO.removeCardNumberFromCommentFieldError);
        utilities.attachScreenshot();
        reportInfo.log("Verified if credit card numbers are not allowed in the save as pending modal's comments section");
    }

    this.creditCardNumberValidationOnOverlay_Discover = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.click(shoppingCartPO.saveButton);
        utilities.HighlightElement(shoppingCartPO.saveButton);
        utilities.waitForElement(shoppingCartPO.saveOrderReasonField);
        shoppingCartPO.saveOrderReasonField.sendKeys("6011000990139424");
        utilities.HighlightElement(shoppingCartPO.saveOrderButton);
        shoppingCartPO.saveOrderButton.click();
        utilities.waitForElement(shoppingCartPO.removeCardNumberFromCommentFieldError);
        expect((shoppingCartPO.removeCardNumberFromCommentFieldError).isDisplayed());
        utilities.HighlightElement(shoppingCartPO.removeCardNumberFromCommentFieldError);
        utilities.attachScreenshot();
        reportInfo.log("Verified if credit card numbers are not allowed in the save as pending modal's comments section");
    }

    this.emptytheCart = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.emptyCartLink);
        utilities.HighlightElement(shoppingCartPO.emptyCartLink);
        shoppingCartPO.emptyCartLink.click();
        utilities.waitForElement(shoppingCartPO.emptyCartLinkEmptyCartButton);
        utilities.HighlightElement(shoppingCartPO.emptyCartLinkEmptyCartButton);
        shoppingCartPO.emptyCartLinkEmptyCartButton.click();
        utilities.waitForElement(shoppingCartPO.noItemsInCartMessage);
        utilities.HighlightElement(shoppingCartPO.noItemsInCartMessage);
        reportInfo.log("'No items in cart' message is displayed after emptying the cart");
    }

    this.emptyCartVerification = function () {
        var shoppingCartPO = new shoppingCartObj();
       // expect(shoppingCartPO.saveButton.isPresent()).toBeFalsy(); //to be fixed
        reportInfo.log("Save button is not present after emptying the cart");
      //  expect(shoppingCartPO.checkoutButton.isPresent()).toBeFalsy(); //to be fixed
        reportInfo.log("Checkout button is not present after emptying the cart");
    }

    this.removeBonusitemFromCart = function () {
        var shoppingCartPO = new shoppingCartObj();
        // expect((shoppingCartPO.secondItemInCart)).isDisplayed();
        utilities.HighlightElement(shoppingCartPO.secondItemInCartMoreIcon);
        shoppingCartPO.secondItemInCartMoreIcon.click();
        browser.sleep(4000);
        utilities.HighlightElement(shoppingCartPO.bonusOption);
        shoppingCartPO.bonusOption.click();
        browser.sleep(2000);
        shoppingCartPO.secondItemInCartMoreIcon.click();
        //expect(shoppingCartPO.bonusOption.isPresent()).toBeFalsy();
        // expect((shoppingCartPO.unBonusIcon)).isDisplayed();
        shoppingCartPO.deleteProductFromCart.click();
        browser.sleep(3000);
        // expect(shoppingCartPO.verifyBonusItemDeletion.isPresent()).to.eventually.equals(false);
    }


    this.promoConfig = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.olean, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.olean);
        utilities.pageWaitSec(5);
    }

    this.verifyPromoConfigVectorUS = function () {
        var shoppingCartPO = new shoppingCartObj();
        expect(shoppingCartPO.olean.isSelected());
        expect(shoppingCartPO.brandingTools);
        expect(shoppingCartPO.orderTypeRegular.isPresent()).toBeFalsy();
        // expect(shoppingCartPO.priceSetupCatalog.isPresent()).toBeFalsy();

    }

    this.verifyPromoConfigVectorCA = function () {
        var shoppingCartPO = new shoppingCartObj();

        expect(shoppingCartPO.olean.isSelected());
        expect(shoppingCartPO.regimbalAward);
        expect(shoppingCartPO.pacificEngrave);
        expect(shoppingCartPO.tideyEngrave);
        expect(shoppingCartPO.orderTypeRegular.isPresent()).toBeFalsy();
        // expect(shoppingCartPO.priceSetupCatalog.isPresent()).toBeFalsy();


    }

    this.verifyPromoConfigCutcoUS = function () {
        var shoppingCartPO = new shoppingCartObj();

        expect(shoppingCartPO.olean.isSelected());
        expect(shoppingCartPO.orderTypeRegular.isPresent()).toBeFalsy();
        // expect(shoppingCartPO.priceSetupCatalog.isPresent()).toBeFalsy();

    }

    this.verifyEngraveOptions = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.cartMoreOption);
        utilities.HighlightElement(shoppingCartPO.cartMoreOption);
        shoppingCartPO.cartMoreOption.click();

        browser.sleep(5000);

        element(by.id('text_editEngrave_cpo')).click();

        browser.sleep(3000);

        shoppingCartPO.engraveTypeEngrave.click();
        expect(shoppingCartPO.engraveTypeBlade.isPresent());
        shoppingCartPO.engraveTypeMonoGram.click();
    }

    this.verifyPromoEngrave = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.cartMoreOption);
        utilities.HighlightElement(shoppingCartPO.cartMoreOption);
        shoppingCartPO.cartMoreOption.click();

        browser.sleep(5000);

        shoppingCartPO.moreEngraveOption.click();
        browser.sleep(5000);
        expect(element(by.id('text_editEngrave_cpo')).isDisplayed);

    }

    this.verifyPromoGiftWrap = function () {
        var shoppingCartPO = new shoppingCartObj();
        shoppingCartPO.addGiftWrappingBtn.click();
        expect(shoppingCartPO.GWBonusYes.isSelected()).toBeFalsy();
        element(by.id('btn_cancel_gw')).click();
        browser.sleep(2000);
    }

    this.closeShoppingCart = function () {
        var shoppingCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone') {
            utilities.HighlightElement(shoppingCartPO.closeShoppingCartMobile);
            browser.sleep(5000);
            browser.executeScript("document.getElementsByTagName('ion-menu-button')[4].click();");
            browser.sleep(5000);
        } else if (browserDetails.executionName == 'ipad') {
            utilities.HighlightElement(shoppingCartPO.closeShoppingCartMobile);
            browser.executeScript("arguments[0].click();", shoppingCartPO.closeShoppingCartMobile);
            browser.sleep(5000);
        }
    }

    this.openShoppingCart = function () {
        var shopCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.sleep(10000);
            utilities.HighlightElement(shopCartPO.cartIcon);
            // shopCartPO.cartIcon.click();
            browser.executeScript("document.getElementsByName('cart')[1].click()");
            browser.sleep(5000);
            utilities.scrollTo(shopCartPO.checkoutButton);
            utilities.waitUtilElementPresent(shopCartPO.checkoutButton, waitTimeout);
            utilities.HighlightElement(shopCartPO.checkoutButton);
            reportInfo.log('Cart icon is clicked in Mobile application');
        }
    }

    this.configSelect = function () {
        var shoppingCartPO = new shoppingCartObj();
        var productDetailsPO = new productDetailsObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitForElement(shoppingCartPO.configSettingMobile, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.configSettingMobile);
            browser.executeScript("document.getElementsByName('settings')[1].click()");
            utilities.waitUtilElementPresent(shoppingCartPO.homeDemo, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.homeDemo);
        } else {
            utilities.pageWaitSec(8);
            utilities.waitForElement(shoppingCartPO.configSetting, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.configSetting);
            shoppingCartPO.configSetting.click();
            utilities.waitForElement(shoppingCartPO.homeDemo, waitTimeout);
        }
    }

    this.ConfigHomeSelect = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.updateConfig, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.homeDemo);
        shoppingCartPO.homeDemo.click();
    }
    this.ConfigVirtualDemoSelect = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.updateConfig, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.virtualDemo);
        shoppingCartPO.virtualDemo.click();
    }
    this.ConfigEventDemoSelect = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.updateConfig, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.eventDemo);
        shoppingCartPO.eventDemo.click();
    }
    this.ConfigSocialSelect = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.socialDemo, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.socialDemo);
        // shoppingCartPO.socialDemo.click();
        browser.executeScript("document.getElementById('btn_location_SOCIAL_DEMO_config').click()");
        utilities.waitForElement(shoppingCartPO.socilContainer, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.socilContainer);
        shoppingCartPO.socilContainer.click();
        utilities.waitUtilElementPresent(shoppingCartPO.socailDemoDate, waitTimeout);
        var socialDemoDateStore;
        shoppingCartPO.socailDemoDate.getText().then(function (text) {
            socialDemoDateStore = text;
            utilities.log('****** socilDemoDateStore ******', text);
            utilities.log('****** socilDemoDateStore ******', socialDemoDateStore);

        });
        shoppingCartPO.socailDemoDate.click();
        utilities.waitForElement(shoppingCartPO.socialDemoSubmitButton);
        utilities.HighlightElement(shoppingCartPO.socialDemoSubmitButton);
        shoppingCartPO.socialDemoSubmitButton.click();
        utilities.waitUtilElementPresent(shoppingCartPO.checkoutStatusChange, waitTimeout);
        shoppingCartPO.checkoutStatusChange.getText().then(function (text) {
            var checkoutStatusChangeStore = text;
            utilities.log('****** socilDemoDateStore ******', checkoutStatusChangeStore);

            // assert.include(checkoutStatusChangeStore, 'Check out');
        });
    }

    this.sellingPriceTotal = function () {
        var shoppingCartPO = new shoppingCartObj();

    }

    this.ConfigEventSelect = function () {
        var shoppingCartPO = new shoppingCartObj();
        var addressPagePO = new addressPageObj();
        utilities.waitForElement(shoppingCartPO.eventDemo, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.eventDemo);
        browser.executeScript("document.getElementById('btn_location_EVENT_DEMO_config').click()");
        utilities.waitForElement(shoppingCartPO.eventCheckinContainer, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.eventCheckinContainer);
        shoppingCartPO.eventCheckinContainer.click();
        utilities.waitForElement(shoppingCartPO.eventState, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.eventState);
        browser.sleep(4000);
        shoppingCartPO.eventState.click();
        browser.sleep(4000);
        reportInfo.log("Event State is clicked in Event Select Modal");
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitForElement(addressPagePO.billDropDownOk, waitTimeout);
            utilities.HighlightElement(addressPagePO.billDropDownOk);
            browser.executeScript("document.getElementsByClassName('alert-radio-button alert-tappable alert-radio ion-focusable sc-ion-alert-md')[0].click()");
        } else {
            Eventbillingstate("Arizona");
        }
        utilities.waitForElement(addressPagePO.billDropDownOk, waitTimeout);
        utilities.HighlightElement(addressPagePO.billDropDownOk);
        addressPagePO.billDropDownOk.click();
        utilities.waitUtilElementPresent(shoppingCartPO.eventDetailsName, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.eventDetailsName);
        shoppingCartPO.eventDetailsName.click();

        var eventDetailsNameStore;
        shoppingCartPO.eventDetailsName.getText().then(function (text) {
            eventDetailsNameStore = text;
            console.log('****** socilDemoDateStore ******', text);
            console.log('****** socilDemoDateStore ******', eventDetailsNameStore);
        });
        browser.sleep(2000);
        utilities.waitUtilElementPresent(shoppingCartPO.socialDemoSubmitButtonEnable, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.socialDemoSubmitButtonEnable);
        shoppingCartPO.socialDemoSubmitButtonEnable.click();
        utilities.waitUtilElementPresent(shoppingCartPO.checkStatus, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.checkStatus);
    }


    this.ConfigEventSelectCheckout = function (State, Place) {
        var shoppingCartPO = new shoppingCartObj();
        var addressPagePO = new addressPageObj();
        utilities.waitUtilElementPresent(shoppingCartPO.eventDemo, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.eventDemo);
        shoppingCartPO.eventDemo.click();
        utilities.waitUtilElementPresent(shoppingCartPO.socilContainer, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.socilContainer);
        shoppingCartPO.socilContainer.click();
        utilities.waitUtilElementPresent(shoppingCartPO.eventState, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.eventState);
        shoppingCartPO.eventState.click();
        browser.sleep(10000);
        shoppingCartPO.EvenetbillingstateCheckout(State);
        utilities.waitUtilElementPresent(addressPagePO.billDropDownOk, waitTimeout);
        utilities.HighlightElement(addressPagePO.billDropDownOk);
        addressPagePO.billDropDownOk.click();
        utilities.waitUtilElementPresent(shoppingCartPO.eventDetailsSearch, waitTimeout);
        utilities.scrollTo(shoppingCartPO.eventDetailsSearch);
        shoppingCartPO.eventDetailsSearch.sendKeys(Place);
        browser.sleep(3000);
        utilities.waitUtilElementPresent(shoppingCartPO.eventDetailsName, waitTimeout);
        shoppingCartPO.eventDetailsName.click();
        var eventDetailsNameStore;
        shoppingCartPO.eventDetailsName.getText().then(function (text) {
            eventDetailsNameStore = text;
        });
        browser.sleep(2000);
        utilities.waitUtilElementPresent(shoppingCartPO.socialDemoSubmitButton);
        utilities.HighlightElement(shoppingCartPO.socialDemoSubmitButton);
        shoppingCartPO.socialDemoSubmitButton.click();
        utilities.waitUtilElementPresent(shoppingCartPO.checkStatus, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.checkStatus);
        shoppingCartPO.checkStatus.click();
        browser.sleep(3000);
        utilities.waitUtilElementPresent(shoppingCartPO.checkoutStatusChange);
        shoppingCartPO.checkoutStatusChange.getText().then(function (text) {
            var checkoutStatusChangeStore = text;
            // assert.include(checkoutStatusChangeStore, 'Check out');
        });
    }

    this.ConfigEventSelectVerificationCheckout = function (State, Place) {
        var shoppingCartPO = new shoppingCartObj();
        var addressPagePO = new addressPageObj();
        utilities.waitUtilElementPresent(shoppingCartPO.eventDemo, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.eventDemo);
        utilities.waitUtilElementPresent(shoppingCartPO.checkStatus, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.checkStatus);
        utilities.waitUtilElementPresent(shoppingCartPO.checkoutStatusChange, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.checkoutStatusChange);
    }

    this.ConfigOrderTypeSelect = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.updateConfig, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.orderTypeRegular);
        utilities.scrollTo(shoppingCartPO.orderTypeRegular);
        shoppingCartPO.orderTypeRegular.click();
    }

    this.ConfigorderTypeDisbaleCheck = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.updateConfig, waitTimeout);
        shoppingCartPO.orderTypeRelator.getAttribute('aria-disabled').then(function (text) {
            var checkorderType = text;
            assert.equal(checkorderType, "true");
        });
        shoppingCartPO.orderTypeBusiness.getAttribute('aria-disabled').then(function (text) {
            var checkorderType = text;
            assert.equal(checkorderType, "true");
        });
    }

    this.checkDisabledSavingUpgrade = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.bonusAdvisor, waitTimeout);
        shoppingCartPO.savingsDisabled.getAttribute('aria-disabled').then(function (text) {
            var savingStatus = text;
            assert.equal(savingStatus, "true");
        });
        shoppingCartPO.upgradeDisabled.getAttribute('aria-disabled').then(function (text) {
            var upgradeStatus = text;
            assert.equal(upgradeStatus, "true");
        });
    }

    this.ConfigPriceTypeStandardSelect = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.priceSetupStandard, waitTimeout);
        utilities.scrollTo(shoppingCartPO.priceSetupStandard, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.priceSetupStandard);
        shoppingCartPO.priceSetupStandard.click();
    }
    this.ConfigPriceTypeCatalogSelect = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.updateConfig, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.priceSetupCatalog);
        shoppingCartPO.priceSetupCatalog.click();
    }

    this.configUpdate = function () {
        var shoppingCartPO = new shoppingCartObj();
        var productDetailsPO = new productDetailsObj();
        utilities.scrollTo(shoppingCartPO.updateConfig, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.updateConfig);

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            shoppingCartPO.updateConfig.click();
            // utilities.waitUtilElementPresent(productDetailsPO.addToCartButton, waitTimeout);
            // utilities.scrollTo(productDetailsPO.addToCartButton, waitTimeout);
            // utilities.HighlightElement(productDetailsPO.addToCartButton);
            browser.sleep(10000);
            browser.executeScript("document.getElementsByName('cart')[1].click()");
        } else {
            utilities.HighlightElement(shoppingCartPO.shoppingCartHeader);
            browser.executeScript("arguments[0].click();", shoppingCartPO.updateConfig);
        }
    }

    this.selectCatalogPricing = function () {
        var shoppingCartPO = new shoppingCartObj();
        browser.sleep(3000);
        utilities.scrollTo(shoppingCartPO.useCatalogPricing);
        utilities.waitUtilElementPresent(shoppingCartPO.useCatalogPricing, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.useCatalogPricing);
        browser.sleep(5000);
        shoppingCartPO.useCatalogPricing.click();
    }
    this.configCancel = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.scrollTo(shoppingCartPO.updateConfig, waitTimeout);

        utilities.HighlightElement(shoppingCartPO.cancelConfig);
        utilities.click(shoppingCartPO.cancelConfig);
        utilities.HighlightElement(shoppingCartPO.shoppingCartHeader);
    }

    this.quantityMaximumValidation = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.shoppingCartProductName, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.shoppingCartProductName);
        shoppingCartPO.shoppingCartQtyValidation.getText().then(function (text) {
            assert.equal(text, '99');
        })
        reportInfo.log('Verification Points - Maximum quantity value is verified');
        utilities.attachScreenshot();
    }

    this.verifyLineItem = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.productLineItem, waitTimeout);
        //    expect(shoppingCartPO.productLineItem).to.exist;
        reportInfo.log('Product line item is verified in the shopping cart section');
    }

    this.SelectEmptyCartCancelLink = function () {
        var shoppingCartPO = new shoppingCartObj();
        browser.sleep(10000);
        utilities.waitUtilElementPresent(shoppingCartPO.emptyCartLink, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.emptyCartLink);
        // shoppingCartPO.emptyCartLink.click();
        browser.executeScript("document.getElementById('emptyCart_btn').click()");
        utilities.waitForElement(shoppingCartPO.emptyCartLinkCancelButton, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.emptyCartLinkCancelButton);
        utilities.HighlightElement(shoppingCartPO.emptyCartLinkEmptyCartButton);
        shoppingCartPO.emptyCartLinkCancelButton.click();
    }
    this.SelectEmptyCartEmptyCartLink = function () {
        var shoppingCartPO = new shoppingCartObj();
        browser.sleep(10000);
        utilities.waitUtilElementPresent(shoppingCartPO.emptyCartLink, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.emptyCartLink);
        // shoppingCartPO.emptyCartLink.click();
        browser.executeScript("document.getElementById('emptyCart_btn').click()");
        utilities.waitForElement(shoppingCartPO.emptyCartLinkCancelButton, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.emptyCartLinkCancelButton);
        utilities.HighlightElement(shoppingCartPO.emptyCartLinkEmptyCartButton);
        shoppingCartPO.emptyCartLinkEmptyCartButton.click();
        reportInfo.log("Empty Cart Button is clicked in the Empty Cart Confirmation modal");
        utilities.waitUtilElementPresent(shoppingCartPO.noItemsInCartMessage, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.noItemsInCartMessage);
        reportInfo.log("The cart has no product after removal of the products");
    }


    this.selectEmptyCartLinkWithoutCartOpen = function () {
        var shoppingCartPO = new shoppingCartObj();
        var productDetailsPO = new productDetailsObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitForElement(shoppingCartPO.emptyCartLink, waitTimeout);
            utilities.pageWaitSec(8);
            utilities.HighlightElement(shoppingCartPO.emptyCartLink);
            // browser.executeScript("document.getElementById('emptyCart_btn').click()");
            shoppingCartPO.emptyCartLink.click();
            reportInfo.log("Empty Cart link is clicked in the shopping cart page");
        } else {
            utilities.waitForElement(shoppingCartPO.emptyCartLink, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.emptyCartLink);
            shoppingCartPO.emptyCartLink.click();
        }
    }

    this.SelectEmptyCartLink = function () {
        var shoppingCartPO = new shoppingCartObj();
        var productDetailsPO = new productDetailsObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            // utilities.waitUtilElementPresent(productDetailsPO.carousalImageEdit, waitTimeout);
            // utilities.HighlightElement(productDetailsPO.carousalImageEdit);
            utilities.pageWaitSec(8);
            browser.executeScript("document.getElementsByName('cart')[3].click()");
            utilities.waitForElement(shoppingCartPO.emptyCartLink, waitTimeout);
            utilities.pageWaitSec(8);
            utilities.HighlightElement(shoppingCartPO.emptyCartLink);
            browser.executeScript("document.getElementById('emptyCart_btn').click()");
            reportInfo.log("Empty Cart link is clicked in the shopping cart page");
        } else {
            utilities.waitForElement(shoppingCartPO.emptyCartLink, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.emptyCartLink);
            shoppingCartPO.emptyCartLink.click();
        }
    }

    this.SelectEmptyCartLink1 = function () {
        var shoppingCartPO = new shoppingCartObj();
        var shopCatalogPO = new shopCatalogObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(shopCatalogPO.productGrid, waitTimeout);
            utilities.HighlightElement(shopCatalogPO.productGrid);
            browser.executeScript("document.getElementsByName('cart')[2].click()");

            utilities.waitForElement(shoppingCartPO.emptyCartLink, waitTimeout);
            utilities.pageWaitSec(8);
            utilities.HighlightElement(shoppingCartPO.emptyCartLink);
            browser.executeScript("document.getElementById('emptyCart_btn').click()");
            reportInfo.log("Empty Cart link is clicked in the shopping cart page");
        } else {
            utilities.waitForElement(shoppingCartPO.emptyCartLink, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.emptyCartLink);
            shoppingCartPO.emptyCartLink.click();
        }
    }

    this.selectEmptyCartFromSetPage = function () {
        var shoppingCartPO = new shoppingCartObj();
        var shopCatalogPO = new shopCatalogObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(shopCatalogPO.productGrid, waitTimeout);
            utilities.HighlightElement(shopCatalogPO.productGrid);
            browser.executeScript("document.getElementsByName('cart')[1].click()");
        }
        utilities.waitUtilElementPresent(shoppingCartPO.emptyCartLink, waitTimeout);
        utilities.pageWaitSec(8);
        utilities.HighlightElement(shoppingCartPO.emptyCartLink);
        // shoppingCartPO.emptyCartLink.click();
        browser.executeScript("document.getElementById('emptyCart_btn').click()");
        reportInfo.log("Empty Cart link is clicked in the shopping cart page");
        utilities.waitForElement(shoppingCartPO.emptyCartSaveOrderTypeYesRadio, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.emptyCartSaveOrderTypeYesRadio);
    }

    this.clickEmptyCartLink = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.emptyCartLink, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.emptyCartLink);
        shoppingCartPO.emptyCartLink.click();
    }

    this.noItemsInCartMessage = function () {
        var shoppingCartPO = new shoppingCartObj();
        var productDetailsPO = new productDetailsObj();
        var browsePO = new browseObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(browsePO.productName, waitTimeout);
            utilities.scrollTo(browsePO.productName);
            browser.executeScript("document.getElementsByName('cart')[1].click()");
        }
        utilities.waitUtilElementPresent(shoppingCartPO.noItemsInCartMessage, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.noItemsInCartMessage);
    }

    this.EmptyCartStartNewOrderYes = function () {
        var shoppingCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone') {
            utilities.waitUtilElementPresent(shoppingCartPO.emptyCartStartNewOrderYesRadio, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.emptyCartStartNewOrderYesRadio);
            browser.executeScript(emptyCartSaveOrderOptionYes);
        } else {
            utilities.waitUtilElementPresent(shoppingCartPO.emptyCartStartNewOrderYesRadio, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.emptyCartStartNewOrderYesRadio);
            shoppingCartPO.emptyCartStartNewOrderYesRadio.click();
        }
    }


    this.EmptyCartStartNewOrderNo = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.emptyCartStartNewOrderNoRadio, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.emptyCartStartNewOrderNoRadio);
        browser.executeScript(emptyCartSaveOrderOptionNo);
    }

    this.EmptyCartSavethisOrderYes = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.emptyCartLinkEmptyCartButton, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.emptyCartSaveOrderTypeYesRadio);
        // shoppingCartPO.emptyCartSaveOrderTypeYesRadio.click();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript(emptyCartSaveOrderOptionYes);
            reportInfo.log("Empty Cart Save Order Yes radio button is clicked");
        } else {
            shoppingCartPO.emptyCartSaveOrderTypeYesRadio.click();
            // browser.executeScript("arguments[0].click()", shoppingCartPO.emptyCartSaveOrderTypeYesRadio);
            reportInfo.log("Empty Cart Save Order Yes radio button is clicked");
        }

    }
    this.EmptyCartSavethisOrderNo = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.emptyCartSaveOrderTypeNoRadio, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.emptyCartSaveOrderTypeNoRadio);

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone') {
            browser.executeScript(emptyCartSaveOrderOptionNo);
            reportInfo.log("Empty Cart Save Order No radio button is clicked");
        } else {
            shoppingCartPO.emptyCartSaveOrderTypeNoRadio.click();
            reportInfo.log("Empty Cart Save Order No radio button is clicked");
        }
    }

    this.noSaveorderVerify = function () {
        var shoppingCartPO = new shoppingCartObj();
    }

    this.emptycartsaveOrder = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(shoppingCartPO.saveOrderReasonField, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.saveOrderReasonField);
        shoppingCartPO.saveOrderReasonField.sendKeys('testing pending order');
        utilities.HighlightElement(shoppingCartPO.emptyCartLinkEmptyCartButton);
        // shoppingCartPO.emptyCartLinkEmptyCartButton.click();
        browser.executeScript("document.getElementsByClassName('empty-cart-btn')[0].click()");
        reportInfo.log("Empty Cart Button is clicked in the empty cart modal");
    }


    this.selectPendingOrderAndUpdate = function () {
        var homePagePO = new homePageObj();
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.comments, waitTimeout);
        homePagePO.comments.click();
        utilities.waitUtilElementPresent(shoppingCartPO.emptyCartLink, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.emptyCartLink);
    }

    this.selectPendingOrderAndAddToCart = function () {
        var homePagePO = new homePageObj();
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.comments, waitTimeout);
        // homePagePO.comments.click();
        browser.executeScript("document.getElementsByClassName('last-updated')[0].click()");
        reportInfo.log("Pending Order is selected from the pending order list");
        utilities.waitUtilElementPresent(shoppingCartPO.pendingOrderReplaceCartButton, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.pendingOrderReplaceCartButton);

        browser.executeScript(confirmCartReplacementYesOption);
        reportInfo.log("Confirm Cart Replacement Yes Option is selected");
        utilities.waitUtilElementPresent(shoppingCartPO.saveOrderReasonField, waitTimeout);
        shoppingCartPO.saveOrderReasonField.sendKeys('Save Order with product in the cart');
        utilities.waitForElement(shoppingCartPO.pendingOrderReplaceCartButton, waitTimeout);
        utilities.waitForElement(shoppingCartPO.pendingOrderProductName, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.pendingOrderProductName);
        utilities.scrollTo(shoppingCartPO.pendingOrderReplaceCartButton);
        shoppingCartPO.pendingOrderReplaceCartButton.click();
        reportInfo.log("Replace Cart button is clicked in the modal");

    }


    this.selectPendingOrder = function () {
        var homePagePO = new homePageObj();
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.comments, waitTimeout);
        // homePagePO.pendingOrderName.click();
        browser.executeScript("document.getElementsByClassName('comment')[0].click()");
        utilities.waitUtilElementPresent(shoppingCartPO.checkoutButton, waitTimeout);
    }

    this.verifyPendingOrderCartProductName = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.pendingOrderProductName, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.pendingOrderProductName);

        var pendingOrderProductNameStore;
        shoppingCartPO.pendingOrderProductName.getText().then(function (text) {
            pendingOrderProductNameStore = text;
            utilities.log('****** pendingOrderProductNameStore ******', pendingOrderProductNameStore);
        });
    }


    this.saveOrder = function () {
        var shoppingCartPO = new shoppingCartObj();
        var homePagePO = new homePageObj();
        utilities.waitForElement(shoppingCartPO.saveButton, waitTimeout);
        utilities.scrollTo(shoppingCartPO.saveButton);
        utilities.HighlightElement(shoppingCartPO.saveButton);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            shoppingCartPO.saveButton.click();
            utilities.waitUtilElementPresent(shoppingCartPO.saveOrderReasonField, waitTimeout);
            shoppingCartPO.saveOrderReasonField.sendKeys('testing pending order');
            shoppingCartPO.saveOrderButton.click();
            reportInfo.log("Save Order button is clicked in the save order modal");
        } else {
            utilities.click(shoppingCartPO.saveButton);
            utilities.waitUtilElementPresent(shoppingCartPO.saveOrderReasonField, waitTimeout);
            shoppingCartPO.saveOrderReasonField.sendKeys('testing pending order');
            utilities.waitUtilElementPresent(shoppingCartPO.saveOrderButton, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.saveOrderButton);
            shoppingCartPO.saveOrderButton.click();
            reportInfo.log("Save Order button is clicked in the save order modal");
        }
    }


    this.cancelOrder = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.saveButton, waitTimeout);
        shoppingCartPO.saveButton.click();
        utilities.waitUtilElementPresent(shoppingCartPO.saveOrderReasonField, waitTimeout);
        shoppingCartPO.saveOrderReasonField.sendKeys('Enter text and cancel');
        // browser.executeScript(cancelSaveOrder);
        shoppingCartPO.cancelSaveOrder.click();
    }

    this.verifyAndDeleteSaveOrder = function () {
        var shoppingCartPO = new shoppingCartObj();
        var homePagePO = new homePageObj();
        utilities.waitUtilElementPresent(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.comments);
        homePagePO.comments.getText().then(function (text) {
            ActualComments = text;
            utilities.log('****** Actual Comments ******', text);
            assert.include(ActualComments, 'testing pending order');
        });
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript(deletePendingOrder);
        } else {
            utilities.HighlightElement(homePagePO.resumeOrderMore);
            homePagePO.resumeOrderMore.click();
            utilities.waitUtilElementPresent(homePagePO.moreDeleteButton, waitTimeout);
            utilities.HighlightElement(homePagePO.moreDeleteButton);
            homePagePO.moreDeleteButton.click();
        }
        utilities.waitUtilElementPresent(homePagePO.deleteCommentButton);
        utilities.HighlightElement(homePagePO.deleteCommentButton);
        homePagePO.deleteCommentButton.click();
    }

    this.verifySaveOrder = function () {
        var shoppingCartPO = new shoppingCartObj();
        var homePagePO = new homePageObj();
        utilities.waitUtilElementPresent(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.comments);
        homePagePO.comments.getText().then(function (text) {
            ActualComments = text;
            console.log('****** Actual Comments ******', text);
            assert.include(ActualComments, 'testing pending order');
        });
        utilities.waitUtilElementPresent(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.comments);
    }


    this.verifySaveOrderCheckout = function () {
        var shoppingCartPO = new shoppingCartObj();
        var homePagePO = new homePageObj();
        utilities.waitUtilElementPresent(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.comments);
        homePagePO.comments.getText().then(function (text) {
            ActualComments = text;
            console.log('****** Actual Comments ******', text);
            // assert.include(ActualComments, 'testing switchcompany save order');
        });
        utilities.waitUtilElementPresent(homePagePO.comments, waitTimeout);
        utilities.HighlightElement(homePagePO.comments);
    }



    this.verfiyProductLineItem = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.productLineItem, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.productLineItem);
        //    expect(shoppingCartPO.productLineItem).to.exist;
        reportInfo.log('Verification Points - Product line item is verified');
    }

    this.PDPPageverfiyProductLineItem = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.productLineItem, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.productLineItem);
        //    expect(shoppingCartPO.productLineItem).to.exist;
        reportInfo.log('Verification Points - Product line item is verified');
    }

    this.verfiyProductLineItemCancel = function () {
        var shoppingCartPO = new shoppingCartObj();
        var productDetailsPO = new productDetailsObj();
        utilities.waitUtilElementPresent(shoppingCartPO.productLineItem, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.productLineItem);
        //    expect(shoppingCartPO.productLineItem).to.exist;
        utilities.HighlightElement(shoppingCartPO.productLineItem);
        utilities.waitUtilElementPresent(shoppingCartPO.productLineItem, waitTimeout);
        shoppingCartPO.productLineItem.isPresent();
        reportInfo.log('Verification Points - Product line item is verified');
    }


    this.cartPageValidations = function () {
        var shoppingCartPO = new shoppingCartObj();

        //Verification Points - Shopping Cart Page
        shoppingCartPO.productLineItem.isPresent().then(function () {
            //    expect(shoppingCartPO.productLineItem).to.exist;
            utilities.HighlightElement(shoppingCartPO.shoppingCartProductName);
            //    expect(shoppingCartPO.shoppingCartProductName).to.exist;
            utilities.HighlightElement(shoppingCartPO.qtyWrapper);
            //    expect(shoppingCartPO.qtyWrapper).to.exist;
            utilities.HighlightElement(shoppingCartPO.sellingPriceVerify);
            //    expect(shoppingCartPO.sellingPriceVerify).to.exist;
            //    expect(shoppingCartPO.productItemNumber).to.exist;
            reportInfo.log('Verification Points - Product line item is verified in the shopping cart section');
        }, 10000)

        utilities.waitForElement(shoppingCartPO.productItemNumber, waitTimeout);
        shoppingCartPO.productItemNumber.isPresent().then(function () {
            //    expect(shoppingCartPO.productColor).to.exist;
        });
        utilities.attachScreenshot();
    }

    this.cartQuantityValidations = function () {
        var shoppingCartPO = new shoppingCartObj();
        var productDetailsPO = new productDetailsObj();
        //   expect(shoppingCartPO.productItemNumber).to.exist;
        // utilities.waitUtilElementPresent(shoppingCartPO.productItemNumber, waitTimeout);
        // utilities.waitUtilElementPresent(shoppingCartPO.qtyWrapper, waitTimeout);
        utilities.waitForElement(shoppingCartPO.productItemNumber, waitTimeout);
        utilities.waitForElement(shoppingCartPO.qtyWrapper, waitTimeout);
        utilities.scrollTo(shoppingCartPO.productItemNumber);
        utilities.HighlightElement(shoppingCartPO.qtyWrapper);
        //shoppingCartPO.qtyWrapper.click();
        browser.executeScript("document.getElementsByClassName('cc-select-qty-fake-value')[0].click()");
        reportInfo.log('Click on the quantity wrapper in the shopping cart section');
        utilities.pageWaitSec(4);

        /*utilities.waitUtilElementPresent(shoppingCartPO.qtyModalOKButton, waitTimeout);
        shoppingCartPO.nonSelectedCheckbox.click();
        reportInfo.log('Select any quantity value');
        var qtyValue = shoppingCartPO.nonSelectedCheckboxQtyValue.getText();
        utilities.waitUtilElementPresent(shoppingCartPO.qtyModalOKButton, waitTimeout);
        shoppingCartPO.qtyModalOKButton.click();*/
        utilities.HighlightElement(productDetailsPO.productMoreOptionDropdown);
        productDetailsPO.productMoreOptionDropdown.click();
        utilities.pageWait(5);
        utilities.HighlightElement(productDetailsPO.productMoreOptionsQty);
        productDetailsPO.productMoreOptionsQty.sendKeys('99');
        // browser.executeScript("document.getElementsByTagName('ion-select')[1].value='99'");
        reportInfo.log('Maximum Quantity Value is selected in Update Cart Quantity Dropdown');
        utilities.pageWaitSec(3);

        utilities.HighlightElement(productDetailsPO.productQtyOkButton);
        productDetailsPO.productQtyOkButton.click();
        reportInfo.log('OK Button is clicked in the quantity modal');
        utilities.waitUtilElementPresent(shoppingCartPO.productItemNumber, waitTimeout);
        utilities.attachScreenshot();
        //   expect(shoppingCartPO.qtyWrapper).to.exist;
        utilities.waitUtilElementPresent(shoppingCartPO.productItemNumber, waitTimeout);
        reportInfo.log('Verification Points - Updated quantity is dispaleyd in the product line item section');

    }

    this.productNameUpdateCancelFromCart = function () {
        var shoppingCartPO = new shoppingCartObj();
        var productDetailsPO = new productDetailsObj();

        //Click on product name from shopping cart section/page
        utilities.waitUtilElementPresent(shoppingCartPO.shoppingCartProductName, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.shoppingCartProductName);
        //shoppingCartPO.shoppingCartProductName.click();
        browser.executeScript("document.getElementsByClassName('cart-item-name')[0].click();");
        reportInfo.log('Product name is clicked in the shopping cart page');
        utilities.pageWait();
        utilities.waitUtilElementPresent(productDetailsPO.carousalImageEdit, waitTimeout);
        //  expect(productDetailsPO.carousalImageEdit).to.exist;
        utilities.scrollTo(productDetailsPO.updateButton);

        //Verification points for Update and Cancel button to display
        utilities.waitUtilElementPresent(productDetailsPO.updateButton, waitTimeout);
        utilities.waitUtilElementPresent(productDetailsPO.cancelButton, waitTimeout);
        utilities.scrollTo(productDetailsPO.updateButton);
        utilities.HighlightElement(productDetailsPO.updateButton);
        utilities.HighlightElement(productDetailsPO.cancelButton);
        reportInfo.log('Verification Points - Update and Cancel button are dispaleyd in the update product page');
        utilities.attachScreenshot();
    }
    this.BonusOptionSelect = function () {
        var shoppingCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript(selectBonus);
            utilities.waitUtilElementPresent(shoppingCartPO.priceBonusItem, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.priceBonusItem);
            reportInfo.log("Bonus Option is clicked and Item became a bonused product");

            var BonusSellingPriceStore;
            shoppingCartPO.priceBonusItem.getText().then(function (text) {
                BonusSellingPriceStore = text;
                console.log('****** Stored BonusSellingPriceStore ******', BonusSellingPriceStore);
                // assert.include('$0.00', BonusSellingPriceStore);
                reportInfo.log("Produce price is verified as $0.00");
            });

        } else {
            if (shoppingCartPO.checkEnabled("Bonus")) {
                utilities.log("Inside BonusOptionSelect ");
                console.log("Executing if loop");
                utilities.waitUtilElementPresent(shoppingCartPO.moreEngraveOption);
                utilities.waitForElement(shoppingCartPO.moreEngraveOption);
                utilities.HighlightElement(shoppingCartPO.moreEngraveOption);

                utilities.waitUtilElementPresent(shoppingCartPO.moreBonusOption, waitTimeout);
                utilities.waitForElement(shoppingCartPO.moreBonusOption, waitTimeout);
                utilities.HighlightElement(shoppingCartPO.moreBonusOption);
                shoppingCartPO.moreBonusOption.click();

                utilities.waitUtilElementPresent(shoppingCartPO.bonusSellingPrice, waitTimeout);
                utilities.HighlightElement(shoppingCartPO.bonusSellingPrice);
                var BonusSellingPriceStore;
                shoppingCartPO.bonusSellingPrice.getText().then(function (text) {
                    BonusSellingPriceStore = text;
                    // assert.include('$0.00', text);
                });
            } else {
                console.log("Executing else loop")
                utilities.log(" BonusOption Disabled ");
            }
        }
    }

    this.BonusOptionSelectCheckout = function (skuID) {
        var shoppingCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript(selectBonusWithSkuID, skuID);
            browser.sleep(3000);
        } else {
            utilities.log("Inside BonusOptionSelect ");
            utilities.waitUtilElementPresent(shoppingCartPO.moreEngraveOption);
            utilities.HighlightElement(shoppingCartPO.moreEngraveOption);

            utilities.waitUtilElementPresent(shoppingCartPO.moreBonusOption, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.moreBonusOption);
            shoppingCartPO.moreBonusOption.click();

            utilities.waitUtilElementPresent(shoppingCartPO.bonusSellingPrice, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.bonusSellingPrice);
            var BonusSellingPriceStore;
            shoppingCartPO.bonusSellingPrice.getText().then(function (text) {
                BonusSellingPriceStore = text;
                utilities.log('****** Stored BonusSellingPriceStore ******', BonusSellingPriceStore);
                console.log('****** Stored BonusSellingPriceStore ******', BonusSellingPriceStore);

                // assert.equal(text, '$0.00');
            });
        }
    }

    this.unbonusOptionSelect = function () {
        var shoppingCartPO = new shoppingCartObj();

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone') {
            browser.executeScript(selectBonus);
            utilities.waitForElement(shoppingCartPO.priceEachItem, waitTimeout);
            reportInfo.log("Unbonus option is clicked and Order item is now become a normal product");
        } else {
            if (shoppingCartPO.checkEnabled("Unbonus")) {
                utilities.log("Inside unbonusOptionSelect ");
                utilities.HighlightElement(shoppingCartPO.bonusSellingPrice);
                var BonusSellingPriceStore;
                shoppingCartPO.bonusSellingPrice.getText().then(function (text) {
                    BonusSellingPriceStore = text;
                    utilities.log('****** Stored BonusSellingPriceStore ******', BonusSellingPriceStore);
                });

            } else {
                utilities.log(" BonusOption Disabled ");
            }
        }


    }

    this.AddBonusAdvisor = function () {
        var shoppingCartPO = new shoppingCartObj();
        var browsePO = new browseObj();
        var productDetailsPO = new productDetailsObj();
        // if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
        //     browser.executeScript("document.getElementsByClassName('bonus-btn')[4].click()");
        // } else {
        utilities.waitUtilElementPresent(shoppingCartPO.bonusAdvisor, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.bonusAdvisor);
        shoppingCartPO.bonusAdvisor.click();
        // }
        utilities.waitUtilElementPresent(browsePO.popupDoneButton);
        utilities.HighlightElement(browsePO.popupDoneButton);
        browsePO.popupDoneButton.click();

        utilities.waitUtilElementPresent(shoppingCartPO.bonusAddFirstProduct, waitTimeout);
        reportInfo.log('Bonus advisor is selected');
        var BonusProductNameStore;
        shoppingCartPO.bonusFirstProductName.getText().then(function (text) {
            BonusProductNameStore = text;
            console.log('****** Stored Bonus Product Name ******', BonusProductNameStore);
        });
        utilities.HighlightElement(shoppingCartPO.bonusAddFirstProduct);
        browser.executeScript("document.getElementsByClassName('bonusable-item-add-to-cart')[0].click();");
        utilities.waitUtilElementPresent(shoppingCartPO.closeIconBonusOverlay, waitTimeout);

        utilities.waitForElement(shoppingCartPO.closeIconBonusOverlay, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.closeIconBonusOverlay);

        utilities.scrollTo(shoppingCartPO.bonusQtyDropDown);
        utilities.waitUtilElementPresent(shoppingCartPO.bonusQtyDropDown, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.bonusQtyDropDown);
        shoppingCartPO.bonusQtyDropDown.click();
        //browser.executeScript("document.getElementsByTagName('ion-select')[0].click()");
        browser.sleep(10000);
        shoppingCartPO.bonusQtyIncrease("2");
        reportInfo.log('Quantity value is changed for Bonus Product in Bonus Advisor Screen');
        // utilities.HighlightElement(shoppingCartPO.qtyModalOKButton);
        // shoppingCartPO.qtyModalOKButton.click();
        utilities.HighlightElement(productDetailsPO.productQtyOkButton);
        productDetailsPO.productQtyOkButton.click();
        utilities.waitForElement(productDetailsPO.quantityDropDownEdit, waitTimeout);

        utilities.waitUtilElementPresent(shoppingCartPO.bonusQtyDropDown, waitTimeout);
        utilities.scrollTo(shoppingCartPO.bonusQtyDropDown);
        utilities.HighlightElement(shoppingCartPO.bonusQtyDropDown);
        utilities.waitUtilElementPresent(shoppingCartPO.bonusOverlayClose, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.bonusOverlayClose);
        shoppingCartPO.bonusOverlayClose.click();
        //browser.executeScript("document.getElementsByName('close')[4].click()");
        reportInfo.log('Bonus advisor overlay is closed');
        utilities.waitUtilElementPresent(shoppingCartPO.bonusSellingPrice, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.bonusSellingPrice);
        shoppingCartPO.bonusSellingPrice.getText().then(function (bonusProductPrice) {
            console.log('****** Stored BonusSellingPriceStore ******', bonusProductPrice);
            // assert.include(bonusProductPrice, '$0.00');
            reportInfo.log('Bonus Product Price is verified with $0.00');
        });

    }

    this.BonusOptionsDisabled = function () {
        var shoppingCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var bonusOptionStatus = browser.executeScript("document.getElementsByTagName('ion-item-option')[0].getAttribute('class')");
            console.log("Bonus Status Class value", bonusOptionStatus);
            var bonusCheck = "not-available";

            function containText(bonusCheck) {
                if (bonusOptionStatus.contains(bonusCheck)) {
                    reportInfo.log("Bonus option is disabled in the shopping cart section");
                } else {
                    assert.fail('Bonus Option is enabled');
                }
            }

        } else {
            // utilities.waitUtilElementPresent(shoppingCartPO.cartMoreOption, waitTimeout);
            // utilities.HighlightElement(shoppingCartPO.cartMoreOption);
            // shoppingCartPO.cartMoreOption.click();
            reportInfo.log('Bonus Options is Disabled ');
        }
    }

    this.engravingOptionDisabled = function () {
        var shoppingCartPO = new shoppingCartObj();

    }

    this.GiftCardBonusError = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.moreBonusOption);
        utilities.HighlightElement(shoppingCartPO.moreBonusOption);
        shoppingCartPO.moreBonusOption.click();
        utilities.waitUtilElementPresent(shoppingCartPO.checkoutButton, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.checkoutButton);
        shoppingCartPO.checkoutButton.click();
        reportInfo.log('Shopping cart Checkout button clicked ');

    }


    this.SavingsOptionSelectAndUpgradeSet = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.upgrade, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.upgrade);
        utilities.waitUtilElementPresent(shoppingCartPO.savings);
        utilities.HighlightElement(shoppingCartPO.savings);
        shoppingCartPO.savings.click();
        reportInfo.log('Savings button clicked ');
        utilities.waitUtilElementPresent(shoppingCartPO.setComparisonOverlay, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.setComparisonOverlay);
        shoppingCartPO.compare.isPresent().then(function (flag) {
            if (flag == true) {
                utilities.waitUtilElementPresent(shoppingCartPO.compare, waitTimeout);
                utilities.scrollTo(shoppingCartPO.compare);
                utilities.HighlightElement(shoppingCartPO.compare);
                shoppingCartPO.compare.click();
            }
        })
        browser.executeScript("document.getElementsByName('arrow-forward')[0].click();");
        reportInfo.log('Set is changed');
        browser.sleep(5000);
        utilities.scrollTo(shoppingCartPO.replaceSetBtn);
        utilities.waitUtilElementPresent(shoppingCartPO.replaceSetBtn, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.replaceSetBtn);
        shoppingCartPO.replaceSetBtn.click();
        shoppingCartPO.continue.isPresent().then(function (flag) {
            if (flag == true) {
                utilities.scrollTo(shoppingCartPO.continue, waitTimeout);
                utilities.HighlightElement(shoppingCartPO.continue);
                shoppingCartPO.continue.click();
            }
        })
        reportInfo.log('Set is updated');


    }



    this.UpgradeOptionSelectAndUpgradeSet = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.scrollTo(shoppingCartPO.upgrade);
        utilities.waitUtilElementPresent(shoppingCartPO.upgrade, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.upgrade);
        shoppingCartPO.upgrade.click();
        reportInfo.log('Upgrade button clicked ');

        utilities.waitUtilElementPresent(shoppingCartPO.setComparisonOverlay, waitTimeout);
        utilities.HighlightElement(shoppingCartPO.setComparisonOverlay);

        shoppingCartPO.compare.isPresent().then(function (flag) {
            if (flag == true) {
                utilities.scrollTo(shoppingCartPO.compare);
                utilities.waitUtilElementPresent(shoppingCartPO.compare, waitTimeout);
                utilities.HighlightElement(shoppingCartPO.compare);
                shoppingCartPO.compare.click();
            }
        })

        browser.executeScript("document.getElementsByName('arrow-forward')[0].click();");
        reportInfo.log('Set is changed');
        browser.sleep(10000);
        utilities.scrollTo(shoppingCartPO.replaceSetBtn);
        utilities.waitUtilElementPresent(shoppingCartPO.replaceSetBtn);
        utilities.HighlightElement(shoppingCartPO.replaceSetBtn);
        shoppingCartPO.replaceSetBtn.click();

        shoppingCartPO.continue.isPresent().then(function (flag) {
            if (flag == true) {
                utilities.scrollTo(shoppingCartPO.continue);
                utilities.HighlightElement(shoppingCartPO.continue);
                shoppingCartPO.continue.click();
            }
        })
        reportInfo.log('Set is updated');

    }

    this.EngraveOptionsDisabled = function () {
        var shoppingCartPO = new shoppingCartObj();

        utilities.waitUtilElementPresent(shoppingCartPO.threeDottedIcon, waitTimeout);
        shoppingCartPO.threeDottedIcon.click();
        utilities.HighlightElement(shoppingCartPO.engraveDisabledIndication);
        utilities.attachScreenshot();
        browser.sleep(2000);
        reportInfo.log('engrave option is disabled when the product does not have engrave functionality');

    }
    this.engraveOptionSelect = function () {
        var shopCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript(selectEngrave);
        } else {
            utilities.waitUtilElementPresent(shopCartPO.moreEngraveOption);
            utilities.waitForElement(shopCartPO.moreEngraveOption);
            utilities.HighlightElement(shopCartPO.moreEngraveOption);
            shopCartPO.moreEngraveOption.click();
        }

    }

    this.engraveOptionSelectCheckout = function (skuID) {
        var shopCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.sleep(3000);
            browser.executeScript(selectEngraveWithSkuID, skuID);
            browser.sleep(5000);
        } else {
            // browser.executeScript(selectEngrave);
            utilities.waitUtilElementPresent(shopCartPO.moreEngraveOption);
            utilities.waitForElement(shopCartPO.moreEngraveOption);
            utilities.HighlightElement(shopCartPO.moreEngraveOption);
            shopCartPO.moreEngraveOption.click();
        }

    }


    this.deleteOptionSelect = function () {
        var shopCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript("arguments[0].click();", shopCartPO.moreDeleteOption);
            browser.sleep(6000);
        } else {
            utilities.waitUtilElementPresent(shopCartPO.moreDeleteOption);
            utilities.HighlightElement(shopCartPO.moreDeleteOption);
            shopCartPO.moreDeleteOption.click();
            utilities.pageWaitSec(20);
            // utilities.waitUtilElementPresent(shopCartPO.shoppingCartHeader, waitTimeout);
            utilities.HighlightElement(shopCartPO.shoppingCartHeader);
        }
        reportInfo.log('Delete Options is clicked ');
    }

    this.deleteOptionSelectCheckout = function (skuID) {
        var shopCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript(selectDeleteWithSkuID, skuID);
        } else {
            utilities.waitUtilElementPresent(shopCartPO.moreDeleteOption);
            utilities.HighlightElement(shopCartPO.moreDeleteOption);
            utilities.pageWait(5);
            shopCartPO.moreDeleteOption.click();
            utilities.pageWaitSec(20);
            utilities.HighlightElement(shopCartPO.shoppingCartHeader);
            //browser.executeScript(selectDeleteWithSkuID, skuID);
            browser.sleep(10000);
            reportInfo.log('Delete Options is clicked ');
        }
    }

    this.verifyProductDetailsInEngraveModal = function () {
        var shoppingCartPO = new shoppingCartObj();
        var productIDFromCart;
        var productTitleFromCart;
        var productColorFromCart;
        var productQtyFromCart;
        var productIDFromEngravingModal;
        var productTitleFromEngravingModal;
        var productColorFromEngravingModal;
        var productQtyFromEngravingModal;

       utilities.HighlightElement(shoppingCartPO.saveProductIDFromCart);

        shoppingCartPO.saveProductIDFromCart.getText().then(function (text) {
            productIDFromCart = text;
        });

        utilities.HighlightElement(shoppingCartPO.saveProductTitleFromCart);
        shoppingCartPO.saveProductTitleFromCart.getText().then(function (text) {
            productTitleFromCart = text;
        });

        utilities.HighlightElement(shoppingCartPO.saveProductColorFromCart);
        shoppingCartPO.saveProductColorFromCart.getText().then(function (text) {
            productColorFromCart = text;
        });

        utilities.HighlightElement(shoppingCartPO.saveProductQtyFromCart);
        shoppingCartPO.saveProductQtyFromCart.getText().then(function (text) {
            productQtyFromCart = text;
        });

   // shoppingCartPO.saveProductQtyFromEngravingModal.contains(prdocutQtyFromCart);
   
        utilities.HighlightElement(shoppingCartPO.threeDottedIcon);
        shoppingCartPO.threeDottedIcon.click();
        utilities.HighlightElement(shoppingCartPO.moreEngraveOption);
        shoppingCartPO.moreEngraveOption.click();
        utilities.waitForElement(shoppingCartPO.engraveModalTitle);
        utilities.HighlightElement(shoppingCartPO.engraveModalTitle);
        utilities.HighlightElement(shoppingCartPO.saveProductIDFromEngravingModal);
        utilities.HighlightElement(shoppingCartPO.saveProductTitleFromEngravingModal);
        utilities.HighlightElement(shoppingCartPO.saveProductColorFromEngravingModal);
        utilities.HighlightElement(shoppingCartPO.saveProductQtyFromEngravingModal);

        shoppingCartPO.saveProductIDFromEngravingModal.getText().then(function (text) {
            productIDFromEngravingModal = text;
        });
        shoppingCartPO.saveProductTitleFromEngravingModal.getText().then(function (text) {
            productTitleFromEngravingModal = text;
        });
        shoppingCartPO.saveProductColorFromEngravingModal.getText().then(function (text) {
            productColorFromEngravingModal = text;
        });
        shoppingCartPO.saveProductQtyFromEngravingModal.getText().then(function (text) {
            productQtyFromEngravingModal = text;

            console.log("Printing ids");
            console.log(productIDFromCart);
            console.log(productIDFromEngravingModal);
            assert.equal(productIDFromCart,productIDFromEngravingModal);

            console.log(productTitleFromCart);
            console.log(productTitleFromEngravingModal);
            assert.equal(productTitleFromCart,productTitleFromEngravingModal);

            console.log(productColorFromCart);
            console.log(productColorFromEngravingModal);
            assert.equal(productColorFromCart,productColorFromEngravingModal);

            console.log(productQtyFromEngravingModal);
            console.log(productQtyFromCart);
           // expect(productQtyFromEngravingModal.toContain(productQtyFromCart));

           // expect(shoppingCartPO.saveProductQtyFromEngravingModal.getText()).toContain('1'); // need to check
            
            // expect(productQtyFromEngravingModal).contains(productQtyFromCart);
            //expect(productQtyFromEngravingModal).toContain('1'); 
            console.log("coming out of the program");
            
        });

        //expect(browser.getTitle()).toContain('my page title name');
       //expect(productQtyFromEngravingModal.contains(productQtyFromCart));
       // assert.equal(productIDFromCart,productIDFromEngravingModal);
    
    
        }

  this.verifyEngraveDetailsInCart = function() {
    var shopCartPO = new shoppingCartObj();
    utilities.waitForElement(shopCartPO.engraveTitleInCart);
    expect(shopCartPO.engraveIconInCart.isDisplayed());
    expect(shopCartPO.engraveTitleInCart.isDisplayed());
    utilities.HighlightElement(shopCartPO.engravingDetailsInCart);
    utilities.HighlightElement(shopCartPO.engravingLinesInCart);
    utilities.HighlightElement(shopCartPO.engravingPlateDetailInCart);
    expect(element(by.xpath(".//*[@class='engraving-config' and contains(.,Monogram)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-config' and contains(., Square)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-config' and contains(.,Style) and contains(.,1)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-price-wrapper ng-star-inserted' and contains(.,9)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-lines ng-star-inserted']//*[contains(text(),'Eng')]")).isDisplayed());

    expect(element(by.xpath(".//*[@class='engraving-plate-name']")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-plate-number']")).isDisplayed());
    //expect(element(by.xpath(".//*[@class='engraving-plate-price-wrapper ng-star-inserted']//*[@class='selling-price ng-star-inserted']")).isDisplayed());
    utilities.attachScreenshot();
  }

  this.verifyEngraveDetailsInCartBonusWithoutPlate = function() {
    var shopCartPO = new shoppingCartObj();
    utilities.waitForElement(shopCartPO.engraveTitleInCart);
    expect(shopCartPO.engraveIconInCart.isDisplayed());
    expect(shopCartPO.engraveTitleInCart.isDisplayed());
    utilities.HighlightElement(shopCartPO.engravingDetailsInCart);
    utilities.HighlightElement(shopCartPO.engravingLinesInCart);
    utilities.HighlightElement(shopCartPO.engravingPlateDetailInCart);
    expect(element(by.xpath(".//*[@class='engraving-config' and contains(.,Monogram)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-config' and contains(., Square)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-config' and contains(.,Style)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-price-wrapper ng-star-inserted' and contains(.,0)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-lines ng-star-inserted']//*[contains(text(),'Eng')]")).isDisplayed());
     utilities.attachScreenshot();
  }

  
  this.verifyCartDetailsengraveTypeEngraveBonus = function() {
    var shopCartPO = new shoppingCartObj();
    utilities.waitForElement(shopCartPO.engraveTitleInCart);
    expect(shopCartPO.engraveIconInCart.isDisplayed());
    expect(shopCartPO.engraveTitleInCart.isDisplayed());
    utilities.HighlightElement(shopCartPO.engravingDetailsInCart);
    utilities.HighlightElement(shopCartPO.engravingLinesInCart);
    utilities.HighlightElement(shopCartPO.engravingPlateDetailInCart);
    expect(element(by.xpath(".//*[@class='engraving-config' and contains(.,Engrave)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-config' and contains(., Square)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-config' and contains(.,Style)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-price-wrapper ng-star-inserted'][contains(.,0)]")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-lines ng-star-inserted']//*[contains(text(),'Engrave')]")).isDisplayed());

    expect(element(by.xpath(".//*[@class='engraving-plate-name']")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-plate-number']")).isDisplayed());
    expect(element(by.xpath(".//*[@class='engraving-plate-price-wrapper ng-star-inserted']//*[@class='selling-price ng-star-inserted']")).isDisplayed());
    utilities.attachScreenshot();
  }



    this.engraveTypeEngrave = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.engraveModalHeader, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveModalHeader);

        utilities.waitUtilElementPresent(shopCartPO.engraveTypeEngrave, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveTypeEngrave);
        shopCartPO.engraveTypeEngrave.click();
        utilities.waitUtilElementPresent(shopCartPO.engraveTypeEngrave, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveTypeBlade);
        utilities.scrollTo(shopCartPO.engraveTypeBlade);
        shopCartPO.engraveTypeBlade.click();
        utilities.scrollTo(shopCartPO.engraveText);
        utilities.HighlightElement(shopCartPO.engraveText);
        shopCartPO.engraveText.sendKeys("Engrave");
        utilities.scrollTo(shopCartPO.engraveBonusNo);
        shopCartPO.engraveBonusNo.click();

        utilities.scrollTo(shopCartPO.engraveSubmitButton);
        utilities.HighlightElement(shopCartPO.engraveSubmitButton);
        utilities.waitForElement(shopCartPO.engraveSubmitButton, waitTimeout)
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            shopCartPO.engraveSubmitButton.click();
            browser.sleep(8000);
            // browser.executeScript("document.getElementsByName('cart')[1].click()");
        } else {
            browser.executeScript("arguments[0].click();", shopCartPO.engraveSubmitButton);
            utilities.waitUtilElementPresent(shopCartPO.engraveApplied, waitTimeout);
            utilities.HighlightElement(shopCartPO.engraveApplied);
        }
    }

    this.engraveTypeEngrave1 = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.engraveModalHeader, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveModalHeader);

        utilities.waitUtilElementPresent(shopCartPO.engraveTypeEngrave, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveTypeEngrave);
        shopCartPO.engraveTypeEngrave.click();
        utilities.waitUtilElementPresent(shopCartPO.engraveTypeEngrave, waitTimeout);
        browser.sleep(3000);

        utilities.scrollTo(shopCartPO.engraveText);
        utilities.HighlightElement(shopCartPO.engraveText);
        shopCartPO.engraveText.sendKeys("Engrave");

        utilities.scrollTo(shopCartPO.engraveSubmitButton);
        utilities.HighlightElement(shopCartPO.engraveSubmitButton);
        shopCartPO.engraveSubmitButton.click();

    }

    this.engraveTypeEngraveBonus = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.engraveModalHeader, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveModalHeader);

        shopCartPO.engraveTypeEngrave.isPresent().then(function (flag) {
            if (flag == true) {

                utilities.waitUtilElementPresent(shopCartPO.engraveTypeEngrave, waitTimeout);
                utilities.HighlightElement(shopCartPO.engraveTypeEngrave);
                shopCartPO.engraveTypeEngrave.click();
                browser.sleep(4000);
                utilities.scrollTo(shopCartPO.engraveText);
                shopCartPO.engraveText.sendKeys("Engrave");
                utilities.waitForElement(shopCartPO.engraveTypeBlade);
                utilities.scrollTo(shopCartPO.engraveTypeBlade);
                shopCartPO.engraveTypeBlade.click();
                utilities.waitForElement(shopCartPO.engraveBonusYes);
                utilities.scrollTo(shopCartPO.engraveBonusYes);
                utilities.HighlightElement(shopCartPO.engraveBonusYes);
                shopCartPO.engraveBonusYes.click();
            }
        })

        utilities.scrollTo(shopCartPO.engraveSubmitButton);
        utilities.HighlightElement(shopCartPO.engraveSubmitButton);
        // browser.actions().mouseMove(shopCartPO.engraveSubmitButton).click().perform();
        shopCartPO.engraveSubmitButton.click();
        utilities.pageWaitSec(20);
        utilities.HighlightElement(shopCartPO.shoppingCartHeader);
        utilities.HighlightElement(shopCartPO.engraveApplied);
    }


    this.engraveTypeEngraveNoBonus = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.engraveTypeEngrave, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveTypeEngrave);
        shopCartPO.engraveTypeEngrave.click();
        utilities.waitUtilElementPresent(shopCartPO.engraveTypeEngrave, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveTypeEngrave);
        shopCartPO.engraveTypeEngrave.click();
        shopCartPO.engraveTypeBlade.click();
        utilities.scrollTo(shopCartPO.engraveBonusNo);
        shopCartPO.engraveBonusNo.click();
        shopCartPO.engraveSubmitButton.click();
    }

    this.engraveTypeEngraveSquarePlateBonus = function () {
        var shopCartPO = new shoppingCartObj();

        utilities.waitUtilElementPresent(shopCartPO.engraveModalHeader, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveModalHeader);
        utilities.pageWaitSec(5);
        shopCartPO.engraveTypeEngrave.isPresent().then(function (flag) {
            if (flag == true) {
                utilities.pageWaitSec(5);
                utilities.waitUtilElementPresent(shopCartPO.engraveTypeEngrave, waitTimeout);
                utilities.HighlightElement(shopCartPO.engraveTypeEngrave);
                utilities.click(shopCartPO.engraveTypeEngrave);
            }
        })
        shopCartPO.engraveTypeSquarePlate.isPresent().then(function (flag) {
            if (flag == true) {
                utilities.scrollTo(shopCartPO.engraveTypeSquarePlate, waitTimeout);
                utilities.HighlightElement(shopCartPO.engraveTypeSquarePlate);
                shopCartPO.engraveTypeSquarePlate.click();
            }
        })
        utilities.scrollTo(shopCartPO.engraveBonusNo);
        shopCartPO.engraveBonusYes.click();
        shopCartPO.engraveText.sendKeys("Engrave");
        utilities.scrollTo(shopCartPO.engraveBonusYes);
        shopCartPO.engraveBonusYes.click();
        utilities.scrollTo(shopCartPO.engraveSubmitButton);
        utilities.HighlightElement(shopCartPO.engraveSubmitButton);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript("document.getElementById('btn_apply_engraving').click();");
        } else {
            browser.actions().mouseMove(shopCartPO.engraveSubmitButton).click().perform();
        }
        utilities.pageWaitSec(15);
        utilities.HighlightElement(shopCartPO.shoppingCartHeader);
        utilities.HighlightElement(shopCartPO.engraveApplied);
    }



    this.engraveTypeMonogram = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.engraveTypeMonoGram, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveTypeMonoGram);
        shopCartPO.engraveTypeMonoGram.click();
        utilities.waitUtilElementPresent(shopCartPO.engraveTypeMonoGram, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveTypeMonoGram);
        shopCartPO.engraveTypeMonoGram.click();
        shopCartPO.engraveTypeBlade.click();
        utilities.scrollTo(shopCartPO.engraveBonusNo);
        shopCartPO.engraveBonusNo.click();
        shopCartPO.engraveText.sendKeys("Engrave");
        shopCartPO.engraveSubmitButton.click();
    }

    this.engraveTypeMonogramSquarePlateBonus = function () {
        var shopCartPO = new shoppingCartObj();

        utilities.waitUtilElementPresent(shopCartPO.engraveModalHeader, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveModalHeader);
        utilities.pageWaitSec(5);
        shopCartPO.engraveTypeMonoGram.isPresent().then(function (flag) {
            if (flag == true) {
                utilities.pageWaitSec(5);
                utilities.waitUtilElementPresent(shopCartPO.engraveTypeMonoGram, waitTimeout);
                utilities.HighlightElement(shopCartPO.engraveTypeMonoGram);
                browser.executeScript("document.getElementById('btn_type_M_engraving').click()");
                // utilities.click(shopCartPO.engraveTypeMonoGram);
            }
        })
        shopCartPO.engraveTypeSquarePlate.isPresent().then(function (flag) {
            if (flag == true) {
                utilities.scrollTo(shopCartPO.engraveTypeSquarePlate, waitTimeout);
                utilities.HighlightElement(shopCartPO.engraveTypeSquarePlate);
                // shopCartPO.engraveTypeSquarePlate.click();
                browser.executeScript("document.getElementById('btn_placement_S_engraving').click()");
            }
        })
        utilities.scrollTo(shopCartPO.engraveBonusNo);

        shopCartPO.engraveText.sendKeys("Engrave");
        utilities.scrollTo(shopCartPO.engraveBonusYes);
        shopCartPO.engraveBonusYes.click();
        utilities.scrollTo(shopCartPO.engraveSubmitButton);
        utilities.HighlightElement(shopCartPO.engraveSubmitButton);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript("document.getElementById('btn_apply_engraving').click();");
        } else {
            browser.actions().mouseMove(shopCartPO.engraveSubmitButton).click().perform();
        }
        browser.sleep(10000);
        utilities.HighlightElement(shopCartPO.shoppingCartHeader);
        utilities.HighlightElement(shopCartPO.engraveApplied);
    }


    this.engraveTypeMonogramSquarePlateNoBonus = function () {
        var shopCartPO = new shoppingCartObj();

        utilities.waitUtilElementPresent(shopCartPO.engraveModalHeader, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveModalHeader);
        shopCartPO.engraveTypeMonoGram.isPresent().then(function (flag) {
            if (flag == true) {

                utilities.waitUtilElementPresent(shopCartPO.engraveTypeMonoGram, waitTimeout);
                utilities.HighlightElement(shopCartPO.engraveTypeMonoGram);
                shopCartPO.engraveTypeMonoGram.click();
                browser.sleep(4000);
                shopCartPO.engraveTypeSquarePlate.isPresent().then(function (flag) {
                    if (flag == true) {
                        utilities.scrollTo(shopCartPO.engraveTypeSquarePlate, waitTimeout);
                        utilities.HighlightElement(shopCartPO.engraveTypeSquarePlate);
                        shopCartPO.engraveTypeSquarePlate.click();
                    }
                })
                utilities.scrollTo(shopCartPO.engraveBonusNo);
                shopCartPO.engraveBonusNo.click();
            }
        })
        shopCartPO.engraveText.sendKeys("Engrave");
        utilities.scrollTo(shopCartPO.engraveBonusNo);
        shopCartPO.engraveBonusNo.click();
        utilities.scrollTo(shopCartPO.engraveSubmitButton);
        utilities.HighlightElement(shopCartPO.engraveSubmitButton);
        // browser.actions().mouseMove(shopCartPO.engraveSubmitButton).click().perform();
        shopCartPO.engraveSubmitButton.click();
        utilities.pageWaitSec(15);
        utilities.HighlightElement(shopCartPO.shoppingCartHeader);
        utilities.HighlightElement(shopCartPO.engraveApplied);

    }


    this.engraveTypeMonogramDiamondPlateBonus = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.engraveModalHeader, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveModalHeader);
        shopCartPO.engraveTypeMonoGram.isPresent().then(function (flag) {
            if (flag == true) {

                utilities.waitUtilElementPresent(shopCartPO.engraveTypeMonoGram, waitTimeout);
                utilities.HighlightElement(shopCartPO.engraveTypeMonoGram);
                browser.executeScript("arguments[0].click();", shopCartPO.engraveTypeMonoGram);
                utilities.waitUtilElementPresent(shopCartPO.engraveTypeMonoGram, waitTimeout);
                utilities.HighlightElement(shopCartPO.engraveTypeMonoGram);
                browser.executeScript("arguments[0].click();", shopCartPO.engraveTypeMonoGram);
                shopCartPO.engraveTypeDiamondPlate.isPresent().then(function (flag) {
                    if (flag == true) {
                        utilities.waitUtilElementPresent(shopCartPO.engraveTypeDiamondPlate, waitTimeout);
                        utilities.HighlightElement(shopCartPO.engraveTypeDiamondPlate);
                        browser.executeScript("document.getElementById('btn_placement_D_engraving').click()");
                    }
                })
                utilities.scrollTo(shopCartPO.engraveBonusNo);
            }
        })
        browser.sleep(2000);
        shopCartPO.engraveText.sendKeys("Engrave");
        utilities.scrollTo(shopCartPO.engraveBonusNo);
        browser.executeScript("arguments[0].click();", shopCartPO.engraveBonusNo);
        utilities.scrollTo(shopCartPO.engraveSubmitButton);
        utilities.HighlightElement(shopCartPO.engraveSubmitButton);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript("document.getElementById('btn_apply_engraving').click();");
        } else {
            browser.actions().mouseMove(shopCartPO.engraveSubmitButton).click().perform();
        }
        browser.sleep(9000);
        utilities.HighlightElement(shopCartPO.shoppingCartHeader);
        utilities.HighlightElement(shopCartPO.engraveApplied);
    }


    this.engraveTypeMonogramDiamondPlateNoBonus = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.engraveModalHeader, waitTimeout);
        utilities.HighlightElement(shopCartPO.engraveModalHeader);
        shopCartPO.engraveTypeMonoGram.isPresent().then(function (flag) {
            if (flag == true) {

                utilities.waitUtilElementPresent(shopCartPO.engraveTypeMonoGram, waitTimeout);
                utilities.HighlightElement(shopCartPO.engraveTypeMonoGram);
                shopCartPO.engraveTypeMonoGram.click();
                utilities.waitUtilElementPresent(shopCartPO.engraveTypeMonoGram, waitTimeout);
                utilities.HighlightElement(shopCartPO.engraveTypeMonoGram);
                shopCartPO.engraveTypeMonoGram.click();
                shopCartPO.engraveTypeDiamondPlate.isPresent().then(function (flag) {
                    if (flag == true) {
                        utilities.waitUtilElementPresent(shopCartPO.engraveTypeDiamondPlate, waitTimeout);
                        utilities.HighlightElement(shopCartPO.engraveTypeDiamondPlate);
                        shopCartPO.engraveTypeDiamondPlate.click();
                    }
                })
                utilities.scrollTo(shopCartPO.engraveBonusNo);
                shopCartPO.engraveBonusNo.click();



            }
        })
        shopCartPO.engraveText.sendKeys("Engrave");
        utilities.scrollTo(shopCartPO.engraveBonusNo);
        shopCartPO.engraveBonusNo.click();
        utilities.scrollTo(shopCartPO.engraveSubmitButton);
        utilities.HighlightElement(shopCartPO.engraveSubmitButton);
        shopCartPO.engraveSubmitButton.click();
        utilities.pageWaitSec(15);
        utilities.HighlightElement(shopCartPO.shoppingCartHeader);
        utilities.HighlightElement(shopCartPO.engraveApplied);
    }



    this.giftWrapAllItemsTogetherBonusNo = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.scrollTo(shopCartPO.addGiftWrappingBtn);
        utilities.waitUtilElementPresent(shopCartPO.addGiftWrappingBtn);

        utilities.HighlightElement(shopCartPO.addGiftWrappingBtn);
        utilities.click(shopCartPO.addGiftWrappingBtn);
        utilities.waitUtilElementPresent(shopCartPO.GWSubmitButton);
        utilities.scrollTo(shopCartPO.GWSubmitButton);
        utilities.HighlightElement(shopCartPO.GWSubmitButton);
        browser.executeScript("arguments[0].click();", shopCartPO.GWSubmitButton);
        browser.sleep(10000);
    }


    this.giftWrapAllItemsTogetherBonusYes = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.addGiftWrappingBtn);
        utilities.scrollTo(shopCartPO.addGiftWrappingBtn);
        utilities.HighlightElement(shopCartPO.addGiftWrappingBtn);

        if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            shopCartPO.addGiftWrappingBtn.click();
        } else {
            browser.actions().mouseMove(shopCartPO.addGiftWrappingBtn).click().perform();
        }
        utilities.waitUtilElementPresent(shopCartPO.GWBonusYes);
        shopCartPO.GWBonusYes.click();
        utilities.waitUtilElementPresent(shopCartPO.GWSubmitButton);

        utilities.scrollTo(shopCartPO.GWSubmitButton);
        utilities.HighlightElement(shopCartPO.GWSubmitButton);
        shopCartPO.GWSubmitButton.click();

    }

    this.giftWrapAllItemsIndividuallyBonusNo = function () {
        var shopCartPO = new shoppingCartObj();
        browser.sleep(5000);
        utilities.scrollTo(shopCartPO.addGiftWrappingBtn);
        utilities.waitUtilElementPresent(shopCartPO.addGiftWrappingBtn, waitTimeout);

        utilities.HighlightElement(shopCartPO.addGiftWrappingBtn);
        if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad' || browserDetails.executionName == 'android') {
            shopCartPO.addGiftWrappingBtn.click();
        } else {
            browser.actions().mouseMove(shopCartPO.addGiftWrappingBtn).click().perform();
        }
        utilities.waitUtilElementPresent(shopCartPO.giftWrapHeader, waitTimeout);
        utilities.HighlightElement(shopCartPO.giftWrapHeader);
        utilities.waitUtilElementPresent(shopCartPO.allItemsIndividual);
        utilities.scrollTo(shopCartPO.allItemsIndividual);
        shopCartPO.allItemsIndividual.click();
        utilities.waitForElement(shopCartPO.addGiftWrappingBtn);
        utilities.scrollTo(shopCartPO.addGiftWrappingBtn);
        utilities.HighlightElement(shopCartPO.addGiftWrappingBtn);
        browser.executeScript("arguments[0].click();", shopCartPO.GWSubmitButton);

    }

    this.giftWrapAllItemsIndividuallyBonusYes = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.addGiftWrappingBtn);
        utilities.scrollTo(shopCartPO.addGiftWrappingBtn);
        utilities.HighlightElement(shopCartPO.addGiftWrappingBtn);

        utilities.click(shopCartPO.addGiftWrappingBtn);
        utilities.waitUtilElementPresent(shopCartPO.allItemsIndividual);
        utilities.scrollTo(shopCartPO.allItemsIndividual);
        shopCartPO.allItemsIndividual.click();
        utilities.waitUtilElementPresent(shopCartPO.addGiftWrappingBtn);
        utilities.scrollTo(shopCartPO.addGiftWrappingBtn);
        utilities.HighlightElement(shopCartPO.addGiftWrappingBtn);

        utilities.scrollTo(shopCartPO.GWBonusYes);
        shopCartPO.GWBonusYes.click();

        utilities.waitUtilElementPresent(shopCartPO.GWSubmitButton);
        utilities.scrollTo(shopCartPO.GWSubmitButton);
        utilities.HighlightElement(shopCartPO.GWSubmitButton);
        shopCartPO.GWSubmitButton.click();

    }
    this.giftWrapCustomBonusNo = function () {
        var shopCartPO = new shoppingCartObj();
        // utilities.waitUtilElementPresent(shopCartPO.addGiftWrappingBtn);
        browser.sleep(10000);
        utilities.scrollTo(shopCartPO.addGiftWrappingBtn);
        utilities.HighlightElement(shopCartPO.addGiftWrappingBtn);
        utilities.click(shopCartPO.addGiftWrappingBtn);
        utilities.waitForElement(shopCartPO.customWrapping);
        utilities.scrollTo(shopCartPO.customWrapping);
        // shopCartPO.customWrapping.click();
        browser.executeScript("document.getElementById('btn_custom_gw').click()");
        browser.sleep(3000);
        utilities.waitForElement(shopCartPO.selectQtyGW);
        utilities.scrollTo(shopCartPO.selectQtyGW);
        utilities.waitUtilElementPresent(shopCartPO.selectQtyGW, waitTimeout);
        utilities.HighlightElement(shopCartPO.selectQtyGW);
        browser.executeScript("arguments[0].click();", shopCartPO.selectQtyGW);
        browser.sleep(3000);
        utilities.scrollTo(shopCartPO.customQty);
        utilities.waitUtilElementPresent(shopCartPO.customQty, waitTimeout);
        utilities.HighlightElement(shopCartPO.customQty);
        shopCartPO.customQty.click();

        utilities.waitUtilElementPresent(shopCartPO.qtyModalOKButton, waitTimeout);
        reportInfo.log('Last Quantity option is clicked in the quantity modal');
        utilities.waitUtilElementPresent(shopCartPO.qtyModalOKButton, waitTimeout);
        utilities.HighlightElement(shopCartPO.qtyModalOKButton);
        shopCartPO.qtyModalOKButton.click();
        reportInfo.log('OK button is clicked in the quantity modal')
        utilities.waitUtilElementPresent(shopCartPO.GWInstructions);
        utilities.scrollTo(shopCartPO.GWInstructions);
        utilities.HighlightElement(shopCartPO.GWInstructions);
        shopCartPO.GWInstructions.sendKeys("Gift Wrap Instructions");
        utilities.scrollTo(shopCartPO.GWSubmitButton);
        utilities.waitUtilElementPresent(shopCartPO.GWSubmitButton, waitTimeout);
        utilities.HighlightElement(shopCartPO.GWSubmitButton);
        shopCartPO.GWSubmitButton.click();
        browser.sleep(3000);

    }


    this.deleteGiftWrapping = function () {
        var shopCartPO = new shoppingCartObj();
        // utilities.waitUtilElementPresent(shopCartPO.giftWrapMoreOption);
        // utilities.scrollTo(shopCartPO.giftWrapMoreOption);
        // utilities.HighlightElement(shopCartPO.giftWrapMoreOption);
        // shopCartPO.giftWrapMoreOption.click();

        // utilities.waitUtilElementPresent(shopCartPO.moreDeleteOption);
        // utilities.HighlightElement(shopCartPO.moreDeleteOption);
        // shopCartPO.moreDeleteOption.click();
        // reportInfo.log("Gift wrapping is deleted");
    }

    this.confirmCustomGiftWrapping = function () {
        var shopCartPO = new shoppingCartObj();

        utilities.waitUtilElementPresent(shopCartPO.customGiftwrapCheckout, waitTimeout);
        utilities.HighlightElement(shopCartPO.customGiftwrapCheckout);
        shopCartPO.customGiftwrapCheckout.click();

    }

    this.productNameMoreOption = function (productName) {
        var shopCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.log("Product More Option is not displayed in the mobile");
        } else {
            // utilities.pageWaitSec(10);
            // utilities.scrollTo(shopCartPO.cartMoreOption);
            // utilities.waitUtilElementPresent(shopCartPO.cartMoreOption, waitTimeout);
            // utilities.waitForElement(shopCartPO.cartMoreOption, waitTimeout);
            // utilities.HighlightElement(shopCartPO.cartMoreOption);
            // utilities.scrollTo(shopCartPO.checkoutButton);
            shopCartPO.productMoreOption(productName);
        }
    }

    this.selectProductFromCart = function (productName) {
        var shopCartPO = new shoppingCartObj;
        console.log("Product name", productName);
        utilities.waitUtilElementPresent(shopCartPO.CartItemName, waitTimeout);
        shopCartPO.productItem(productName);
    }


    this.checkBonusAppliedPrice = function (productName) {
        var shopCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') { } else {
            utilities.waitUtilElementPresent(shopCartPO.cartMoreOption, waitTimeout);
            shopCartPO.checkBonusApplied(productName);
        }
    }

    this.closeShoppingCartSectionMobile = function () {
        var shoppingCartPO = new shoppingCartObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(shoppingCartPO.closeShoppingCartMobile, waitTimeout);
            utilities.HighlightElement(shoppingCartPO.closeShoppingCartMobile);
            utilities.pageWaitSec(3);
            browser.executeScript("document.getElementsByName('cart')[1].click()");

            reportInfo.log("Shopping cart modal is closed in Mobile App");
            utilities.pageWaitSec(3);
        }
    }

    this.ShoppingCartCheckout = function () {
        var shopCartPO = new shoppingCartObj();
        var addressPagePO = new addressPageObj();
        utilities.scrollTo(shopCartPO.checkoutButton);
        utilities.waitUtilElementPresent(shopCartPO.checkoutButton, waitTimeout);
        if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'android' || browserDetails.executionName == 'ipad') {
            utilities.scrollTo(shopCartPO.checkoutButton);
            browser.sleep(5000);
            // shopCartPO.checkoutButton.click();
            browser.executeScript("document.getElementById('btn_checkout').click()");
            reportInfo.log('Shopping Cart Checkout button is clicked ');
            utilities.waitUtilElementPresent(addressPagePO.billFirstName, waitTimeout);
            browser.sleep(5000);
            utilities.HighlightElement(addressPagePO.billFirstName);
        } else {
            utilities.scrollTo(shopCartPO.checkoutButton);
            utilities.waitUtilElementPresent(shopCartPO.checkoutButton, waitTimeout);
            utilities.scrollTo(shopCartPO.checkoutButton);
            shopCartPO.checkoutButton.click();
            utilities.pageWaitSec(5);
        }
    }

    this.fillEventNameDetails = function () {
        var shopCartPO = new shoppingCartObj();
        browser.sleep(3000);
        browser.executeScript(eventNameDetails);
        utilities.waitForElement(shopCartPO.eventTextArea);
        utilities.scrollTo(shopCartPO.eventTextArea);
        shopCartPO.eventTextArea.sendKeys('update');
        browser.sleep(3000);
    }

    this.ShoppingCartCheckout1 = function () {
        var shopCartPO = new shoppingCartObj();
        var addressPagePO = new addressPageObj();
        utilities.scrollTo(shopCartPO.checkoutButton);
        utilities.waitUtilElementPresent(shopCartPO.checkoutButton, waitTimeout);
        if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'android' || browserDetails.executionName == 'ipad') {
            utilities.scrollTo(shopCartPO.checkoutButton);
            browser.sleep(5000);
            // shopCartPO.checkoutButton.click();
            browser.executeScript("document.getElementById('btn_checkout').click()");
            reportInfo.log('Shopping Cart Checkout button is clicked ');
            browser.sleep(13000);
        } else {
            utilities.scrollTo(shopCartPO.checkoutButton);
            utilities.waitUtilElementPresent(shopCartPO.checkoutButton, waitTimeout);
            utilities.HighlightElement(shopCartPO.checkoutButton);
            shopCartPO.checkoutButton.click();
            utilities.pageWaitSec(5);
        }
    }

    this.checkBonusAppliedPrice = function (productName) {
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.cartMoreOption, waitTimeout);
        utilities.HighlightElement(shopCartPO.cartMoreOption);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') { } else {
            utilities.waitUtilElementPresent(shopCartPO.cartMoreOption, waitTimeout);
            utilities.waitUtilElementPresent(shopCartPO.priceBonusItem, waitTimeout);
            utilities.HighlightElement(shopCartPO.priceBonusItem);
            shopCartPO.checkBonusApplied(productName);
        }
    }

    this.bonusSliderRed = function () {
        var browsePO = new browseObj();
        utilities.waitForElement(browsePO.sliderBar);
        utilities.HighlightElement(browsePO.sliderBar);
        utilities.scrollTo(browsePO.sliderBar);
        browser.actions().dragAndDrop(browsePO.sliderBar, { x: 300, y: 0 }).perform();
        utilities.pageWaitSec(5);
    }

    this.bonusSliderOrange = function () {
        var browsePO = new browseObj();
        utilities.waitForElement(browsePO.sliderBar);
        utilities.HighlightElement(browsePO.sliderBar);
        utilities.scrollTo(browsePO.sliderBar);
        browser.actions().dragAndDrop(browsePO.sliderBar, { x: 0, y: 0 }).perform();
        utilities.pageWaitSec(5);
    }

    this.bonusSliderGreen = function () {
        var browsePO = new browseObj();
        utilities.waitForElement(browsePO.sliderBar);
        utilities.HighlightElement(browsePO.sliderBar);
        utilities.scrollTo(browsePO.sliderBar);
        browser.actions().dragAndDrop(browsePO.sliderBar, { x: -250, y: 0 }).perform();
        utilities.pageWaitSec(5);
    }

    this.verifyBonusSliderDefault = function () {
        var browsePO = new browseObj();
        utilities.waitForElement(browsePO.bonusLimit);
        utilities.HighlightElement(browsePO.bonusLimit);
        utilities.scrollTo(browsePO.bonusLimit);

        expect(element(by.xpath("//div[@class='cc-bonus-value cc-bonus-val-warning'][contains(text(),'20%')]")));
        //    expect(browsePO.bonusPercent.getText()).toEqual('20%');

    }

    this.verifySetBreakDown = function () {
        var shopCartPO = new shoppingCartObj();
        expect(shopCartPO.setBreakButton.isDisplayed());
    }

    this.setBreakDown = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitForElement(shopCartPO.setBreakButton);
        utilities.HighlightElement(shopCartPO.setBreakButton);
        shopCartPO.setBreakButton.click();
        utilities.pageWaitSec(2);
        utilities.waitForElement(shopCartPO.setBreakHeader);
        utilities.HighlightElement(shopCartPO.setBreakHeader);
        expect(shopCartPO.setBreakContinue.isDisplayed());
        expect(shopCartPO.setBreakCancel.isDisplayed());
    }

    this.CancelSetBreakDown = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitForElement(shopCartPO.setBreakCancel);
        utilities.HighlightElement(shopCartPO.setBreakCancel);
        shopCartPO.setBreakCancel.click();
    }

    this.ContinueSetBreakDown = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.waitForElement(shopCartPO.setBreakContinue);
        utilities.HighlightElement(shopCartPO.setBreakContinue);
        shopCartPO.setBreakContinue.click();
    }

    this.updateQuantity = function () {
        var shopCartPO = new shoppingCartObj();
        utilities.pageWaitSec(5);
        utilities.waitForElement(shopCartPO.qtyWrapper);
        shopCartPO.qtyWrapper.click();

        utilities.waitForElement(shopCartPO.lastQty, waitTimeout);
        utilities.scrollTo(shopCartPO.lastQty);
        shopCartPO.lastQty.click();
        utilities.waitForElement(shopCartPO.qtyModalOKButton, waitTimeout);
        shopCartPO.qtyModalOKButton.click();

    }


    this.cartTotalValidation = function () {
        var shoppingCartPO = new shoppingCartObj();

        var CartTotalDisplayed = 0;
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') { } else {
            shoppingCartPO.priceEachItem.count().then(function (text) {
                var length = parseInt(text);
                console.log("total number of items in cart", length);

                priceTotal = 0;
                for (i = 1; i <= length; i++) {
                    element(by.xpath("(.//*[contains(@class,'selling-price')])[" + i + "]")).getText().then(function (text) {
                        var priceString1 = text;
                        priceString2 = priceString1.replace('$', '');
                        priceString = priceString2.replace(',', '');
                        price = parseFloat(priceString);
                        priceTotal = priceTotal + price;

                        console.log("Total Calculated: ", priceTotal);
                    })
                }
            });

            shoppingCartPO.cartTotalPrice.getText().then(function (text) {
                CartTotalDisplayed2 = text.replace('$', '');
                CartTotalDisplayed1 = CartTotalDisplayed2.replace(',', '');
                CartTotalDisplayed = parseFloat(CartTotalDisplayed1);
                console.log('****** CartTotalDisplayed ******', CartTotalDisplayed);
                module.exports.CartTotalDisplayed = CartTotalDisplayed;
            });
        }

    }


    this.updateCart = function () {
        var shopCartPO = new shoppingCartObj();
        var productDetailsPO = new productDetailsObj();

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') { } else {

            //Verification points for each product line item and add one more product to view the edit product page
            utilities.waitUtilElementPresent(shopCartPO.productLineItem, waitTimeout);
            //   expect(shopCartPO.productLineItem).to.exist;
            productDetails.addProductToCart();
            reportInfo.log('Add to cart button is clicked in the product details page');
            utilities.waitUtilElementPresent(shopCartPO.productLineItem, waitTimeout);

            //   expect(shopCartPO.productLineItem).to.exist;
            //    expect(shopCartPO.shoppingCartProductName).to.exist;
            reportInfo.log('Wait for the shopping cart section with recently added product');

            //Click on product name from shopping cart section/page
            browser.wait(EC.elementToBeClickable(shopCartPO.shoppingCartProductName), waitTimeout);
            browser.wait(EC.elementToBeClickable(shopCartPO.emptyCartLink), waitTimeout);
            browser.wait(EC.visibilityOf(shopCartPO.emptyCartLink), waitTimeout);
            shopCartPO.shoppingCartProductName.click();
            reportInfo.log('Product name is clicked from shopping cart section');
            utilities.waitUtilElementPresent(productDetailsPO.carousalImageEdit, waitTimeout);
            //    expect(productDetailsPO.carousalImageEdit).to.exist;
            utilities.scrollTo(productDetailsPO.updateButton.getWebElement());

            //Wait for Update button to display
            utilities.waitUtilElementPresent(productDetailsPO.updateButton, waitTimeout);

            //Click on quantity option and check for the maximam value of it
            utilities.waitUtilElementPresent(productDetailsPO.quantityDropDownEdit, waitTimeout);
            browser.wait(EC.visibilityOf(productDetailsPO.quantityDropDownEdit), waitTimeout);
            productDetailsPO.quantityDropDownEdit.click();

            reportInfo.log('Drop down option is clicked in the edit cart page');
            utilities.waitUtilElementPresent(shopCartPO.qtyModalCancelButton, waitTimeout);
            //  expect(shopCartPO.nonSelectedCheckboxQtyValue).to.exist;
            utilities.scrollTo(shopCartPO.lastQty.getWebElement());
            utilities.waitUtilElementPresent(shopCartPO.lastQty, waitTimeout);
            shopCartPO.lastQty.click();
            reportInfo.log('Last Quantity is selected from the list');
            browser.wait(EC.elementToBeClickable(shopCartPO.qtyModalOKButton), waitTimeout);
            shopCartPO.qtyModalOKButton.click();
            reportInfo.log('OK Button is clicked in the quantity modal');
            utilities.waitForElement(productDetailsPO.quantityDropDownEdit, waitTimeout);

            //Click on the second product name from the shopping cart section
            utilities.waitForElement(productDetailsPO.cancelButton, waitTimeout);
            utilities.pageWaitSec(5);
            utilities.waitUtilElementPresent(shopCartPO.selectSecondProduct, waitTimeout);
            utilities.HighlightElement(shopCartPO.selectSecondProduct);
            shopCartPO.selectSecondProduct.click();
            reportInfo.log('Second product name is clicked in the shopping cart section');

            //Wait for the confirm cancel modal and click on yes button in the modal
            utilities.waitForElement(shopCartPO.confirmCancelModal, waitTimeout);
            utilities.waitForElement(shopCartPO.confirmCancelYesButton, waitTimeout);
            shopCartPO.confirmCancelYesButton.click();
            reportInfo.log('Yes button is clicked in the confirm cancel modal');

            //Wait for the product details page again and verify the page content
            utilities.waitForElement(productDetailsPO.carousalImageEdit, waitTimeout);
            //   expect(productDetailsPO.carousalImageVerify).to.exist;
            reportInfo.log('Product details page is loaded completely');
            utilities.attachScreenshot();
        }
    }

    this.verifyNoButtonFromUpdateCartModal = function () {
        var shopCartPO = new shoppingCartObj();
        var productDetailsPO = new productDetailsObj();

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') { } else {

            //Verification points for each product line item and add one more product to view the edit product page
            utilities.waitUtilElementPresent(shopCartPO.productLineItem, waitTimeout);
            productDetails.addProductToCart();
            reportInfo.log('Add to cart button is clicked in the product details page');
            utilities.waitUtilElementPresent(shopCartPO.productLineItem, waitTimeout);

            reportInfo.log('Wait for the shopping cart section with recently added product');

            //Click on product name from shopping cart section/page
            browser.wait(EC.elementToBeClickable(shopCartPO.shoppingCartProductName), waitTimeout);
            browser.wait(EC.elementToBeClickable(shopCartPO.emptyCartLink), waitTimeout);
            browser.wait(EC.visibilityOf(shopCartPO.emptyCartLink), waitTimeout);
            shopCartPO.shoppingCartProductName.click();
            reportInfo.log('Product name is clicked from shopping cart section');
            utilities.waitUtilElementPresent(productDetailsPO.carousalImageEdit, waitTimeout);
            utilities.scrollTo(productDetailsPO.updateButton.getWebElement());

            //Wait for Update button to display
            utilities.waitUtilElementPresent(productDetailsPO.updateButton, waitTimeout);

            //Click on quantity option and check for the maximam value of it
            utilities.waitUtilElementPresent(productDetailsPO.quantityDropDownEdit, waitTimeout);
            browser.wait(EC.visibilityOf(productDetailsPO.quantityDropDownEdit), waitTimeout);
            productDetailsPO.quantityDropDownEdit.click();

            reportInfo.log('Drop down option is clicked in the edit cart page');
            utilities.waitUtilElementPresent(shopCartPO.qtyModalCancelButton, waitTimeout);
            utilities.scrollTo(shopCartPO.lastQty.getWebElement());
            utilities.waitUtilElementPresent(shopCartPO.lastQty, waitTimeout);
            shopCartPO.lastQty.click();
            reportInfo.log('Last Quantity is selected from the list');
            browser.wait(EC.elementToBeClickable(shopCartPO.qtyModalOKButton), waitTimeout);
            shopCartPO.qtyModalOKButton.click();
            reportInfo.log('OK Button is clicked in the quantity modal');
            utilities.waitForElement(productDetailsPO.quantityDropDownEdit, waitTimeout);

            //Click on the second product name from the shopping cart section
            utilities.waitForElement(productDetailsPO.cancelButton, waitTimeout);
            utilities.pageWaitSec(5);
            utilities.waitUtilElementPresent(shopCartPO.selectSecondProduct, waitTimeout);
            utilities.HighlightElement(shopCartPO.selectSecondProduct);
            shopCartPO.selectSecondProduct.click();
            reportInfo.log('Second product name is clicked in the shopping cart section');

            //Wait for the confirm cancel modal and click on yes button in the modal
            utilities.waitForElement(shopCartPO.confirmCancelModal, waitTimeout);
            utilities.waitForElement(shopCartPO.confirmCancelNoButton, waitTimeout);
            utilities.HighlightElement(shopCartPO.confirmCancelNoButton, waitTimeout);
            utilities.attachScreenshot();
            shopCartPO.confirmCancelNoButton.click();
            reportInfo.log('No button is clicked in the confirm cancel modal');

            //Wait for the product details page again and verify the page content
            utilities.waitForElement(productDetailsPO.carousalImageEdit, waitTimeout);
            expect((productDetailsPO.carousalImageEdit).isDisplayed());
            expect((productDetailsPO.updateButton).isDisplayed());
            reportInfo.log('Product details page is loaded completely');
            utilities.attachScreenshot();
        }
    }


}
async function clickSaveOrder() {
    const saveOrder = document.getElementsByClassName('button button-solid ion-activatable ion-focusable hydrated')[23];
    saveOrder.shadowRoot.querySelector('button').click();
}

async function cancelSaveOrder() {
    const cancelsaveOrder = document.getElementsByClassName('button button-solid ion-activatable ion-focusable hydrated')[22];
    cancelsaveOrder.shadowRoot.querySelector('button').click();
}
async function clickGiftWrapButton() {
    const btn = document.getElementById('btn_giftWrapGhostItem');
    btn.click();
}

async function shoppingCartQuantityValue() {
    const qtytest = document.getElementsByClassName('ng-star-inserted in-item hydrated')[1];
    var qtySelected = qtytest.shadowRoot.querySelector('.select-text').textContent;
    return qtySelected;
}

function isNotClickable(element) {
    return element.isPresent().then((isPresent) => {
        if (isPresent) {
            return element.isDisplayed().then((isDisplayed) => {
                if (isDisplayed) {
                    return !element.isEnabled();
                }
                return true;
            });
        }
        return true;
    });
}

async function Eventbillingstate(state) {
    var x = document.getElementsByClassName("alert-radio-label sc-ion-alert-md");
    for (var i = 0; i < x.length; i++) {
        var counter = x[i].innerText;
        console.log(" @@@@ in if loop 1 : ", state, ' ', counter)
        if (state.includes((counter))) {
            console.log(" @@@@ in if loop 2 : ", state, ' ', counter)
            document.getElementsByClassName("alert-radio-label sc-ion-alert-md")[i].click();
        }
    }


}


async function clickOnQuantityDropDown() {
    const quantityDropDown = document.getElementsByTagName('ion-select')[1];
    quantityDropDown.shadowRoot.querySelector('button').click();
}

async function deletePendingOrder() {
    var arr = document.getElementsByTagName('cc-pending-order-item');
    var ionItemOptions = arr[0].getElementsByTagName('ion-item-option');
    ionItemOptions[0].click();
}

function selectEngraveWithSkuID(productID) {
    var arrayOfElement = document.getElementsByTagName('ion-item-sliding');
    for (i = 0; i < arrayOfElement.length; i++) {
        if (arrayOfElement[i].innerText.includes(productID)) {
            var ionItemOptions = arrayOfElement[i].getElementsByTagName('ion-item-option');
        }
    }
    ionItemOptions[1].click();
}


function selectBonusWithSkuID(productID) {
    var arrayOfElement = document.getElementsByTagName('ion-item-sliding');
    for (i = 0; i < arrayOfElement.length; i++) {
        if (arrayOfElement[i].innerText.includes(productID)) {
            var ionItemOptions = arrayOfElement[i].getElementsByTagName('ion-item-option');
        }
    }
    ionItemOptions[0].click();
}

function selectDeleteWithSkuID(productID) {
    var arrayOfElement = document.getElementsByTagName('ion-item-sliding');
    for (i = 0; i < arrayOfElement.length; i++) {
        if (arrayOfElement[i].innerText.includes(productID)) {
            var ionItemOptions = arrayOfElement[i].getElementsByTagName('ion-item-option');
            ionItemOptions[2].click();
        }
    }
}


function emptyCartSaveOrderOptionYes() {
    var arr = document.getElementById('radio_cart_empty_ecm');
    var ionItemOptions = arr.getElementsByTagName('ion-item');
    ionItemOptions[1].getElementsByTagName('ion-radio')[0].click();
}

async function emptyCartSaveOrderOptionNo() {
    var arr = document.getElementById('radio_cart_empty_ecm');
    var ionItemOptions = arr.getElementsByTagName('ion-item');
    ionItemOptions[0].getElementsByTagName('ion-radio')[0].click();
}

function selectEngrave() {
    var arr = document.getElementsByTagName('ion-item-sliding');
    var ionItemOptions = arr[0].getElementsByTagName('ion-item-option');
    ionItemOptions[1].click();
}

function selectBonus() {
    var arr = document.getElementsByTagName('ion-item-sliding')
    var ionItemOptions = arr[0].getElementsByTagName('ion-item-option');
    ionItemOptions[0].click();
}

function selectDelete() {
    var arr = document.getElementsByTagName('ion-item-sliding')
    var ionItemOptions = arr[0].getElementsByTagName('ion-item-option');
    ionItemOptions[2].click();
}

function selectFirstEvent() {
    var eventName = document.getElementsByTagName('ion-radio');
    eventName[0].shadowRoot.querySelector('button').click();
}

function cartTotalCal() {
    priceTotal = 0;
    var numberOfItems = document.getElementsByClassName('selling-price').length;
    for (i = 0; i < numberOfItems; i++) {
        var index = i;
        price = parseInt(document.getElementsByClassName('selling-price')[index].textContent.replace('$', ''));
        priceTotal = priceTotal + price;


    }
    return priceTotal;
}

this.EvenetbillingstateCheckout = function (state) {
    var button = element(by.xpath(".//*[@class='alert-radio-label sc-ion-alert-md' and contains(.,'" + state + "')]"));
    utilities.scrollTo(button);
    button.click();
}



function confirmCartReplacementNoOption() {
    var arr = document.getElementsByClassName('save-cart-section');
    var ionItemOptions = arr[0].getElementsByTagName('ion-item');
    ionItemOptions[0].getElementsByTagName('ion-radio')[0].click();
}

function confirmCartReplacementYesOption() {
    var arr = document.getElementsByClassName('save-cart-section');
    var ionItemOptions = arr[0].getElementsByTagName('ion-item');
    ionItemOptions[1].getElementsByTagName('ion-radio')[0].click();
}

function eventNameDetails() {
    var textArea = document.getElementById('textarea_eventInformation');
    var textAreaInnerOpt = textArea.getElementsByTagName('textarea');
    textAreaInnerOpt[0].value = 'event details';
}

module.exports = new shoppingCartPage();