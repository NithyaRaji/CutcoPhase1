var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var addressPageObj = require('../com.sirius.pageObjects/addressesPage_po.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var PaymentObj = require('../com.sirius.pageObjects/paymentPage_po.js')


let promoPage = function () {

    this.verifyPromoPage = function () {
        var shoppingCartPO = new shoppingCartObj();
        expect(shoppingCartPO.bonusAdvisor.isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'Value')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//label[contains(text(),'CPO')]")).isPresent()).toBeFalsy();
    }

    this.editPromoAddress = function () {
        var addressPO = new addressPageObj();

        utilities.waitForElement(addressPO.billFirstName);
        utilities.HighlightElement(addressPO.billFirstName);
        addressPO.billFirstName.sendKeys('PromoAdmin');

        utilities.waitForElement(addressPO.billAddress1);
        utilities.scrollTo(addressPO.billAddress1);
        utilities.HighlightElement(addressPO.billAddress1);
        addressPO.billAddress1.sendKeys('PromoAddress');
    }

    this.verifySpecialInstructions = function () {
        expect(element(by.css('.native-textarea.sc-ion-textarea-md')).getText()).toEqual('Promo/LIT Order');
    }

      this.verifyRegFunctions = function() {
        var shoppingCartPO = new shoppingCartObj();

        utilities.waitForElement(shoppingCartPO.checkoutButton);
        utilities.HighlightElement(shoppingCartPO.checkoutButton);
        shoppingCartPO.checkoutButton.click();
        utilities.waitForElement(element(by.xpath("//span[contains(text(),'Billing & Shipping')]")));
        utilities.HighlightElement(element(by.xpath("//span[contains(text(),'Billing & Shipping')]")));
        utilities.navigatepageBackDesktop();
        utilities.pageWaitSec(2);

        utilities.waitForElement(shoppingCartPO.saveButton);
        utilities.HighlightElement(shoppingCartPO.saveButton);
        shoppingCartPO.saveButton.click();
        expect(element(by.xpath("//cc-save-order-modal")).isDisplayed());

        utilities.waitForElement(shoppingCartPO.cancelSaveOrder);
        utilities.HighlightElement(shoppingCartPO.cancelSaveOrder);
        shoppingCartPO.cancelSaveOrder.click();
    }

    this.selectBrandingTools = function() {
        var shopPO = new shoppingCartObj();
        utilities.waitForElement(shopPO.brandingTools);
        utilities.HighlightElement(shopPO.brandingTools);
        shopPO.brandingTools.click();
    }

    this.selectPacific = function() {
        var shopPO = new shoppingCartObj();
        utilities.waitForElement(shopPO.pacificEngrave);
        utilities.HighlightElement(shopPO.pacificEngrave);
        shopPO.pacificEngrave.click();
    }

    this.selectRegimbalAward = function() {
        var shopPO = new shoppingCartObj();
        utilities.waitForElement(shopPO.regimbalAward);
        utilities.HighlightElement(shopPO.regimbalAward);
        shopPO.regimbalAward.click();
    }

    this.selectTideyEngrave = function() {
        var shopPO = new shoppingCartObj();
        utilities.waitForElement(shopPO.tideyEngrave);
        utilities.HighlightElement(shopPO.tideyEngrave);
        shopPO.tideyEngrave.click();
    }

}
module.exports = new promoPage();