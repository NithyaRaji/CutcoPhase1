var utilities = require('./utilities.js');
var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var testInputs = require('../com.sirius.testData/data.json');

var cartFirstProduct = element.all(by.xpath("(.//*[@name='more'])")).first();

var toast = element(by.css(".toast-msg"));


let cpoValidation = function () {

    this.handleskip = function () {
        var skipbutton = element(by.css(".introjs-button.introjs-skipbutton"));
        utilities.waitForElement(skipbutton);
        skipbutton.click();

    }

    this.negativeCPOError = function () {
        var shoppingCartPO = new shoppingCartObj();
        var cartFirstProduct = element.all(by.xpath("(.//*[@name='more'])")).first();
        var toast = element(by.css(".toast-msg"));

        utilities.pageWaitSec(5);
        utilities.waitForElement(shoppingCartPO.cartMoreOption);
        utilities.HighlightElement(shoppingCartPO.cartMoreOption);
        shoppingCartPO.cartMoreOption.click();

        utilities.pageWaitSec(5);
        utilities.waitForElement(shoppingCartPO.moreBonusOption);
        utilities.HighlightElement(shoppingCartPO.moreBonusOption);
        shoppingCartPO.moreBonusOption.click();
        utilities.pageWaitSec(5);
        utilities.waitForElement(cartFirstProduct);
        utilities.scrollTo(cartFirstProduct);
        utilities.HighlightElement(cartFirstProduct);
        cartFirstProduct.click();

        utilities.pageWaitSec(5);
        utilities.waitForElement(shoppingCartPO.moreDeleteOption);
        utilities.HighlightElement(shoppingCartPO.moreDeleteOption);
        shoppingCartPO.moreDeleteOption.click();

        utilities.pageWaitSec(5);
        utilities.waitForElement(shoppingCartPO.checkoutButton);
        shoppingCartPO.checkoutButton.click();

        utilities.pageWaitSec(5);
        utilities.waitForElement(shoppingCartPO.checkoutButton);
        utilities.HighlightElement(toast);


        expect(toast.getText()).toEqual('Too many bonus points used on this order. The price list suggests a maximum of 20 bonus points per $100 retail.');


        utilities.pageWaitSec(5);

    }

}
module.exports = new cpoValidation();
